import { useState } from "react";
import "./Form.scss";

export const Form = ({ setMessageList, messageList }) => {

    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleClick = () => {
        if (author.length !== 0 && message.length !== 0) {
            setMessageList([...messageList, { author: author, message: message }]);
            setAuthor("");
            setMessage("");
        }
    };

    return (
        <div className="Form">
            <h3>Введите имя автора и текст сообщения</h3>< input className="Form__input" placeholder="Автор" type="text" value={author} onChange={handleAuthorChange} />
            < textarea className="Form__input Form__input_message" placeholder="Сообщение" type="text" value={message} onChange={handleMessageChange} />
            <button className="Form__btn" onClick={handleClick}>Отправить</button>
        </div>
    );
}

