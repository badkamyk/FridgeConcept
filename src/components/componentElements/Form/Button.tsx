import * as React from "react";

interface ButtonProps {
    btnText: string;
    btnClass?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ btnText, btnClass, onClick }: ButtonProps) => {
    return <button onClick={onClick} className={btnClass}>{btnText}</button>;
};

export default Button;
