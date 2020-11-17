import React, {useRef} from 'react';

const SearchBar = ({placeholder = 'Enter search...', handleSearchChange}) => {
    return (
        <div className={`w-full flex items-center relative text-white`}>
            <svg className={`inline feather-icon ml-3 h-4 w-4 absolute left-0`}>
                <use xlinkHref={`/assets/svg/feather-sprite.svg#search`} />
            </svg>

            <input
                onChange={e => handleSearchChange(e)}
                className={`w-full appearance-none  bg-primary-400 h-full px-12 py-3 rounded-sm w-full placeholder-current outline-none font-light`}
                type={`text`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchBar;
