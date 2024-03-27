import React, { Component } from 'react';
import { generateText } from "../Controller/prototype.js";

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

  sendMessage = async () => {
    const { userInput } = this.state;
    const trimmedInput = userInput.trim();
    if (trimmedInput === '') return;

    // Append user message to the messages state
    this.appendMessage(trimmedInput, 'user');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmedInput }),
      });
      const responseData = await response.json();

      // Append bot response to the messages state
      this.appendMessage(responseData.message, 'bot');
    } catch (error) {
      console.error('Error sending message:', error);
    }

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
      justifyContent: 'center', alignItems: 'center', backgroundColor: '#555654', 
      width: '100%', height: '450px', margin: 'auto', padding: '2px'}}>
          <div className="chat-header"style={{marginLeft:'100px',justifyContent: 'center', alignItems: 'center',marginTop:'2px',
        position: 'sticky',top:1 /* Changed to sticky */}}>
          
    <h1 style={{marginRight:'100px',justifyContent: 'center', 
    alignItems: 'center',color:'white',
    }}>Mental Health ChatBot</h1>
    </div>
      <div className='buttons-container'
      style={{ display: 'flex', flexDirection: 'column',
       position: 'absolute', left: '20px', top: '300px', 
       backgroundColor: '#868885', width: '350px', 
       height: '455px', alignItems: 'flex-start',
       paddingLeft:'10px' }}>
            <button className="recent-button" onClick={() => alert('Viewing recent conversations...')}
            style={{backgroundColor:'#555654',color:'white'}}>
              Recent
            </button>
            
          </div>

          
        <div className="chat-messages" style={{ flex: 1, marginBottom: '10px', color: 'white',
         paddingRight: '10px', scrollbarWidth:'auto', overflowY: 'scroll',width:'700px',
          scrollbarColor: '#888 #f1f1f1',paddingLeft:'100px', direction:'ltr'}}>
        <p> Hello! </p>
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
              width: '500px', 
              height: '40px', 
              marginRight: '10px', 
              padding: '8px',
              border: '1px solid #868885',
              
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
                backgroundColor: '#868885',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                position:'sticky',
                bottom:10,
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
