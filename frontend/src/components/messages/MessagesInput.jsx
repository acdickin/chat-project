import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessagesInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSumbit = async (e) => {
        e.preventDefault()
        if (!message) return;
        await sendMessage(message)
    }

    return (
        <form className='px-4 my-3' onSubmit={handleSumbit}>
            <div className='w-full flex'>
                <input
                    type="text"
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit" className='p-3'>
                    {!loading ? (
                        <BsSend />
                    ) : (
                        <span className='loading loading-spinner'></span>
                    )}
                </button>
            </div>
        </form>
    )
}

export default MessagesInput