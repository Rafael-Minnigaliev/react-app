import { ListItem, ListItemText, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";
import "./ChatList.scss";

export const ChatList = ({ chatId, chatList, handeleClickChatDelete }) => {
  return chatList.map((el) => (
    <div className="ChatList">
      <Link className="ChatList__chat" to={`/chats/${el.id}`} key={el.id}>
        <ListItem divider button>
          <ListItemText
            style={{ color: chatId === el.id ? "#11cb5f" : "#1976d2" }}
            primary={el.chatName}
          />
        </ListItem>
      </Link>
      <IconButton onClick={() => handeleClickChatDelete(el.id)}>
        <ClearIcon />
      </IconButton>
    </div>
  ));
};
