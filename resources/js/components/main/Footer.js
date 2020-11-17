import React from 'react';
import profile from '../../store/profile';

const Footer = () => {
    const [profileState, profileActions] = profile();

    return (
        <footer className="w-full">
            <hr className="w-full" />
            <div className="bg-gray-100 w-full">
                <div className="w-full py-4 lg:grid lg:grid-cols-2 lg:flex lg:items-center">
                    <div className="flex justify-center ">
                        <span style={{fontFamily: "Montserrat', sans-serif"}}>
                            {' '}
                            Light of Hope Project PH @2020{' '}
                        </span>
                    </div>
                    <div className="flex justify-center ">
                        <div className="p-2">
                            <a href={profileState.profile.facebook}>
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                        <div className="p-2">
                            <a href={profileState.profile.instagram}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="p-2">
                            <a href={profileState.profile.twitter}>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
