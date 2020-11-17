import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Menu} from 'antd';
import {NavHashLink} from 'react-router-hash-link';

const {SubMenu} = Menu;

const Menubar = () => {
    const [open, setOpen] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [curKey, setCurKey] = useState('solutions');

    const menus = [
        {
            label: 'solutions',
            key: 'solutions',
            value: [
                {label: 'cloudgrid', key: 'cloudgrid', to: '/#cloudgrid'},
                {label: 'solar night lamps', key: 'solar', to: '/#services'},
            ],
        },
        {
            label: 'activities',
            key: 'activities',
            to: '/activities',
        },
        {
            label: 'Blogs',
            key: 'blogs',
            to: '/blogs',
        },
        {
            label: 'getinvolved',
            key: 'getinvolved',
            to: '#getinvolved',
        },
    ];

    return (
        <div className={`w-full bg-white px-12`}>
            <div className={`w-full flex items-center justify-between py-4`}>
                <div>
                    <div>
                        <a href="/">
                            <div
                                className="pl-5 text-white hover:text-green-500 text-3xl tracking-widest text-titleblue"
                                style={{fontFamily: 'Kaushan Script'}}>
                                Light of Hope{' '}
                                <span
                                    className={`uppercase text-xs `}
                                    style={{
                                        fontFamily: 'Montserrat, sans-serif',
                                    }}>
                                    {' '}
                                    Philippines
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <Menu
                        mode={`horizontal`}
                        className={``}
                        style={{borderBottom: '0px'}}>
                        {menus.map((menu, k) => {
                            return menu.label === 'solutions' ? (
                                <SubMenu
                                    key={menu.key}
                                    title={
                                        <div className={`uppercase text-lg `}>
                                            {menu.label}{' '}
                                        </div>
                                    }>
                                    {menu.value.map((m, i) => {
                                        return (
                                            <Menu.Item key={m.key}>
                                                <NavHashLink
                                                    to={m.to}
                                                    activeClassName={`text-green-500`}
                                                    className={`text-lg uppercase text-darkgray my-2 py-1 transition duration-500 ease-in-out tracking-wider`}>
                                                    {m.label}
                                                </NavHashLink>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            ) : (
                                <Menu.Item
                                    className={`text-lg uppercase text-darkgray my-2 py-1 transition duration-500 ease-in-out tracking-wider transform hover:text-green-500 `}
                                    key={menu.key}>
                                    <NavLink
                                        to={menu.to}
                                        activeClassName={`text-green-500`}
                                        className={`text-lg uppercase text-darkgray my-2 py-1 transition duration-500 ease-in-out tracking-wider `}>
                                        <span
                                            className={`hover:text-green-500`}>
                                            {' '}
                                            {menu.label}
                                        </span>
                                    </NavLink>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </div>
            </div>
        </div>
    );
};
export default Menubar;
