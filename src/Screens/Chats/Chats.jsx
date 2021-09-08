import { List, ListSubheader, TextField } from "@material-ui/core";
import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { chatsSelector } from "../../Store/Chats/selectors";
import { addChatAction, deleteChatAction } from "../../Store/Chats/actions";
import { addMessageAction, deleteMessageAction } from "../../Store/Messages/actions";
import { messagesSelector } from "../../Store/Messages/selectors";
import { ROUTES } from "../../Routing/Constants";
import { Message } from "../../Components/Message";
import { Form } from "../../Components/Form";
import { ChatList } from "../../Components/Chat-list";
import "./Chats.scss";

export const Chats = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const { messageList } = useSelector(messagesSelector);

  const chatList = useSelector(chatsSelector);
  const [newChat, setNewChat] = useState("");
  const [name, setName] = useState("");

  const { chatId } = useParams();
  const { path } = useRouteMatch();

  const [open, setOpen] = useState(false);

  if (!chatList.find((item) => item.id === chatId) && path === "/chats/:chatId?") {
    return <Redirect to={ROUTES.CHATS} />;
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (message.length !== 0) {
      dispatch(addMessageAction({ message, chatId }));
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
      dispatch(addChatAction({ newChat }));
      setOpen(false);
      setNewChat("");
    }
  };

  const handeleClickChatDelete = (id) => {
    dispatch(deleteChatAction({ id }));
    dispatch(deleteMessageAction({ id }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Chats">
      <p className="Chats__notice" onMouseOver={mouseOver}>
        {notice}
      </p>
      <div>
        <List
          subheader={
            <ListSubheader component="div" color="primary" id="nested-list-subheader">
              Сhat list
            </ListSubheader>
          }
        >
          <ChatList
            chatId={chatId}
            chatList={chatList}
            handeleClickChatDelete={handeleClickChatDelete}
            setName={setName}
          />
        </List>
        <div className="Chats__add-chat">
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add a chat
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <DialogContentText>Enter the chat name</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Chat"
                type="text"
                fullWidth
                value={newChat}
                onChange={handleChatChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClickSetChat} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {chatId && (
        <div className="Chats__message">
          <ul className="Chats__message-list">
            <h3 className="Chats__author">{name}</h3>
            <Message messageList={messageList} chatId={chatId} />
          </ul>
          <Form
            handleMessageChange={handleMessageChange}
            handleClick={handleClick}
            message={message}
            chatId={chatId}
          />
        </div>
      )}
      {!chatId && <h2 className="Chats__no-chat">Please select a chat</h2>}
    </div>
  );
};
