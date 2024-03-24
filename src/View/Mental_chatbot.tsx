import React, { Component } from 'react';

interface Message {
  message: string;
  sender: string;
}

interface State {
  messages: Message[];
  typing: boolean;
  userInput: string;
}

class MentalHealthChatBot extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Initialize state
    this.state = {
      messages: [],
      typing: false,
      userInput: '',
    };
  }

  sendMessage = () => {
    const { userInput } = this.state;
    const trimmedInput = userInput.trim();
    if (trimmedInput === '') return;

    // Append user message to the messages state
    this.appendMessage(trimmedInput, 'user');

    // Simulate typing indicator
    this.setState({ typing: true });
    setTimeout(() => {
      // Simulate bot response after a delay
      this.setState({ typing: false });
      this.appendMessage('Bot response', 'bot'); 
    }, 1000);

    // Clear the input field after sending message
    this.setState({ userInput: '' });
  };

  appendMessage = (message: string, sender: string) => {
    const { messages } = this.state;
    // Append new message to the messages state
    this.setState({ messages: [...messages, { message, sender }] });
  };

  render() {
    const { messages, typing, userInput } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          <h1>Mental Health ChatBot</h1>
          <div>
            <button className="settings-button" onClick={() => alert('Opening settings...')}>
              Settings
            </button>
            <button className="recent-button" onClick={() => alert('Viewing recent conversations...')}>
              Recent
            </button>
          </div>
        </div>
        <div className="chat-messages">
          {/* Display all messages */}
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}-message`}>
              <p>{msg.message}</p>
            </div>
          ))}
          {/* Display typing indicator if bot is typing */}
          {typing && (
            <div className="chat-message bot-message typing-indicator">
              <p>Typing...</p>
            </div>
          )}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
          />
          <button className="send-button" onClick={this.sendMessage}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default MentalHealthChatBot;
