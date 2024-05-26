import Conversation from './Conversation'
import useGetConverstations from '../../hooks/useGetConverstations'
const Conversations = () => {
    const { loading, conversations } = useGetConverstations()

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx == conversations.length - 1}
                />
            ))}
            {loading ? (<span className='spinner loading-spinner'></span>) : null}
        </div>
    )
}

export default Conversations