import MessageMenu from "./MessageMenu";
import date from "../../../utils/date";


const MessageCard = ({ rtl, data, menu, style }) => {

  const direction = rtl ? "items-end" : "item-start"

  return (
    <div className={`flex flex-col ${direction} w-full h-fit mb-6 last-of-type:mb-0`}>
      <p style={{color: style.color.dark}} className="text-sm font-bold mb-[5px] capitalize">{data.username}</p>
      <div className="max-w-[75%] w-fit relative">
        <MessageMenu data={data} list={menu} rtl={rtl}/>
        <div style={{backgroundColor: style.color.light}} className="w-fit min-w-[70px] h-fit rounded-[5px] p-[10px]">
            <p className="text-sm text-[#4F4F4F]">{data.message}</p>
            <span className="text-xs mt-3">
              {date.chat.time(data?.editedAt || data.createdAt)} {data?.editedAt ? <i>edited</i> : null}
            </span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
