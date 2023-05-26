import React from 'react';
import './App.scss';

// Footer color schema: #3898d4
// Button color: #f7866e
// User type message box color: #fcf6c4
// Other chats box color: #ffffff
// Primary text color: #454b51
// Secondary text color: #b7bdc1

const APPLICATION_NAME = "Doodle Chat";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        {APPLICATION_NAME}
      </header>
      {/* Container with all the messageCard */}
      <footer className='app-footer'>
        {/* Container with Button and input field */}
      </footer>
    </div>
  );
}
