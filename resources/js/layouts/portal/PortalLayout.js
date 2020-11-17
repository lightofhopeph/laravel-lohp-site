import React, {useState} from 'react';
import Menu from '../../components/portal/menu';
import Header from '../../components/portal/header';
import Footer from '../../components/portal/footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PortalLayout = ({children, layout}) => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className={`w-screen h-screen overflow-hidden flex `}>
            <div className={`${showSidebar ? 'w-1/5' : 'w-0 '} border-r`}>
                <Header />
                <Menu />
                <Footer />
            </div>
            <div className={`${showSidebar ? 'w-full' : 'w-4/5'} relative`}>
                <div
                    className={`absolute w-5 h-5 top-0 left-0 text-black text-lg z-50 mt-2 ml-4 cursor-pointer hover:text-green-500`}>
                    {' '}
                    {showSidebar ? (
                        <FontAwesomeIcon
                            onClick={() => setShowSidebar(false)}
                            icon={['fas', 'bars']}
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={() => setShowSidebar(true)}
                            icon={['fas', 'times']}
                        />
                    )}{' '}
                </div>
                {children}
            </div>
        </div>
    );
};

export default PortalLayout;
