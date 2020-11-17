import React, {useState, useEffect, useRef} from 'react';
import {Table, Button, SearchBar} from '../../../components/_base';
import {useMutation} from '@apollo/client';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {castArray, debounce} from 'lodash';
import {Checkbox} from 'pretty-checkbox-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toast, swal, truncate} from '../../../helpers/knittygritty';
import {
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
} from '../../../graphql/ActivityMutation';
import Select from 'react-select';
import {Modal, Carousel, Button as Btn} from 'antd';
import profile from '../../../store/profile';

const PortalActivities = () => {
    const [profileState, profileActions] = profile();
    const [activities, setActivities] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false);
    const [cat, setCat] = useState([]);
    const [status, setStatus] = useState(-1);
    const [selected, setSelected] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [year, setYear] = useState('');
    const [baseYear, setBaseYear] = useState(moment().year());
    const [previewVisible, setPreviewVisible] = useState(false);
    const [data, setData] = useState([]);
    const [navVisible, setNavVisible] = useState(false);

    const carousel = useRef(null);

    const [mutation, mutationResults] = useMutation(DELETE_ACTIVITY, {
        update(cache) {
            cache.modify({
                fields: {
                    activities() {},
                },
            });
        },
    });

    const handleSC = debounce(k => {
        setKeyword(k);
        setToggleSearch(!toggleSearch);
    }, 800);

    const handleCategory = evt => {
        let t = cat;
        if (evt.target.checked) {
            t.push(evt.target.value);
        } else {
            Object.keys(t).forEach(key => {
                if (t[key] === evt.target.value) {
                    t.splice(key, 1);
                }
            });
        }
        setCat(t);
        setToggleSearch(!toggleSearch);
    };

    const handleStatus = evt => {
        let curStatus = status;

        if (evt.target.checked) {
            switch (evt.target.value) {
                case 'active':
                    if (curStatus === 0) {
                        setStatus(-1);
                    } else {
                        setStatus(1);
                    }
                    break;
                case 'inactive':
                    if (curStatus === 1) {
                        setStatus(-1);
                    } else {
                        setStatus(0);
                    }
                    break;
            }
        } else {
            switch (evt.target.value) {
                case 'active':
                    if (curStatus === -1) {
                        setStatus(0);
                    } else {
                        setStatus(-1);
                    }
                    break;
                case 'inactive':
                    if (curStatus === -1) {
                        setStatus(1);
                    } else {
                        setStatus(-1);
                    }
                    break;
            }
        }

        setToggleSearch(!toggleSearch);
    };

    const handleSelected = (id, e) => {
        let row = [...selected];
        let index = row.indexOf(id);

        index !== -1 ? row.splice(index, 1) : row.push(id);
        setSelected(row);
    };

    const handleDelete = async () => {
        if (!selected.length) return;
        swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Selected items will be deleted.',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: 'hsl(349, 81%, 65%)',
            confirmButtonText: 'Confirm',
            focusConfirm: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                mutation({variables: {ids: selected}});

                if (mutationResults.error) {
                    toast.fire({
                        type: 'error',
                        title: 'Request failed. Please try again.',
                    });
                    return false;
                }

                return true;
            },
            allowOutsideClick: () => !swal.isLoading(),
        }).then(result => {
            if (result.value) {
                setSelected([]);
                toast.fire({
                    type: 'info',
                    title: `Activity successfully deleted.`,
                });
            }
        });
    };

    const handlePreview = a => {
        setData(a);
        setPreviewVisible(true);
    };

    const nextSlide = () => {
        carousel.current.next();
    };
    const prevSlide = () => {
        carousel.current.prev();
    };

    const years = [
        {
            label: baseYear,
            value: baseYear,
        },
        {
            label: baseYear - 1,
            value: baseYear - 1,
        },
        {
            label: baseYear - 2,
            value: baseYear - 2,
        },
        {
            label: baseYear - 3,
            value: baseYear - 3,
        },
        {
            label: baseYear - 4,
            value: baseYear - 4,
        },
        {
            label: baseYear - 5,
            value: baseYear - 5,
        },
        {
            label: 'All',
            value: '',
        },
    ];

    const months = [
        {
            label: 'January',
            value: 'January',
        },
        {
            label: 'February',
            value: 'February',
        },
        {
            label: 'March',
            value: 'March',
        },
        {
            label: 'April',
            value: 'April',
        },
        {
            label: 'May',
            value: 'May',
        },
        {
            label: 'June',
            value: 'June',
        },
        {
            label: 'July',
            value: 'July',
        },
        {
            label: 'August',
            value: 'August',
        },
        {
            label: 'September',
            value: 'September',
        },
        {
            label: 'October',
            value: 'October',
        },
        {
            label: 'November',
            value: 'November',
        },
        {
            label: 'December',
            value: 'December',
        },
    ];

    const ActivityBody = () => {
        return (
            <div className={` flex flex-wrap`}>
                {activities.map((activity, i) => {
                    return (
                        <div
                            key={activity.id}
                            className={`w-48 h-64 border shadow-lg m-6 rounded-lg overflow-hidden`}>
                            <div className={`w-full relative`}>
                                <img
                                    className={`w-48 h-32`}
                                    src={activity.featured_image}
                                />
                                <div
                                    onClick={() => handlePreview(activity)}
                                    className={`absolute right-0 bottom-0 text-white text-lg mr-2 cursor-pointer hover:text-gray-400`}>
                                    <FontAwesomeIcon icon={['fas', 'eye']} />
                                </div>
                            </div>
                            <div className={`w-full px-2 py-1 text-xs`}>
                                <FontAwesomeIcon
                                    className={`text-red-500`}
                                    icon={['fas', 'map-marker-alt']}
                                />
                                <span className={` `}>
                                    {' '}
                                    {activity.location}{' '}
                                </span>
                            </div>
                            <div className={`w-48`}>
                                <span
                                    style={{fontSize: '0.80rem'}}
                                    className={`w-48 px-2  block font-semibold leading-tight cursor-pointer`}>
                                    <Link
                                        className={`hover:text-primary-700 duration-300 transition-all text-gray-800`}
                                        to={`/portal/activities/${activity.id}`}>
                                        {activity.title
                                            ? truncate(activity.title, 40)
                                            : ''}
                                    </Link>
                                </span>
                            </div>
                            <div className={`w-48 px-2 `}>
                                <p
                                    className={` text-xs text-left leading-tight text-gray-700`}
                                    style={{fontSize: '0.70rem'}}>
                                    {activity.description
                                        ? truncate(activity.description, 50)
                                        : ''}
                                </p>
                            </div>
                            <div
                                className={`w-full px-2 flex justify-between items-center`}>
                                <div
                                    className={`text-gray-700`}
                                    style={{fontSize: '0.70rem'}}>
                                    {activity.month}
                                    {` `} {activity.year}
                                </div>
                                <Checkbox
                                    checked={
                                        selected.indexOf(activity.id) !== -1
                                    }
                                    color={`danger-o`}
                                    style={{fontSize: '0.70rem'}}
                                    animation={`pulse`}
                                    className={``}
                                    onChange={e =>
                                        handleSelected(activity.id, e)
                                    }
                                    // icon={
                                    //     <FontAwesomeIcon
                                    //         icon={['fas', 'check']}
                                    //     />
                                    // }
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const ActivityFilter = () => {
        return (
            <div className={`w-full`}>
                <h1 className={`text-xl font-semibold`}> Filter Activities </h1>

                <div>
                    <div className={`pr-16 w-64`}>
                        <SearchBar
                            handleSearchChange={e => handleSC(e.target.value)}
                        />
                    </div>
                    <div className={`mt-5`}>
                        <div> Year: </div>
                        <Select
                            options={years}
                            onChange={e => setYear(e.value)}
                        />
                        <div> Month: </div>
                        <div className={`ml-5`}>
                            {months.map((c, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`flex items-center`}>
                                        <input
                                            id={c.value}
                                            name={c.value}
                                            className={`mr-2 cursor-pointer`}
                                            type={`checkbox`}
                                            value={c.value}
                                            onChange={e => handleCategory(e)}
                                        />
                                        <label>{c.label} </label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={`mt-5`}>
                        <h2> Status </h2>
                        <div className={`ml-5`}>
                            <div className={`flex items-center`}>
                                <input
                                    className={`mr-2 cursor-pointer`}
                                    type={`checkbox`}
                                    value={`active`}
                                    onChange={e => handleStatus(e)}
                                />
                                <label>Active </label>
                            </div>
                            <div className={`flex items-center`}>
                                <input
                                    className={`mr-2 cursor-pointer`}
                                    type={`checkbox`}
                                    value={`inactive`}
                                    onChange={e => handleStatus(e)}
                                />
                                <label>Inactive </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section
            className={`w-full h-screen min-h-screen overflow-y-auto flex relative `}>
            <Modal
                visible={previewVisible}
                centered={true}
                width={`45%`}
                closable={false}
                footer={[
                    <Btn onClick={() => setPreviewVisible(false)} key={`close`}>
                        {' '}
                        Close
                    </Btn>,
                ]}>
                <div className={` h-auto bg-white`}>
                    <div className={` h-auto bg-white `}>
                        <div
                            onMouseEnter={() => setNavVisible(true)}
                            onMouseLeave={() => setNavVisible(false)}
                            className={`relative`}>
                            <Carousel ref={carousel} autoplay>
                                {data.images &&
                                    data.images.map((img, key) => {
                                        return (
                                            <div
                                                key={key}
                                                className={`w-64 h-auto relative`}>
                                                <img
                                                    className={`w-full h-full bg-center bg-cover`}
                                                    src={img.image}
                                                />
                                                {navVisible && (
                                                    <div
                                                        className={`bg-gray-800 bg-opacity-75 p-4 mb-10 w-full absolute insert-x-0 bottom-0 text-white`}>
                                                        <div>
                                                            <span>
                                                                {
                                                                    img.description
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                            </Carousel>

                            {navVisible && (
                                <>
                                    {' '}
                                    <div
                                        className={`h-full absolute inset-y-0 right-0 flex items-center text-white mr-4`}>
                                        <div
                                            className={`bg-opacity-50 cursor-pointer bg-transparent rounded-full text-2xl bg-blue-500 w-10 h-10 flex justify-center items-center`}
                                            onClick={nextSlide}>
                                            <FontAwesomeIcon
                                                className={``}
                                                icon={['fas', 'angle-right']}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`h-full absolute inset-y-0 left-0 flex items-center text-white ml-4`}>
                                        <div
                                            className={`bg-opacity-50 cursor-pointer bg-transparent rounded-full text-2xl bg-blue-500 w-10 h-10 flex justify-center items-center`}
                                            onClick={prevSlide}>
                                            <FontAwesomeIcon
                                                className={``}
                                                icon={['fas', 'angle-left']}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={`w-full mt-1`}>
                        <p>
                            <span className={`pr-1`}>
                                <FontAwesomeIcon
                                    className={`text-red-500`}
                                    icon={(`fas`, 'map-marker')}
                                />
                            </span>
                            {data.location}
                        </p>
                    </div>
                    <div className={`w-full`}>
                        <p>
                            <span className={`font-semibold`}>Title: </span>{' '}
                            {data.title}
                        </p>

                        <p>
                            {' '}
                            <span className={`font-semibold`}>
                                Description:{' '}
                            </span>
                            {data.description}
                        </p>
                        <p className={`text-gray-700`}>
                            <span> {data.month} </span> <span>{data.year}</span>
                        </p>
                    </div>
                </div>
            </Modal>
            <section
                className={`w-full bg-white shadow-container rounded-lg p-8`}>
                <div className={`flex items-center justify-between mb-8`}>
                    <h1 className={`text-3xl font-bold`}> Activities </h1>
                    <div>
                        <Link to={`/portal/activities/add`}>
                            <Button styles={`secondary`}>Add Activity</Button>
                        </Link>
                        <Button
                            className={`ml-4`}
                            styles={`secondary`}
                            onClick={handleDelete}
                            disabled={!selected.length}>
                            Delete Activity
                        </Button>
                    </div>
                </div>

                <div className={`w-full flex justify-between `}>
                    <div className={`w-3/12 mr-10 `}> {ActivityFilter()} </div>

                    <div className={`w-9/12 `}>
                        <Table
                            query={`activities`}
                            dlimit={6}
                            showLimit={false}
                            sort={`DESC`}
                            isTable={false}
                            search_key={keyword}
                            category={{year: year, month: cat}}
                            status={status}
                            inputType={`ActivityFilter`}
                            toggleRefetch={toggleSearch}
                            getData={setActivities}
                            content={ActivityBody()}
                            params={`
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
                            `}
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PortalActivities;
