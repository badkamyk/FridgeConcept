import * as React from "react";

interface SelectProps {
    id: string;
    name: string;
    value: string;
    measureTypes?: string[];
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
    id,
    name,
    value,
    onChange,
    measureTypes,
    placeholder,
}: SelectProps) => {
    return (
        <>
            <label htmlFor={id}>{placeholder}</label>
            <select id={id} name={name} value={value} onChange={onChange}>
                {name === "texture" ? (
                    <>
                        <option value="fluid">Fluid</option>
                        <option value="solid">Solid</option>
                    </>
                ) : (
                    measureTypes?.map((measureType) => {
                        return (
                            <option key={measureType} value={measureType}>
                                {measureType}
                            </option>
                        );
                    })
                )}
            </select>
        </>
    );
};

export default Select;
