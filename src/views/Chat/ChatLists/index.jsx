import { Link } from "react-router-dom";
import Search from "../Search";
import { Loading } from "../../../components";
import List from "./List";

const ChatLists = ({ loading, chats }) => {
  return (
    <div className="py-6 px-8">
      <Search />
      <div className="w-full h-full overflow-y-auto">
        {loading ? (
          <Loading text="Chat" />
        ) : chats?.length ? (
          chats.map((chat) => {
            return (
              <Link
                key={chat.id}
                to={chat.id}
                state={{ data: chat }}
                className="block border-b border-[#828282] last-of-type:border-0"
              >
                <List data={chat} />
              </Link>
            );
          })
        ) : (
          <p>Chat is empty</p>
        )}
      </div>
    </div>
  );
};

export default ChatLists;
