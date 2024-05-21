import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
    }]
    //createdAt, updatedAt => memeber since <created at>
}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationSchema)

export default Conversation