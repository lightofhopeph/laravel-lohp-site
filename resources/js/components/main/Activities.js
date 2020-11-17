import React, {useState, useEffect, useRef} from 'react';
import {Table, Button, SearchBar} from '../../components/_base';
import {useMutation} from '@apollo/client';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {castArray, debounce, isEmpty} from 'lodash';
import {Checkbox} from 'pretty-checkbox-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toast, swal, truncate} from '../../helpers/knittygritty';
import {UPDATE_ACTIVITY, DELETE_ACTIVITY} from '../../graphql/ActivityMutation';
import Select from 'react-select';
import {Modal, Carousel, Button as Btn, Menu, Dropdown} from 'antd';
import profile from '../../store/profile';
import {DownOutlined} from '@ant-design/icons';

const Activities = () => {
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
    const [hover, setHover] = useState(-1);

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

    const handleCategory = val => {
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
        {
            label: 'All',
            value: '',
        },
    ];

    const ActivityBody = () => {
        return (
            <div className={`w-full h-full flex justify-center`}>
                <div
                    style={{width: '100%'}}
                    className={` flex flex-wrap ${
                        activities.length < 3
                            ? 'justify-evenly'
                            : 'justify-between'
                    } `}>
                    {activities.map((activity, i) => {
                        return (
                            <div
                                key={activity.id}
                                style={{width: '30%'}}
                                className={` h-auto  overflow-hidden my-8`}>
                                <div
                                    onMouseEnter={() => {
                                        setHover(i);
                                    }}
                                    onMouseLeave={() => setHover(-1)}
                                    onClick={() => handlePreview(activity)}
                                    className={`w-full relative border border-superlightgray shadow-xl overflow-hidden cursor-pointer`}>
                                    <div className={`relative w-full`}>
                                        <img
                                            style={{height: '20rem'}}
                                            className={`w-full`}
                                            src={activity.featured_image}
                                        />
                                        <div
                                            className={`absolute inset-0 w-full  flex flex-col justify-center items-center z-30`}>
                                            <span
                                                className={`${
                                                    hover === i
                                                        ? 'text-white'
                                                        : 'text-black '
                                                } block text-center uppercase text-lg font-semibold`}>
                                                {activity.title
                                                    ? truncate(activity.title)
                                                    : ''}
                                            </span>
                                            <span
                                                className={`block text-locyellow mt-1 mb-2`}>
                                                {activity.location}
                                            </span>
                                            <span
                                                className={`${
                                                    hover === i
                                                        ? 'text-white'
                                                        : 'text-black'
                                                } block text-center uppercase italic`}>
                                                {activity.month}
                                                {` `} {activity.year}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        style={
                                            hover === i
                                                ? {opacity: '0.20'}
                                                : {opacity: '0.90'}
                                        }
                                        className={`absolute w-full bg-lightgray h-full top-0 left-0 flex justify-center items-center`}>
                                        <div
                                            className={`text-white font-semibold tracking-wider text-lg`}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
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
                </div>
            </div>
        );
    };

    const YearMenu = () => {
        return (
            <div className={`bg-white border shadow-lg`}>
                {years.map((y, i) => {
                    return (
                        <div
                            key={i}
                            className={`tracking-widest cursor-pointer hover:bg-gray-300 px-4 py-1`}
                            onClick={() => {
                                setYear(y.value);
                                setToggleSearch(!toggleSearch);
                            }}>
                            {y.label}
                        </div>
                    );
                })}
            </div>
        );
    };

    const MonthMenu = () => {
        return (
            <div className={`bg-white border shadow-lg`}>
                {months.map((m, i) => {
                    return (
                        <div
                            key={i}
                            className={`tracking-widest cursor-pointer hover:bg-gray-300 px-4 py-1`}
                            onClick={() => {
                                if (m.label === 'All') {
                                    setCat([]);
                                } else {
                                    setCat([m.value]);
                                }

                                setToggleSearch(!toggleSearch);
                            }}>
                            {m.label}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <Modal
                visible={previewVisible}
                centered={true}
                width={`45%`}
                closable={false}
                footer={[
                    <div className={`w-full flex justify-center items-center`}>
                        <Btn
                            onClick={() => setPreviewVisible(false)}
                            key={`close`}>
                            {' '}
                            Close
                        </Btn>
                    </div>,
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
                                                    className={`w-full bg-center bg-cover`}
                                                    src={img.image}
                                                />
                                                {/* {navVisible && (
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
                                                )} */}
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
                    <div
                        className={`w-full flex justify-between border-superlightgray border-t-2 border-b-2 mt-8 py-1`}>
                        <div>
                            <span className={`pr-1`}>
                                <FontAwesomeIcon
                                    className={`text-red-500`}
                                    icon={(`fas`, 'map-marker')}
                                />
                            </span>
                            <span className={`font-semibold`}>
                                {data.location}
                            </span>
                        </div>
                        <div className={`text-gray-700 italic`}>
                            <span> {data.month} </span> <span>{data.year}</span>
                        </div>
                    </div>
                    <div className={`w-full`}>
                        <div
                            className={`text-titlecolor uppercase text-lg mt-8 mb-8`}>
                            {data.title}
                        </div>

                        <div className={`font-semibold text-darkgray`}>
                            {data.description}
                        </div>
                    </div>
                </div>
            </Modal>
            <section className={`w-full h-full bg-white`}>
                <div
                    className={`w-full  border-t-2 border-b-2 border-superlightgray mb-5 flex items-center justify start`}>
                    <Dropdown overlay={() => <YearMenu />}>
                        <div
                            className={`flex items-center justify-center cursor-pointer`}>
                            <div
                                className={` text-darkgray tracking-widest uppercase`}>
                                year: {year === '' ? 'All' : year}
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <DownOutlined />
                            </div>
                        </div>
                    </Dropdown>
                    <div className={`w-5`}> </div>
                    <Dropdown overlay={() => <MonthMenu />}>
                        <div
                            className={`flex items-center justify-center cursor-pointer`}>
                            <div
                                className={` text-darkgray tracking-widest uppercase`}>
                                month: {isEmpty(cat) ? 'All' : cat[0]}
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <DownOutlined />
                            </div>
                        </div>
                    </Dropdown>
                </div>
                <div className={`w-full h-full `}>
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
            </section>
        </>
    );
};

export default Activities;
