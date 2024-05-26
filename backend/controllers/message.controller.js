import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js'
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    console.log("Message sent ", req.params.id)
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user.id;
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        })

        if (!conversation) {
            console.log("creating conversation")
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
            console.log("created: ", conversation)
        }
        const newMessage = Message({
            senderId,
            recieverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([conversation.save(), newMessage.save()])

        //Socket IO 
        const receiverSocketId = getReceiverSocketId(recieverId);
        if (receiverSocketId) {
            // send emit to specific user
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Send message error ", error)
        res.status(500).json({ error: "Internal server error" })
    }
}
export const getMessage = async (req, res) => {
    console.log("Message get ", req.params.id)
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")

        if (!conversation) return res.status(200).json([]);
        return res.status(200).json(conversation.messages)
    } catch (error) {
        console.log("Get message error ", error)
        res.status(500).json({ error: "Internal server error" })
    }
}