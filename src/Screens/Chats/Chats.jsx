import { Message } from "../../Components/Message";
import { Form } from "../../Components/Form";
import { ChatList } from "../../Components/Chat-list";
import { List, ListSubheader } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./Chats.scss";
import { Redirect, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { ROUTES } from "../../Routing/Constants";

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

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (name.length !== 0 && message.length !== 0) {
      setMessgeId(messageId + 1);
      setChatList({
        ...chatList,
        [chatId]: {
          ...chatList[chatId],
          messages: [...chatList[chatId].messages, { messageId: messageId, message: message }],
        },
      });
      setMessage("");
    }
  };

  useEffect(() => {
    if (chatList[chatId] && chatList[chatId].messages.length !== 0) {
      const timer = setTimeout(() => {
        setNotice(`The message was sent to the contact: ${chatList[chatId].name}`);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const MousEover = () => {
    setNotice("");
  };

  if (!chatList[chatId] && path === "/chats/:chatId?") {
    return <Redirect to={ROUTES.CHATS} />;
  }

  const handleChatChange = (e) => {
    setNewChat(e.target.value);
  };

  const handleClickSetChat = () => {
    setChatIdCounter(`id${Number(chatIdCounter[chatIdCounter.length - 1]) + 1}`);
    setChatList({ ...chatList, [chatIdCounter]: { name: newChat, messages: [] } });
    setNewChat("");
  };

  const handeleClickChatDelete = () => {
    setChatList(delete chatList[chatId]);
  };

  return (
    <div className="Chats">
      <p className="Chats__notice" onMouseOver={MousEover}>
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
        <input type="text" value={newChat} onChange={handleChatChange}></input>
        <button onClick={handleClickSetChat}>SET CHAT</button>
      </div>
      <Switch>
        <Route path={`${path}/:chatId`}>
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
        </Route>
        <Route>
          <h3>Please select a chat</h3>
        </Route>
      </Switch>
    </div>
  );
};
