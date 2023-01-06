import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import MessagesList from '../MessagesList/MessagesList';
import MessagesForm from '../MessagesForm/MessagesForm';

function App() {
  const [authorInput, setAuthorInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const randomId = Date.now();

    const newMessage = {
      id: randomId,
      author: authorInput,
      message: messageInput
    }

    const newMessages = messages.concat(newMessage);

    setMessages(newMessages);
  }

  return (
    <div>
      <Header logo="Chat App"/>
      <WelcomeMessage>
        <h3>Add new post</h3>
      </WelcomeMessage>
      <MessagesForm
        handleSubmit={handleSubmit}
        authorInput={authorInput}
        handleAuthorChange={handleAuthorChange}
        messageInput={messageInput}
        handleMessageChange={handleMessageChange}
      />
      <WelcomeMessage>
        <h3>Messages List:</h3>
      </WelcomeMessage>
      <MessagesList messages={messages}/>
    </div>
  );
}

export default App;
