import React from 'react'
import Messages from '../../components/messages/Messages'
import MessagesInput from '../../components/messages/MessagesInput'
const MessageContainer = () => {
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            <>
                <div className='bg-sky-500 px-4 py-2 mb-2'>
                    <span className='label-text'> To: </span>{""}
                    <span className='text-b font-bold'>John Doe</span>
                </div>
                <Messages />
                <MessagesInput />
            </>
        </div>
    )
}

export default MessageContainer