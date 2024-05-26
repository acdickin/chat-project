import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../store/useConversation';
import useGetConversations from '../../hooks/useGetConverstations'
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSumbit = (e) => {
        e.preventDefault()
        if (!search) return;
        if (search.lenght < 3) {
            toast.error('Search term must be atleast 3 characters long')
        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else {
            toast.error("No user found")
        }
    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSumbit}>
            <input type="text" placeholder='Search...' className=" input input-bordered rounded-full" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit " className='btn btn-circle btn-round border-none hover:bg-sky-400 bg-green-400 text-white'>
                <IoSearchSharp />
            </button>
        </form>
    )
}

export default SearchInput