import { Message } from "../../Components/Message";
import { Form } from "../../Components/Form";
import { ChatList } from "../../Components/Chat-list";
import { List, ListSubheader } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./Chats.scss";

export const Chats = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [messgeId, setMessgeId] = useState(0);

  const [chatList] = useState([
    { chatId: 1, name: "Vanya" },
    { chatId: 2, name: "Dima" },
    { chatId: 3, name: "Misha" },
    { chatId: 4, name: "Vasya" },
  ]);
  const [name] = useState(chatList[0].name);

  const [notice, setNotice] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (name.length !== 0 && message.length !== 0) {
      setMessgeId(messgeId + 1);
      setMessageList([...messageList, { messageId: messgeId, name: name, message: message }]);
      setMessage("");
    }
  };

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        setNotice(
          `The message was sent to the contact: ${messageList[messageList.length - 1].name}`
        );
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);

  const MousEover = () => {
    setNotice("");
  };

  return (
    <div className="Chats">
      <p className="Chats__notice" onMouseOver={MousEover}>
        {notice}
      </p>
      <List
        component="nav"
        aria-label="secondary mailbox folders"
        subheader={
          <ListSubheader component="div" color="primary" id="nested-list-subheader">
            Сhat list
          </ListSubheader>
        }
      >
        <ChatList chatList={chatList} />
      </List>
      <div className="Chats__message">
        <ul className="Chats__message-list">
          <h3 className="Chats__author">{name}</h3>
          <Message messageList={messageList} />
        </ul>
        <Form
          handleMessageChange={handleMessageChange}
          handleClick={handleClick}
          message={message}
        />
      </div>
    </div>
  );
};
