import { useState } from "react";
import { ChatBox, SenderMessage, ReceiverMessage } from "mui-chat-box";

import './chat.css';

import { Avatar } from "@mui/material";





const ChatInput = ({ onSend, placeholder = 'Type your message...' }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) { // Check for non-empty message
      onSend(message);
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder={placeholder}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

function ChatPage(setFunc) {
  const [messages, setMessages] = useState([
    { sender: "AI", message: "Hello, how can I help you?" },
  ]);

  const handleSendMessage = (text) => {
    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages([...messages, { sender: "AI", message: data.message }]);
        setFunc(data.expectedStatData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setMessages([...messages, { sender: "NA", message: text }]);
  };

  return (
    <ChatBox>
      {messages.map((message) => (
        message.sender === "AI" ? (
          <ReceiverMessage key={message.message} avatar={<Avatar>AI</Avatar>}>
            {message.message}
          </ReceiverMessage>
        ) : (
          <SenderMessage key={message.message} avatar={<Avatar>ME</Avatar>}>
            {message.message}
          </SenderMessage>
        )
      ))}
      <ChatInput
        onSend={handleSendMessage}
        placeholder="Type your message..."
        // Add any additional Input props as needed (e.g., autoFocus, maxLength)
      />
    </ChatBox>
  );
}

export default ChatPage;
