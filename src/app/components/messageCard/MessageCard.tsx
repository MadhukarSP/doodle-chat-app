import React from "react";
import "./MessageCard.scss";
import { author as you } from "../../services/RESTService";
import cx from "classnames";
import { decodeText, getDateAndTime } from "../../utils/Utils";

export type MessageCardProps = {
    message: string;
    author: string;
    timestamp: number;
};

export default function MessageCard({ message, author, timestamp }: MessageCardProps) {
    const dateAndTime = getDateAndTime(timestamp);
    const selfMessage = author === you;

    return (
        <div className={cx("message-card", { "message-card-self": selfMessage })} data-testid="message-card">
            {!selfMessage && <div className="author">{author}</div>}
            <div className="content">{decodeText(message)}</div>
            <div className={cx("timestamp", { "timestamp-self": selfMessage })}>{dateAndTime}</div>
        </div>
    );
}
