import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import color from "../../../utils/color";
import BackArrow from "../../../assets/icons/arrow_back_24px.svg";
import Close from "../../../assets/icons/close_24px.svg";

import MessageCard from "./MessageCard";
import ChatInput from "../ChatInput";
import LoadingCS from "./LoadingCS";


const ChatRoom = ({ chats, readMsg, editMsg, delMsg }) => {

  const [editData, setEdit] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const containerScrollRef = useRef(null);

  const payload = chats.filter((chat) => chat.id === state.data.id)[0];

  const menuData = {
    you: [
      { text: "Edit", color: "#2F80ED", click: (data) => setEdit(data) },
      { text: "Delete", color: "#EB5757", click: (roomID,msgID) => delMsg(roomID,msgID) },
    ],
    other: [
      { text: "Share", color: "#2F80ED", click: () => false },
      { text: "Reply", color: "#2F80ED", click: () => false },
    ],
  };

  const participantColor = () => {
    const participants = [...payload.chats, ...payload.new_chats];
    const participantStyle = participants.reduce((acc, cur, i) => {
      if (!acc[cur.username]) {
        acc[cur.username] = {
          color: color.collection[i],
        };
      }
      return acc;
    }, {});
    return participantStyle;
  };

  const backToListChat = () => {
    if (payload.new_chats) readMsg(payload.id);
    navigate("/inbox");
  };

  const closePanel = () => {
    if (payload.new_chats) readMsg(payload.id);
    navigate("/");
  };

  const groupingMessage = () => {
    const today = new Date();
    const groupedChats = {};

    payload.chats.forEach((chat) => {
      const date = new Date(chat.createdAt);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      let key;
      if (date.toDateString() === today.toDateString()) {
        key = `Today ${month}, ${day} ${year}`;
      } else {
        key = `${month}, ${day} ${year}`;
      }
      if (!groupedChats[key]) {
        groupedChats[key] = [];
      }
      groupedChats[key].push(chat);
    });

    if (payload.new_chats.length) groupedChats.new = payload.new_chats;

    return groupedChats;
  };

  const observerNewMsg = () => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setShowPopup(!entries[0].isIntersecting);
      },
      { threshold: [1] },
    );

    observer.observe(ref.current);
  };

  const scrollToBottom = () => {
    const container = containerScrollRef.current;
    const { height } = container.getBoundingClientRect();
    container.scrollTo(0, height > 10000 ? height + 100 : 10000);
  };

  useEffect(() => {
    groupingMessage();
    observerNewMsg();
    scrollToBottom();
  }, [chats]);

  const styles = participantColor();
  const formattedMsg = groupingMessage();

  return (
    <>
      <div className="flex items-center px-[29px] py-[18px] border-b border-[#BDBDBD]">
        <button className="w-fit h-fit" onClick={backToListChat}>
          <img src={BackArrow} alt="back arrow" className="w-[16px] h-[16px]" />
        </button>
        <div className="ml-[18px]">
          <h2 className="font-bold text-base text-[#2F80ED]">
            {payload.type === "group" ? payload.group_name : payload.chat_name}
          </h2>
          {payload.type === "group" ? <p className="text-xs text-[#333333]">{payload.participants} Participants</p> : false}
        </div>
        <button className="block w-fit h-fit ml-auto" onClick={closePanel}>
          <img src={Close} alt="close button" className="w-[14px] h-[14px]" />
        </button>
      </div>
      { showPopup && payload.new_chats.length ?
          <h4 className="absolute bottom-[65px] z-30 translate-x-[-50%] left-1/2 text-[#2F80ED] px-4 py-2 rounded-md bg-[#E9F3FF]">
            New Message
          </h4> : false

      }
      <div
        ref={containerScrollRef}
        className="w-full h-auto overflow-y-auto py-3 px-8 my-2"
      >
        {
          Object.keys(formattedMsg).map((msg) => {
            return (
              <div
                key={msg}
                className={`border-t my-12 first-of-type:mt-2 last-of-type:mb-3 ${
                  msg === "new" ? "border-[#EB5757]" : "border-[#4F4F4F]"
                }`}
              >
                <h4
                  ref={msg === "new" ? ref : null}
                  className={`font-bold capitalize text-center w-fit h-fit bg-white mx-auto mt-[-13px] px-7 ${
                    msg === "new" ? "text-[#EB5757]" : "text-[#4F4F4F]"
                  }`}
                >
                  {msg === "new" ? "New Message" : msg}
                </h4>
                {formattedMsg[msg].map((item) => (
                  <MessageCard
                    key={item.id}
                    data={item}
                    rtl={item.username === "You"}
                    menu={item.username === "You" ? menuData.you : menuData.other}
                    style={styles[item.username]}
                  />
                ))}
              </div>
            );
          })
        }
      </div>
      { state.data.type === "chat" ? <LoadingCS/> : false }
      <ChatInput editData={editData} setEdit={setEdit} updateMsg={editMsg} sendMessage={readMsg} />
    </>
  );
};

export default ChatRoom;
