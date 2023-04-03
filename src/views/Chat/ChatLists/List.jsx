import Avatar from "../Avatar";
import date from "../../../utils/date";

const List = ({ data }) => {
  
  const { createdAt, message, username } = data.chats[data.chats.length - 1];

  return (
    <div className="relative flex items-start w-full h-fit py-[22px] cursor-pointer">
      {data.new_chats.length ? (
        <div className="absolute translate-y-[-50%] top-1/2 right-0 w-[10px] h-[10px] rounded-full bg-[#EB5757]"></div>
      ) : (
        false
      )}
      <div className="relative w-[68px] h-fit">
        <div className={`absolute top-0 ${data.type === "group" ? "left-[17px]" : "left-[12px]"} z-20`}>
          <Avatar variant="blue" />
        </div>
        { data.type === "group" && 
          <div className="absolute top-0 left-0 z-10">
            <Avatar variant="gray" />
          </div>
        }
      </div>
      <div className="w-fit">
        <div className="flex items-start">
          <h2 className="text-base font-bold text-[#2F80ED] max-w-[300px]">
            {data.type === "group" ? data.group_name : data.chat_name}
          </h2>
          <p className="text-sm ml-4 mt-1">{date.chat.fulltime(createdAt)}</p>
        </div>
        <p className="text-[#4F4F4F] text-sm font-bold">{username} :</p>
        <p className="text-[#4F4F4F] text-sm w-full max-w-[300px] line-clamp-1">
          {message}
        </p>
      </div>
    </div>
  );
};

export default List;
