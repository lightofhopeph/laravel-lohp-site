import React from 'react';
import profile from '../../store/profile';

const Header = () => {
    const [profileState, profileActions] = profile();

    return (
        <div className={`w-full h-64`}>
            <div
                className={`w-full h-full flex flex-col justify-center items-center -mt-4`}>
                <div
                    style={{
                        backgroundImage: `url("${profileState.profile.logo}")`,
                    }}
                    className={`w-32 h-32 rounded-full border border-2 bg-cover bg-center`}></div>
                <div className={`text-lg mt-2`}>LIGHT OF HOPE PH</div>
            </div>
        </div>
    );
};

export default Header;
