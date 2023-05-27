import React, { useState } from "react";
import "./App.scss";
import Footer from "./containers/footer/Footer";
import Messages from "./containers/messages/Messages";

export default function App() {
    const [messages, setMessages] = useState([]);
    return (
        <div className="app">
            <Messages messages={messages} setMessages={setMessages} />
            <Footer messages={messages} setMessages={setMessages} />
        </div>
    );
}
