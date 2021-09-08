import "./Message.scss";

export const Message = ({ messageList, chatId }) => {
  if (messageList[chatId]) {
    return messageList[chatId].map((el) => {
      return (
        <p key={el.id} className="Message">
          {el.text}
        </p>
      );
    });
  } else {
    return null;
  }
};
