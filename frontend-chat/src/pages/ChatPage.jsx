import ChatBox from '../components/ChatBox';

const ChatPage = () => {
    return (
    <div className='bg-neutral-100 p-4 min-h-screen h-screen flex flex-col gap-3'>
        <h1 className='text-3xl text-center font-bold'>Class Chat</h1>
        <ChatBox />
    </div>
    );
};

export default ChatPage;
