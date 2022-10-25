import * as React from "react";

interface SelectProps {
    id: string;
    name: string;
    value: string;
    list?: string[];
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
    id,
    name,
    value,
    onChange,
    list,
    label,
}: SelectProps) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={onChange}>
                {list?.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
