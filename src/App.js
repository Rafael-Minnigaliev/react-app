import { useEffect, useState } from 'react';
import { Message } from './components/message';
import { Form } from './components/form';
import './App.scss';
import { ChatList } from './components/chat-list';
import { Container, List, ListSubheader, createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [messgeId, setMessgeId] = useState(0)

  const [chatList] = useState([{ chatId: 1, name: "Vanya" }, { chatId: 2, name: "Dima" }, { chatId: 3, name: "Misha" }, { chatId: 4, name: "Vasya" }])
  const [name] = useState(chatList[0].name)

  const [notice, setNotice] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (name.length !== 0 && message.length !== 0) {
      setMessgeId(messgeId + 1)
      setMessageList([...messageList, { messageId: messgeId, name: name, message: message }]);
      setMessage("");
    }
  };

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        setNotice(`Сообщение отправлено абоненту: ${messageList[messageList.length - 1].name}`);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messageList]);

  const MousOver = () => {
    setNotice("");
  };


  return (
    <Container fixed>
      <ThemeProvider theme={theme}>
        <header className="App__header">
          <p className="App__notice" onMouseOver={MousOver}>{notice}</p>
          <h1 className="App__title">Messanger</h1>
          <div className="App__messanger">
            <List component="nav" aria-label="secondary mailbox folders" subheader={<ListSubheader component="div" color="primary" id="nested-list-subheader">Список чатов</ListSubheader>}>
              <ChatList chatList={chatList} />
            </List>
            <div className="App__message">
              <ul className="App__message-list">
                <h3 className="App__author">{name}</h3>
                <Message messageList={messageList} />
              </ul>
              <Form handleMessageChange={handleMessageChange} handleClick={handleClick} message={message} />
            </div>
          </div>
        </header>
      </ThemeProvider>
    </Container>
  );
};

