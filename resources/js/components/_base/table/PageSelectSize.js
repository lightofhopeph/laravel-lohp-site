import React, {useState} from 'react';

const PageSelectSize = ({onClick}) => {
    const [size, setSize] = useState(10);
    const pageSizeOptions = [10, 20, 50, 100, 200];

    return (
        <label
            name={`PageSizeSelect`}
            className={`lg:absolute lg:right-0 flex items-center justify-center mt-6 text-xs lg:mt-0 text-gray-600`}>
            <span className="font-medium mr-2">Items per page:</span>
            <ul className={`flex items-center m-0`}>
                {pageSizeOptions.map((value, key) => (
                    <li
                        key={key}
                        className={`page-size-select`}
                        onClick={() => {
                            setSize(value);
                            onClick(value);
                        }}>
                        <span
                            className={`font-medium cursor-pointer ${
                                value === size
                                    ? 'text-primary-400'
                                    : 'text-gray-600'
                            }`}>
                            {value}
                        </span>
                        {key !== pageSizeOptions.length - 1 && (
                            <span className={`mx-1`}>•</span>
                        )}
                    </li>
                ))}
            </ul>
        </label>
    );
};

export default PageSelectSize;
