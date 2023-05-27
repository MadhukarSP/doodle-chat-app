import React from "react";
import "./Input.scss";

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    message: string;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
};

export default function Input({ onChange, message, onKeyDown }: Props) {
    return (
        <input
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={message}
            className="input-field"
            data-testid="input-field"
        />
    );
}
