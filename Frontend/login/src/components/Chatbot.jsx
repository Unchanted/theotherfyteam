import React, { useState } from "react";

function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  // Function to handle user input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      // Add user message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, sender: "user" },
      ]);

      // Get chatbot response (mocked response for this example)
      const botResponse = await handleBotResponse(inputText);

      // Add chatbot message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);

      // Clear the input field
      setInputText("");
    }
  };

  // Function to generate bot responses (mocked for this example)
  const handleBotResponse = async (inputText) => {
    // Replace this with an actual API call to the chatbot service
    const botResponse = `You said: "${inputText}". This is a mocked response.`;
    return botResponse;
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Chatbot</h1>
      <div className="card">
        <div className="card-body chat-window">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message mb-2 ${
                message.sender === "user" ? "text-end" : ""
              }`}
            >
              <span
                className={`badge ${
                  message.sender === "user" ? "bg-primary" : "bg-secondary"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <form className="card-footer" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Type your message..."
              required
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatbotPage;
