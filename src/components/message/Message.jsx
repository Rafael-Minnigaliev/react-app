import "./Message.scss";

export const Message = ({ chatList, chatId }) => {
  if (!chatList[chatId]) {
    return null;
  } else {
    return chatList[chatId].messages.map((id) => (
      <p key={id.messageId} className="Message">
        {id.message}
      </p>
    ));
  }
};
