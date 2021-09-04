import { ListItem, ListItemText, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ChatList.scss";

export const ChatList = ({ chatId, chatList, handeleClickChatDelete, setName }) => {
  useEffect(() => {
    if (!chatId || !chatList.find((item) => item.id === chatId)) {
      setName("");
    } else {
      setName(chatList.find((item) => item.id === chatId).name);
    }
  }, [chatList, chatId, setName]);

  return chatList.map((el) => (
    <div className="ChatList">
      <Link className="ChatList__chat" to={`/chats/${el.id}`} key={el.id}>
        <ListItem divider button>
          <ListItemText
            style={{ color: chatId === el.id ? "#11cb5f" : "#1976d2" }}
            primary={el.name}
          />
        </ListItem>
      </Link>
      <IconButton onClick={() => handeleClickChatDelete(el.id)}>
        <ClearIcon />
      </IconButton>
    </div>
  ));
};
