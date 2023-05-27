import React, { useState } from "react";
import "./Footer.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { postMessage } from "../../services/RESTService";

type Props = {
    messages: any;
    setMessages: Function;
};

export default function Footer({ messages, setMessages }: Props) {
    const [message, setMessage] = useState<string>("");
    const [postFailed, setPostFailed] = useState<boolean>(false);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setMessage(e.currentTarget.value);
    };

    const submitMessage = (e?: React.SyntheticEvent) => {
        if (e) e.preventDefault();
        const postMessageNow = async () => {
            const response = await postMessage(message);
            setMessage("");
            if (response === "Error") {
                setPostFailed(true);
                return;
            }
            setMessages([...messages, response]);
            if (postFailed) setPostFailed(false);
        };
        postMessageNow();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e?.key === "Enter") {
            submitMessage();
        }
    };

    if (postFailed) return <div className="error">Error while posting the message</div>;

    return (
        <div className="footer" data-testid="footer">
            <div className="footer-fields">
                <Input message={message} onChange={onChange} onKeyDown={handleKeyDown} />
                <Button onClick={submitMessage} />
            </div>
        </div>
    );
}
