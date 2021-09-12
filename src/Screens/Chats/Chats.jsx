import { List, ListSubheader } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { AddChatButton } from "../../Components/Add-chat-button/Main/AddChatButton";
import { chatsSelector } from "../../Store/Chats/selectors";
import { addChatAction, deleteChatWithSaga } from "../../Store/Chats/actions";
import { addMessageThunkAction, deleteMessageAction } from "../../Store/Messages/actions";
import { messagesSelector } from "../../Store/Messages/selectors";
import { ROUTES } from "../../Routing/Constants";
import { ChatList } from "../../Components/Chat-list";
import { Notice } from "../../Components/Notice";
import { ChatMessages } from "../../Components/Chat-messages";
import { SelectChat } from "../../Components/Select-chat";
import "./Chats.scss";

export const Chats = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const { messageList } = useSelector(messagesSelector);

  const chatList = useSelector(chatsSelector);
  const [chatName, setChatName] = useState("");
  const [name, setName] = useState("");

  const { chatId } = useParams();
  const { path } = useRouteMatch();

  const [open, setOpen] = useState(false);

  const handleMessageChange = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [setMessage]
  );

  const handleClick = useCallback(() => {
    if (message.length !== 0) {
      dispatch(addMessageThunkAction({ message, chatId, name, setNotice }));
      setMessage("");
    }
  }, [dispatch, message, chatId, name, setNotice, setMessage]);

  const mouseOver = useCallback(() => {
    setNotice("");
  }, [setNotice]);

  const handleChatNameChange = useCallback(
    (e) => {
      setChatName(e.target.value);
    },
    [setChatName]
  );

  const handleAddChat = useCallback(() => {
    if (chatName.length !== 0) {
      dispatch(addChatAction({ chatName }));
      setOpen(false);
      setChatName("");
    }
  }, [dispatch, chatName, setOpen, setChatName]);

  const handeleClickChatDelete = useCallback(
    (id) => {
      dispatch(deleteChatWithSaga({ id }));
      dispatch(deleteMessageAction({ id }));
    },
    [dispatch]
  );

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    if (!chatId || !chatList.find((item) => item.id === chatId)) {
      setName("");
    } else {
      setName(chatList.find((item) => item.id === chatId).chatName);
    }
  }, [chatList, chatId, setName]);

  if (!chatList.find((item) => item.id === chatId) && path === "/chats/:chatId?") {
    return <Redirect to={ROUTES.CHATS} />;
  }

  return (
    <div className="Chats">
      <Notice mouseOver={mouseOver} notice={notice} />
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
          <AddChatButton
            handleClickOpen={handleClickOpen}
            open={open}
            handleClose={handleClose}
            chatName={chatName}
            handleChatNameChange={handleChatNameChange}
            handleAddChat={handleAddChat}
          />
        </div>
      </div>
      {chatId && (
        <ChatMessages
          messageList={messageList}
          chatId={chatId}
          handleMessageChange={handleMessageChange}
          handleClick={handleClick}
          message={message}
          name={name}
        />
      )}
      {!chatId && <SelectChat />}
    </div>
  );
};
