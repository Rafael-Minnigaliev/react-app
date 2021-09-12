import "./MessageList.scss";

export const MessageList = ({ messageList, chatId }) => {
  if (messageList[chatId]) {
    return messageList[chatId].map((el) => {
      return (
        <p key={el.id} className="MessageList">
          {el.text}
        </p>
      );
    });
  } else {
    return null;
  }
};
