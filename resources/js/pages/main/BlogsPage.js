import React, {useState, useEffect, useRef} from 'react';
import Blogs from '../../components/main/Blogs';
import profile from '../../store/profile';
import Footer from '../../components/main/Footer';
import {BackTop} from 'antd';

const BlogsPage = () => {
    const [profileState, profileActions] = profile();

    return (
        <>
            <div
                className={`w-full relative bg-gray-400 h-auto bg-cover bg-center`}
                style={{
                    backgroundImage: `url(${profileState.profile.blog_image})`,
                    imageRendering: '-webkit-optimize-contrast',
                    height: '50%',
                }}>
                <div
                    className="absolute w-2/5 h-full right-0 flex flex-col justify-center items-center font-normal text-lightgray font-hairline italic text-2xl "
                    style={{
                        fontFamily: 'Poppins',
                    }}>
                    <q>
                        A simple sunbeam is enough,
                        <br />
                        <span className={`pl-12`}>
                            to drive away many shadows.
                        </span>
                    </q>
                </div>
            </div>

            <div
                className={`w-full text-left text-3xl  my-12 text-darkgray font-semibold tracking-wider`}
                style={{fontFamily: 'Montserrat, sans-serif'}}>
                {' '}
                Blogs{' '}
            </div>

            <Blogs />
        </>
    );
};

export default BlogsPage;
