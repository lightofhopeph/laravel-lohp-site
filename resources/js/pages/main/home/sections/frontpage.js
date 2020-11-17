import React, {useState, useRef} from 'react';
import profile from '../../../../store/profile';
import {Carousel} from 'antd';
import {gql, useQuery, useMutation} from '@apollo/client';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toast, swal, truncate} from '../../../../helpers/knittygritty';

const Frontpage = () => {
    const [profileState, profileActions] = profile();
    const [activities, setActivities] = useState([]);

    const carousel = useRef(null);

    const GET_ACTIVITIES = gql`
        query activities {
            activities(
                first: 5
                page: 1
                orderBy: [{field: CREATED_AT, order: ASC}]
            ) {
                data {
                    id
                    title
                    description
                    location
                    month
                    year
                    featured_image
                    images {
                        id
                        description
                        image
                    }
                    created_at
                    updated_at
                }
                paginatorInfo {
                    hasMorePages
                    lastPage
                    currentPage
                    total
                }
            }
        }
    `;

    const {loading, error, data, refetch} = useQuery(GET_ACTIVITIES, {
        fetchPolicy: 'no-cache',
        onCompleted: data => {
            setActivities(data.activities.data);
        },
        onError: error => {
            console.log(error.message);
        },
    });

    const Thumbnails = () => {
        return (
            <div className={`w-full text-center`}>
                {activities.length &&
                    activities.map((a, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => carousel.current.goTo(i, false)}
                                className={`inline-block border border-darkgray cursor-pointer transform hover:scale-105`}>
                                <img
                                    src={a.featured_image}
                                    className={`w-24 h-30`}
                                />
                            </div>
                        );
                    })}
            </div>
        );
    };

    return (
        <div
            style={{marginTop: 'calc(-90px)'}}
            className={`w-full h-screen `}
            // style={{
            //     backgroundImage: `url("${profileState.profile.fp_image}")`,
            // }}
        >
            {/* <div className="flex items-center justify-center w-screen h-screen">
                <a
                    className="bg-green-700 text-white uppercase py-2 px-4 rounded tracking-wider"
                    href="#services"
                    role="button"
                    style={{fontFamily: 'Montserrat, sans-serif'}}>
                    our advocacy{' '}
                </a>
            </div> */}
            <Carousel ref={carousel} autoplay={true}>
                {activities.length &&
                    activities.map((a, i) => {
                        return (
                            <div
                                key={i}
                                className={`w-screen h-screen relative`}>
                                <div
                                    className={`w-screen h-screen  bg-cover bg-center`}
                                    style={{
                                        backgroundImage: `url("${a.featured_image}")`,
                                    }}>
                                    <div
                                        style={{
                                            backdropFilter: 'blur(8px',
                                        }}
                                        className={`w-full absolute bottom-0 inset-x-0 mb-20 px-10`}>
                                        <div
                                            className={`text-4xl text-gray-100 inline-block`}>
                                            <span className={``}>
                                                {truncate(a.title, 100)}
                                            </span>
                                        </div>
                                        <div className={`text-lg`}>
                                            <FontAwesomeIcon
                                                className={`text-red-500`}
                                                icon={['fas', 'map-marker-alt']}
                                            />
                                            <span
                                                className={`text-locyellow px-2 tracking-wider`}>
                                                {a.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </Carousel>

            {/* <div
                className={`absolute inset-x-0 bottom-0 w-full flex justify-center mb-10`}>
                <Thumbnails />
            </div> */}
        </div>
    );
};

export default Frontpage;
