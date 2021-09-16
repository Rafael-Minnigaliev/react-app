import { ListItem, ListItemText, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";
import "./ChatList.scss";

export const ChatList = ({ chatId, chatList, handeleClickChatDelete }) => {
  if (chatList) {
    return chatList.map((el) => {
      return (
        <div className="ChatList" key={el.id}>
          <Link className="ChatList__chat" to={`/chats/${el.id}`}>
            <ListItem divider button>
              <ListItemText style={{ color: chatId === el.id ? "#11cb5f" : "#1976d2" }} primary={el.chatName} />
            </ListItem>
          </Link>
          <IconButton onClick={() => handeleClickChatDelete(el.id)}>
            <ClearIcon />
          </IconButton>
        </div>
      );
    });
  } else {
    return null;
  }
};
