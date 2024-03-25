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
  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      this.sendMessage(); 
    }
  };
  render() {
    const { messages, typing, userInput } = this.state;

    return (
      
      <div className="chat-container" style={{ display: 'flex', flexDirection: 'column', 
      justifyContent: 'center', alignItems: 'center', backgroundColor: '#777', 
      width: '600px', height: '450px', margin: 'auto', padding: '20px'}}>
      
      <div className='buttons-container'
           style={{
            right: '10px',
            paddingLeft:'350px',
            paddingBottom:'1px',
            marginTop:'1px',
            marginBottom:'2px'
          }}>
            <button className="settings-button" onClick={() => alert('Opening settings...')}>
              Settings
            </button>
            <button className="recent-button" onClick={() => alert('Viewing recent conversations...')}>
              Recent
            </button>
            
          </div>
          <div className="chat-header"style={{marginLeft:'100px',justifyContent: 'center', alignItems: 'center',marginTop:'2px',}}>
          <h1 style={{marginRight:'100px',justifyContent: 'center', alignItems: 'center',}}>Mental Health ChatBot</h1>
          <p> How Can I help you today? </p>
          </div>
          
        <div className="chat-messages" style={{ flex: 1, marginBottom: '10px', overflowY: 'auto' }}>
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
        

        <div className="chat-input-container"
         style={{
          display: 'flex',
          alignItems: 'center', 
          marginBottom: '20px',
          paddingTop:'200px',
         }}>
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
            onKeyPress={this.handleKeyPress} 
            style={{
              flex: 1,
              width: '300px', 
              height: '40px', 
              marginRight: '10px', 
              padding: '8px',
              borderRadius: '20px',
              border: '1px solid #ccc',
            }}
          />
          <head>
        {/* send Icons font link */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
          <button className="send-button" onClick={this.sendMessage}
              style={{
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: '#555',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}>
          <i className="material-icons">send</i>
      
          </button>

        </div>
      </div>

      </div>

    );
  }
}

export default MentalHealthChatBot;
