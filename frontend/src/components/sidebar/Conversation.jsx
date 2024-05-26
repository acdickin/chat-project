import React from 'react'
import useConversation from "../../store/useConversation";
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { _id, fullName, profilePic } = conversation

    const isSelected = selectedConversation?._id == _id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
    return (
        <>
            <div
                className={`flex gap-2 item-cent hover:bg-green-400 rounded p-2 py-1 cursor-pointer mb-6 ${isSelected ? "bg-sky-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={profilePic} alt='user avatar' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className="flex gap-3 justify-between">
                        <p className='font-bold text-white'>{fullName}</p>
                    </div>
                </div>

                {/* <div className="avatar offline">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div> */}
            </div >
            {!lastIdx
                ? (
                    <div>
                        <div className='divider my-0 py-0 h-1' />
                    </div>
                )
                : null
            }
        </>
    )
}

export default Conversation