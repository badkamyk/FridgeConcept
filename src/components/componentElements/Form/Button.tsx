import * as React from "react";
import {ReactNode} from "react";

interface ButtonProps {
    text: string | ReactNode
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, className, onClick, style }: ButtonProps) => {
    return <button onClick={onClick} className={className} style={style}>{text}</button>;
};

export default Button;
