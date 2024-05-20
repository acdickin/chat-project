import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js'
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

        await conversation.save()
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Send message error ", error)
        res.status(500).json({ error: "Internal server error" })
    }


}