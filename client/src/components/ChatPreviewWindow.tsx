import MessageCard, { MESSAGE_TYPES } from "./MessageCard";

const ChatPreviewWindow = () => {
  return (
    <div className="w-full z-40 flex flex-col space-y-5 min-h-0 overflow-y-auto py-3 custom-scrollbar">
      <MessageCard
        chatInfo={{
          content: "Hii there how are you?",
          createdAt: "2025-08-21T12:38:06",
          name: "John Doe",
          number: "+91 1234567890",
          type: MESSAGE_TYPES.SENT,
        }}
      />

      <MessageCard
        chatInfo={{
          content: "Fine buddy",
          createdAt: "2025-08-21T12:38:06",
          name: "WAgent",
          number: "+91 9722626262",
          type: MESSAGE_TYPES.RECEIVED,
        }}
      />
    </div>
  );
};

export default ChatPreviewWindow;
