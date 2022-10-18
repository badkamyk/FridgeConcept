import * as React from "react";

interface InputProps {
    id: string;
    name: string;
    type: string;
    value: string | number;
    placeholder: string;
    max?: string;
    ref?: React.RefObject<HTMLInputElement>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, name, type, value, placeholder, max, onChange }, ref) => {
        return (
            <>
                <label htmlFor={id}>{placeholder}</label>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    max={max}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={ref}
                />
            </>
        );
    }
);

export default Input;
