import { List, ListSubheader, TextField, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../../Routing/Constants";
import { Message } from "../../Components/Message";
import { Form } from "../../Components/Form";
import { ChatList } from "../../Components/Chat-list";
import "./Chats.scss";

const initialChats = {
  id1: {
    name: "Vanya",
    messages: [],
  },
  id2: {
    name: "Dima",
    messages: [],
  },
  id3: {
    name: "Misha",
    messages: [],
  },
  id4: {
    name: "Vasya",
    messages: [],
  },
};

export const Chats = () => {
  const [message, setMessage] = useState("");
  const [messageId, setMessgeId] = useState(0);
  const { path } = useRouteMatch();
  const { chatId } = useParams();
  const [chatList, setChatList] = useState(initialChats);
  const [name, setName] = useState("");
  const [newChat, setNewChat] = useState("");
  const [notice, setNotice] = useState("");
  const [chatIdCounter, setChatIdCounter] = useState("id5");

  if (!chatList[chatId] && path === "/chats/:chatId?") {
    return <Redirect to={ROUTES.CHATS} />;
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (message.length !== 0) {
      setMessgeId(messageId + 1);
      setChatList({
        ...chatList,
        [chatId]: {
          ...chatList[chatId],
          messages: [...chatList[chatId].messages, { messageId: messageId, message: message }],
        },
      });
      setMessage("");
      const timer = setTimeout(() => {
        setNotice(`The message was sent to the contact: ${name}`);
      }, 1500);
      return () => clearTimeout(timer);
    }
  };

  const mouseOver = () => {
    setNotice("");
  };

  const handleChatChange = (e) => {
    setNewChat(e.target.value);
  };

  const handleClickSetChat = () => {
    if (newChat.length !== 0) {
      setChatIdCounter(`id${Math.random() + 6}`);
      setChatList({ ...chatList, [chatIdCounter]: { name: newChat, messages: [] } });
      setNewChat("");
    }
  };

  const handeleClickChatDelete = (id) => {
    setChatList(delete chatList[id]);
    setChatList({ ...chatList });
  };

  return (
    <div className="Chats">
      <p className="Chats__notice" onMouseOver={mouseOver}>
        {notice}
      </p>
      <div>
        <List
          component="nav"
          aria-label="secondary mailbox folders"
          subheader={
            <ListSubheader component="div" color="primary" id="nested-list-subheader">
              Сhat list
            </ListSubheader>
          }
        >
          <ChatList
            chatList={chatList}
            chatId={chatId}
            setName={setName}
            handeleClickChatDelete={handeleClickChatDelete}
          />
        </List>
        <div className="Chats__add-chat">
          <TextField
            id="outlined-basic"
            label="Chat"
            placeholder="Enter the chat name"
            variant="outlined"
            value={newChat}
            onChange={handleChatChange}
          />
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={handleClickSetChat}
            style={{ marginLeft: "10px" }}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      {chatList[chatId] && (
        <div className="Chats__message">
          <ul className="Chats__message-list">
            <h3 className="Chats__author">{name}</h3>
            <Message chatList={chatList} chatId={chatId} />
          </ul>
          <Form
            handleMessageChange={handleMessageChange}
            handleClick={handleClick}
            message={message}
          />
        </div>
      )}
      {!chatList[chatId] && <h2 className="Chats__no-chat">Please select a chat</h2>}
    </div>
  );
};
