import React, {useState} from 'react';
import MenuBar from '../../components/main/MenuBar';
import Footer from '../../components/main/Footer';

const MainLayout = ({children, title}) => {
    const [h, setH] = useState(0);

    const hAdjust = () => {
        const main = document.getElementById('main').clientHeight;
        const menu = document.getElementById('menu').clientHeight;
        setH(menu);
    };

    return (
        <div
            // ref={main => {
            //     if (!main) return;
            //     hAdjust();
            // }}

            className={` w-screen h-screen min-h-screen relative overflow-y-auto overflow-x-hidden`}>
            <div
                style={{backdropFilter: 'blur(40px)'}}
                className={`w-full overflow-hidden fixed top-0 left-0 z-50 bg-transparent`}>
                <MenuBar />
            </div>
            <div className={`h-full px-12`} style={{marginTop: `90px`}}>
                <div className={`h-full`}>{children}</div>
                {/* <div className={`w-screen h-2`}> </div> */}
                {/* {Footer()} */}
            </div>
        </div>
    );
};

export default MainLayout;
