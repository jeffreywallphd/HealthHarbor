import React, { Component } from 'react';
import { generateText } from "../Controller/prototype.js";
import './ChatbotUI.css'; // Ensure this path is correct

// Define a type for individual messages
interface Message {
  message: string;
  sender: string;
}

// Define types for the component's state
interface State {
  messages: Message[];
  userInput: string;
}
class ChatbotUI extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Initialize state

    this.state = {
      messages: [],
      userInput: '',
    };
  }
  
  sendMessage = async () => {
    console.log(this.state)
    const { userInput } = this.state;
    console.log(userInput)
    const trimmedInput = userInput.trim();
    if (trimmedInput === '') return;

    // Append user message to the messages state
    this.appendMessage(trimmedInput, 'user');
    console.log("Checking User Input")
    console.log(userInput)
    try {
      const botResponse = await generateText(trimmedInput);
      console.log("Checking Bot Response")
      console.log(botResponse)
      // Append bot response to the messages state
      this.appendMessage(botResponse, 'bot');
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // Clear the input field after sending message
    this.setState({ userInput: '' });
  };

  appendMessage = (message: string, sender: string) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, { message, sender }]
    }));
  };
  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name as keyof State;

    this.setState({
      ... this.state,
      [name]:value,
    })
    console.log(this.state)
  }
  render() {
    const { messages, userInput } = this.state;


    return (
      <>

          <div id="myUniqueChatbotUI" className="chatbot-ui">
            <div className="chat-header">
              Financial assistant
              <button className="close-chat">X</button> {/* Button to
close the chat */}
            </div>
            <div className="messages-container">
            </div>
            <div className="input-area">
              <input
                name="userInput"
                type="text"
                placeholder="Type here..."
                className="input-field"
                onChange={this.handleInputChange}
              />
              <button className="send-button"
onClick={this.sendMessage}></button>
            </div>
          </div>

        <button className="open-chat-button">
          Chat
        </button> {/* Button to open/close the chat */}
      </>
    );
  }
}

export default ChatbotUI;
