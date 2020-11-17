import React from 'react';

const TextArea = ({label, className, onChange, ...rest}) => {
    return (
        <div className={`relative w-full`}>
            {label && (
                <label className={`block font-medium text-xs`}>{label}</label>
            )}

            <textarea
                className={`appearance-none border border-gray-400 rounded-sm px-3 py-2 w-full ${className}`}
                onChange={onChange}
                {...rest}></textarea>
        </div>
    );
};

export default TextArea;
