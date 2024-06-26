import { useAuthContext } from "../../context/AuthContext";
import useConversation from '../../store/useConversation'
import { extractTime } from "../../utils/extractTime";
const Message = ({ messageData }) => {
    const { message, updatedAt } = messageData;
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation();
    const fromMe = messageData.senderId === authUser._id;
    const formattedTime = extractTime(updatedAt);
    const chatClassName = fromMe ? "chat-end " : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-green-400" : "";
    const shakeClass = message.shouldShake ? "shake" : "";



    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble chat-bubble-info ${bubbleBgColor} ${shakeClass} text-white`} >{message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    )
}

export default Message