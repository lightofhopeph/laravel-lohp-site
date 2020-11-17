import React from 'react';

const Button = ({
    className,
    children,
    onClick,
    styles = `primary`,
    ...rest
}) => {
    return (
        <button
            className={`button button-${styles} ${className}`}
            onClick={onClick}
            {...rest}>
            {children}
        </button>
    );
};

export default Button;
