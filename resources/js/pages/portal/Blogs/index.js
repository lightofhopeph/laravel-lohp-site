import React, {useState, useEffect, useRef} from 'react';
import {Table, Button, SearchBar} from '../../../components/_base';
import {useMutation} from '@apollo/client';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {castArray, debounce} from 'lodash';
import {Checkbox} from 'pretty-checkbox-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    toast,
    swal,
    truncate,
    silencedHtml,
} from '../../../helpers/knittygritty';
import {UPDATE_BLOG, DELETE_BLOGS} from '../../../graphql/BlogMutation';
import Select from 'react-select';
import {Modal, Carousel, Button as Btn} from 'antd';
import profile from '../../../store/profile';

const Blogs = () => {
    const [profileState, profileActions] = profile();
    const [blogs, setBlogs] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false);
    const [cat, setCat] = useState([]);
    const [status, setStatus] = useState(-1);
    const [selected, setSelected] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [data, setData] = useState([]);
    const [navVisible, setNavVisible] = useState(false);
    const [h, setH] = useState(0);

    const carousel = useRef(null);

    const [mutation, mutationResults] = useMutation(DELETE_BLOGS, {
        update(cache) {
            cache.modify({
                fields: {
                    blogs() {},
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

    const category = [
        {
            label: 'How to',
            value: 'How to',
        },
        {
            label: 'Inspiration',
            value: 'Inspiration',
        },
        {
            label: 'Community',
            value: 'Community',
        },
    ];

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
                    title: `Blog successfully deleted.`,
                });
            }
        });
    };

    const handlePreview = a => {
        setData(a);
        setPreviewVisible(true);
    };

    const heightAdjustment = () => {
        const page = document.getElementById('page').clientHeight;
        const footer = document.getElementById('footer').clientHeight;
        setH(page - footer - 90);
    };

    const BlogBody = () => {
        return (
            <div className={` flex flex-wrap`}>
                {blogs.map((blog, i) => {
                    return (
                        <div
                            key={blog.id}
                            className={`w-48 h-64 border shadow-lg m-6 rounded-lg overflow-hidden`}>
                            <div className={`w-full relative`}>
                                <img
                                    className={`w-48 h-32`}
                                    src={blog.featured_image}
                                />
                                <div
                                    onClick={() => handlePreview(blog)}
                                    className={`absolute right-0 bottom-0 text-white text-lg mr-2 cursor-pointer hover:text-gray-400`}>
                                    <FontAwesomeIcon icon={['fas', 'eye']} />
                                </div>
                            </div>
                            <div className={`w-full px-2 py-1 text-xs`}>
                                <FontAwesomeIcon
                                    className={`text-red-500`}
                                    icon={['fas', 'map-marker-alt']}
                                />
                                <span className={` `}> {blog.blog_type} </span>
                            </div>
                            <div className={`w-48`}>
                                <span
                                    style={{fontSize: '0.80rem'}}
                                    className={`w-48 px-2  block font-semibold leading-tight cursor-pointer`}>
                                    <Link
                                        className={`hover:text-primary-700 duration-300 transition-all text-gray-800`}
                                        to={`/portal/blogs/${blog.id}`}>
                                        {blog.title
                                            ? truncate(blog.title, 40)
                                            : ''}
                                    </Link>
                                </span>
                            </div>
                            <div className={`w-48 px-2 `}>
                                <p
                                    className={` text-xs text-left leading-tight text-gray-700`}
                                    style={{fontSize: '0.70rem'}}>
                                    {blog.content
                                        ? silencedHtml(blog.content, 50)
                                        : ''}
                                </p>
                            </div>
                            <div
                                className={`w-full px-2 flex justify-between items-center`}>
                                <Checkbox
                                    checked={selected.indexOf(blog.id) !== -1}
                                    color={`danger-o`}
                                    style={{fontSize: '0.70rem'}}
                                    animation={`pulse`}
                                    className={``}
                                    onChange={e => handleSelected(blog.id, e)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const BlogFilter = () => {
        return (
            <div className={`w-full`}>
                <h1 className={`text-xl font-semibold`}> Filter Blogs </h1>

                <div>
                    <div className={`pr-16 w-64`}>
                        <SearchBar
                            handleSearchChange={e => handleSC(e.target.value)}
                        />
                    </div>
                    <div className={`mt-5`}>
                        <div> Type: </div>
                        <div className={`ml-5`}>
                            {category.map((c, i) => {
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
            id={`page`}
            className={`w-full h-screen min-h-screen overflow-y-auto flex relative `}>
            <Modal
                visible={previewVisible}
                centered={true}
                width={`70%`}
                closable={false}
                footer={[
                    <Btn
                        id={`footer`}
                        onClick={() => setPreviewVisible(false)}
                        key={`close`}>
                        {' '}
                        Close
                    </Btn>,
                ]}>
                <div
                    ref={body => {
                        if (!body) return;
                        heightAdjustment();
                    }}
                    className={`bg-white overflow-y-auto`}
                    style={{height: `${h}px`}}>
                    <div
                        className={`w-full h-64 bg-cover bg-center  `}
                        style={{
                            backgroundImage: `url('${data.featured_image}')`,
                        }}></div>

                    <div className={`w-full  `}>
                        <div
                            className={` text-center font-semibold text-lg my-10`}>
                            {data.title}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.content,
                            }}></div>
                    </div>
                </div>
            </Modal>
            <section
                className={`w-full bg-white shadow-container rounded-lg p-8`}>
                <div className={`flex items-center justify-between mb-8`}>
                    <h1 className={`text-3xl font-bold`}> Blogs </h1>
                    <div>
                        <Link to={`/portal/blogs/add`}>
                            <Button styles={`secondary`}>Add Blog</Button>
                        </Link>
                        <Button
                            className={`ml-4`}
                            styles={`secondary`}
                            onClick={handleDelete}
                            disabled={!selected.length}>
                            Delete Blog
                        </Button>
                    </div>
                </div>

                <div className={`w-full flex justify-between `}>
                    <div className={`w-3/12 mr-10 `}> {BlogFilter()} </div>
                    <div className={`w-9/12 `}>
                        <Table
                            query={`blogs`}
                            dlimit={6}
                            showLimit={false}
                            sort={`DESC`}
                            isTable={false}
                            search_key={keyword}
                            category={{blog_type: cat}}
                            status={status}
                            inputType={`BlogTypeInput`}
                            toggleRefetch={toggleSearch}
                            getData={setBlogs}
                            content={BlogBody()}
                            params={`
                                id
                                title
                                blog_type
                                featured_image
                                content
                                is_active
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

export default Blogs;
