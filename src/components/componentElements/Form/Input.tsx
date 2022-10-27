import * as React from "react";

interface InputProps {
    id: string;
    name: string;
    type: string;
    value: string | number;
    label?: string;
    placeholder: string;
    min?: string;
    max?: string;
    maxLength?: number;
    className?: string;
    ref?: React.RefObject<HTMLInputElement>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, className, name, label, type, value, placeholder, min, max, maxLength, onChange }, ref) => {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    maxLength={maxLength}
                    min={min}
                    max={max}
                    className={className}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={ref}
                />
            </>
        );
    }
);

export default Input;
