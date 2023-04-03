import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ChatLists from "./ChatLists";
import ChatRoom from "./ChatRoom";

const Chat = () => {
  const [chats, setChats] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchingChats = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/6425468aebd26539d0a04c2b",
      );
      const data = await response.json();
      setChats(data.record);
    } catch (error) {
      alert("Failed fetching chats...");
    }

    setLoading(false);
  };

  const mergeNewMsg = (id, newMsg) => {
    const newChat = [...chats].map((chat) => {
      const currentChat = chat;

      if (chat.id === id) {
        currentChat.chats = [...currentChat.chats, ...currentChat.new_chats];
        if (newMsg) currentChat.chats.push(newMsg);
        currentChat.new_chats = [];
      }

      return currentChat;
    });

    setChats(newChat);
  };

  const editMsg = (currentRoom, payload) => {
    const newChat = [...chats].map((chatTarget) => {
      if (chatTarget.id === currentRoom) {
        const updatedChat = chatTarget.chats.map((item) => {
          return item.id === payload.id ? { ...item, ...payload } : item;
        });
        chatTarget.chats = updatedChat;
      }
      return chatTarget;
    });

    setChats(newChat);
  };

  const deleteMsg = (currentRoom, msgID) => {
    const newChat = [...chats].map((chatTarget) => {
      if (chatTarget.id === currentRoom) {
        const updatedChat = chatTarget.chats.filter((item) => item.id !== msgID);
        chatTarget.chats = updatedChat;
      }
      return chatTarget;
    });

    setChats(newChat);
  };

  useEffect(() => {
    if (!chats) fetchingChats();
  }, []);

  return (
    <Routes>
      <Route index element={<ChatLists chats={chats} loading={loading} />} />
      <Route
        path=":id"
        element={
          <ChatRoom
            chats={chats}
            readMsg={mergeNewMsg}
            editMsg={editMsg}
            delMsg={deleteMsg}
          />
        }
      />
    </Routes>
  );
};

export default Chat;
