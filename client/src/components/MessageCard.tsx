export enum MESSAGE_TYPES {
  SENT,
  RECEIVED,
}

interface ChatInfo {
  type: MESSAGE_TYPES;
  name: string;
  number: string;
  content: string;
  createdAt: string;
}

interface MessageCardProps {
  chatInfo: ChatInfo;
}

const formatToOnlyTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString();
};

const MessageCard = ({ chatInfo }: MessageCardProps) => {
  return (
    <div
      className={`w-full h-fit flex ${
        chatInfo.type == MESSAGE_TYPES.SENT ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex mx-3 space-x-2">
        {chatInfo.type == MESSAGE_TYPES.RECEIVED && (
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        )}
        <div
          className={`w-fit h-fit ${
            chatInfo.type == MESSAGE_TYPES.SENT
              ? "bg-green-100 rounded-l-lg"
              : "bg-white rounded-r-lg"
          } px-3 py-2 rounded-b-lg min-w-60 flex flex-col max-w-96 space-y-2 shadow-md`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-ws-green-400">
              {chatInfo.name}
            </p>
            <p className="text-[10px] text-gray-400">{chatInfo.number}</p>
          </div>

          <div>
            <p className="text-black text-sm">{chatInfo.content}</p>
          </div>

          <div className="flex justify-end">
            <div className="flex items-center space-x-2">
              <p className="text-[10px] text-gray-400">
                {formatToOnlyTime(chatInfo.createdAt)}
              </p>

              {chatInfo.type == MESSAGE_TYPES.SENT && (
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
