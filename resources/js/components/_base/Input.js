import React from 'react';

const Input = ({label, className, onChange, ...rest}) => {
    return (
        <div className={`relative w-full`}>
            {label && (
                <label className={`block font-medium text-xs`}>{label}</label>
            )}

            <input
                className={`appearance-none border border-gray-400 rounded-sm px-3 py-2 w-full ${className}`}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
};

export default Input;
