import React, { useEffect, useRef, useState } from "react";
import { fetchAllMessages } from "../../services/RESTService";
import "./Messages.scss";
import MessageCard, { MessageCardProps } from "../../components/messageCard/MessageCard";

type Props = {
    messages: MessageCardProps[];
    setMessages: Function;
};

export default function Messages({ messages, setMessages }: Props) {
    const [fetchingFailed, setFetchingFailed] = useState<boolean>(false);
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetchAllMessages();
            if (response === "Error") {
                setFetchingFailed(true);
                return;
            }
            setMessages(response);
            if (fetchingFailed) setFetchingFailed(false);
        };

        fetchMessages();
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the container after each render
        const container = messagesRef.current;
        if (container) container.scrollTop = container.scrollHeight;
    }, [messages]);

    if (fetchingFailed) return <div className="error">Oops network error</div>;

    if (!messages?.length) return null;

    return (
        <div className="messages" data-testid="messages">
            <div className="messages-container" ref={messagesRef} data-testid="messages-container">
                {messages.map((messageVal: MessageCardProps, key) => (
                    <MessageCard {...messageVal} key={key} />
                ))}
            </div>
        </div>
    );
}
