import { MessageList } from "../Message-list";
import { Form } from "../Form";
import "./ChatMessages.scss";

export const ChatMessages = ({
  messageList,
  chatId,
  handleMessageChange,
  handleClick,
  message,
  name,
}) => {
  return (
    <div className="ChatMessages">
      <ul className="ChatMessages__message-list">
        <h3 className="ChatMessages__author">{name}</h3>
        <MessageList messageList={messageList} chatId={chatId} />
      </ul>
      <Form
        handleMessageChange={handleMessageChange}
        handleClick={handleClick}
        message={message}
        chatId={chatId}
      />
    </div>
  );
};
