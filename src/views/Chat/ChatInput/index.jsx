import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../../components";
import date from "../../../utils/date";


const ChatInput = ({ sendMessage, editData, setEdit, updateMsg }) => {

  const inputRef = React.useRef();
  const { state } = useLocation();

  const sendClick = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    if (!inputValue.length) return;

    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (!!editData) {

      updateMsg(state.data.id, {
        id : editData.id,
        editedAt: date.chat.getTime(),
        message: inputValue
      });
      setEdit(null);

    } 
    else {
      sendMessage(state.data.id,{
        id: `you+${randomNum}`,
        username: "You",
        createdAt: date.chat.getTime(),
        message: inputValue,
      });
    }

    return (inputRef.current.value = "");
  };

  React.useEffect(() => {
    if (!!editData) inputRef.current.value = editData.message;
  }, [editData]);

  return (
    <form
      className="flex justify-between items-center w-full h-fit px-8 mb-5"
      onSubmit={sendClick}
    >
      <input
        ref={inputRef}
        type="text"
        name="input message"
        placeholder="Type a new message"
        className="border border-[#828282] w-full mr-[13px] h-[40px] px-4 rounded-[5px]"
      />
      <Button
        type="submit"
        value={!!editData ? "Edit" : "Send"}
      />
    </form>
  );
};

export default ChatInput;
