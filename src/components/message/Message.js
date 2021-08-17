import './Message.scss';

export const Message = ({ messageList }) => {
    return (
        messageList.map((el, index) => {
            return <p key={index} className="Message">{el.author}: {el.message}</p>
        })
    );
}


