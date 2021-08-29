import { ListItem, ListItemText } from "@material-ui/core";
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
  });

  return Object.keys(chatList).map((id) => (
    <Link to={`/chats/${id}`} key={id} style={{ textDecoration: "none" }}>
      <div className="ChatList">
        <ListItem divider button>
          <ListItemText
            style={{ color: id === chatId ? "#11cb5f" : "#1976d2" }}
            primary={chatList[id].name}
          />
          <button onClick={handeleClickChatDelete}>Delete</button>
        </ListItem>
      </div>
    </Link>
  ));
};
