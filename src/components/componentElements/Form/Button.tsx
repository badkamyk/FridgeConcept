import * as React from "react";
import { ReactNode } from "react";

interface ButtonProps {
    text: string | ReactNode
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, className, onClick, style, disabled }: ButtonProps) => {
    return <button onClick={onClick} className={className} disabled={disabled} style={style}>{text}</button>;
};

export default Button;
