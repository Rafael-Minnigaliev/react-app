import "./MessageList.scss";

export const MessageList = ({ messageList, chatId }) => {
  if (messageList[chatId]) {
    return messageList[chatId].map((el) => {
      return (
        <p key={el[0][0]} className="MessageList">
          {el[0][1]}
        </p>
      );
    });
  } else {
    return null;
  }
};
