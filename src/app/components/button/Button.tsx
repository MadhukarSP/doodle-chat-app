import React from 'react';
import './Button.scss';

type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({onClick}: Props) {
    return <button onClick={onClick} className="button" data-testid="button">SEND</button>
}