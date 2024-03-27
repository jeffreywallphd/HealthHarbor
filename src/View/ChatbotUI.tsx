import React, { Component } from 'react';
import './ChatbotUI.css'; // Ensure this path is correct

// Define a type for individual messages
type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

// Define types for the component's state
interface State {
  messages: Message[];
  userInput: string;
}

// Define types for the component's props (if there are any props)
interface Props {}

class ChatbotUI extends Component<Props, State> {
  state: State = {
    messages: [],
    userInput: ''
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { userInput } = this.state;
    if (!userInput.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: userInput,
      sender: 'user'
    };

    this.setState(prevState => ({
      messages: [...prevState.messages, userMessage],
      userInput: ''
    }));

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now(),
        text: 'This is a default response from the chatbot.',
        sender: 'bot'
      };

      this.setState(prevState => ({
        messages: [...prevState.messages, botResponse]
      }));
    }, 1000);
  };

  renderMessages = () => {
    return this.state.messages.map(message => (
      <div key={message.id} className={`message ${message.sender}`}>
        <div className="message-bubble">{message.text}</div>
      </div>
    ));
  }

  render() {
    return (
      <div id="myUniqueChatbotUI" className="chatbot-ui">
        <div className="chat-header">Financial assistant</div>
        <div className="messages-container">
          {this.renderMessages()}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleInputChange}
            onKeyPress={event => event.key === 'Enter' ? this.handleSubmit(event) : null}
            placeholder="Type here..."
            className="input-field"
          />
            <button className="send-button" onClick={(event) => this.handleSubmit(event)}></button>
        </div>
      </div>
    );
  }
}

export default ChatbotUI;
