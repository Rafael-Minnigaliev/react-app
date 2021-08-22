import { useEffect, useState } from 'react';
import { Message } from './components/message';
import { Form } from './components/form';
import './App.scss';

export const App = () => {

  const [messageList, setMessageList] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        setNotice(`Сообщение от: ${messageList[messageList.length - 1].author} отправлено!`);
        const time = setTimeout(() => {
          setNotice("");
        }, 2000);
        return () => clearTimeout(time);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);


  return (
    <div className="App">
      <header className="App__header">
        <p className="App__notice">{notice}</p>
        <h1 className="App__title">Messanger</h1>
        <Form messageList={messageList} setMessageList={setMessageList} />
        <div className="App__message">
          <h3>Сообщения</h3>
          <Message messageList={messageList} />
        </div>
      </header>
    </div>
  );
}

