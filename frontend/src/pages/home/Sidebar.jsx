import React from 'react'
import SearchInput from '../../components/sidebar/SearchInput'
import Conversations from '../../components/sidebar/Conversations'
import LogoutButton from '../../components/sidebar/LogoutButton'
const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
            <div className='divider px-3' />
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar