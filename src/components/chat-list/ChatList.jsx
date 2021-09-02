import { ListItem, ListItemText, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ChatList.scss";

export const ChatList = ({ chatList, chatId, setName, handeleClickChatDelete }) => {
  useEffect(() => {
    if (!chatList[chatId]) {
      setName("");
    } else {
      setName(chatList[chatId].name);
    }
  }, [chatList, chatId, setName]);

  return Object.keys(chatList).map((id) => (
    <div className="ChatList">
      <Link
        className="ChatList__chat"
        to={`/chats/${id}`}
        key={id}
        style={{ textDecoration: "none" }}
      >
        <ListItem divider button>
          <ListItemText
            style={{ color: id === chatId ? "#11cb5f" : "#1976d2" }}
            primary={chatList[id].name}
          />
        </ListItem>
      </Link>
      <IconButton aria-label="delete" onClick={() => handeleClickChatDelete(id)}>
        <ClearIcon />
      </IconButton>
    </div>
  ));
};
