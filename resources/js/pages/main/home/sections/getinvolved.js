import React from 'react';
import profile from '../../../../store/profile';

const Getinvolved = () => {
    const [profileState, profileActions] = profile();
    return (
        <section id="getinvolved" className="w-full ">
            <div className="mx-auto">
                {' '}
                <div className="text-center pt-20 pb-4">
                    <span
                        className="text-4xl lg:text-5xl uppercase font-bold"
                        style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {' '}
                        Get Involved{' '}
                    </span>
                </div>
                <div
                    className="md:flex md:justify-center"
                    style={{fontFamily: 'Roboto Slab, serif'}}>
                    {' '}
                    <div className="border rounded m-10 py-2 pt-4 md:w-2/5 md:px-0 md:m-4">
                        <div className="flex justify-center">
                            <img
                                src="/storage/getinvolved/joinus.jpg"
                                className=" h-16"
                            />
                        </div>
                        <div className="text-center">
                            <span>Join Us</span>
                            <p className="text-justify p-8">
                                {' '}
                                Make a difference now for the lives of many. Be
                                an instrument of hope for those individuals who
                                need most of our help. Participate to become a
                                steward for the environment in creating a
                                brighter future for our children. Contact us:
                                <span className="text-blue-500 font-bold">
                                    {' '}
                                    {profileState.profile.email}
                                </span>{' '}
                            </p>
                        </div>
                    </div>
                    <div className="border rounded m-10 py-2 pt-4 md:w-2/5 md:px-0 md:m-4">
                        <div className="flex justify-center">
                            <img
                                src="/storage/getinvolved/donate.jpg"
                                className=" h-16"
                            />
                        </div>
                        <div className="text-center">
                            <span>Donate</span>
                            <p className="text-justify p-8">
                                Help build our cause. Help create a brighter
                                future for our children's children. Make a
                                donation today! A little help can go a long way.
                                Contact us:{' '}
                                <span className="text-blue-500 font-bold">
                                    {profileState.profile.email}
                                </span>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Getinvolved;
