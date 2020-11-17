import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div className={`w-full px-5`}>
            <div> Menu </div>
            <div className={`ml-4 flex flex-col`}>
                <NavLink
                    to={`/portal/profile`}
                    activeClassName={`text-green-500`}>
                    {' '}
                    Profile
                </NavLink>
                <NavLink
                    to={`/portal/activities`}
                    activeClassName={`text-green-500`}>
                    Activities
                </NavLink>
                <NavLink
                    to={`/portal/blogs`}
                    activeClassName={`text-green-500`}>
                    Blogs
                </NavLink>
            </div>
        </div>
    );
};

export default Menu;
