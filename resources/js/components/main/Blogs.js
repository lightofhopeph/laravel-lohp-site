import React, {useState, useEffect, useRef} from 'react';
import {
    DatePicker as AntDatePicker,
    LocaleProvider,
    ListView,
} from 'antd-mobile';
import {gql, useQuery, useMutation} from '@apollo/client';
import {Button, SearchBar} from '../../components/_base';
import {silencedHtml, truncate} from '../../helpers/knittygritty';
import moment from 'moment';
import {Modal, Carousel, Button as Btn, Menu, Dropdown, BackTop} from 'antd';
import {castArray, debounce, isEmpty} from 'lodash';
import {DownOutlined} from '@ant-design/icons';
import profile from '../../store/profile';
import Footer from '../../components/main/Footer';

const Blogs = () => {
    const [profileState, profileActions] = profile();
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState('');
    const [cat, setCat] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [newSearch, setNewSearch] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [blogs, setBlogs] = useState(
        new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
    );
    const [previewVisible, setPreviewVisible] = useState(false);
    const [blog, setBlog] = useState([]);
    const [h, setH] = useState(0);
    const [baseYear, setBaseYear] = useState(moment().year());
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [mIndex, setMIndex] = useState(12);

    const listview = useRef(null);

    const GET_BLOGS = gql`
    query blogs(
      $search_key: String 
      $input: BlogTypeInput
    ) {
      blogs(
        first: ${limit}
        page: ${currentPage}
        search_key: $search_key
        input: $input
        orderBy: [{ field: CREATED_AT, order: ASC }]
      ) {
        data {
            title
            blog_type
            featured_image
            content
            is_active
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

    const {loading, error, data, refetch} = useQuery(GET_BLOGS, {
        variables: {
            search_key: keyword,
            input: {blog_type: cat, year: year, month: month},
        },
        fetchPolicy: 'no-cache',
    });

    useEffect(() => {
        if (data) {
            if (newSearch) {
                setSearchResults(data['blogs'].data);
                let dataSource = blogs.cloneWithRows(data['blogs'].data);
                setBlogs(dataSource);
                setCurrentPage(0);
            } else {
                let updatedData = [...searchResults, ...data['blogs'].data];
                setSearchResults(updatedData);
                setBlogs(blogs.cloneWithRows(updatedData));
            }
            setTotalResults(data['blogs'].paginatorInfo.total);
            setNewSearch(true);
        }
    }, [data]);

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
        {
            label: 'All',
            value: '',
        },
    ];

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
            value: 1,
            index: 0,
        },
        {
            label: 'February',
            value: 2,
            index: 1,
        },
        {
            label: 'March',
            value: 3,
            index: 2,
        },
        {
            label: 'April',
            value: 4,
            index: 3,
        },
        {
            label: 'May',
            value: 5,
            index: 4,
        },
        {
            label: 'June',
            value: 6,
            index: 5,
        },
        {
            label: 'July',
            value: 7,
            index: 6,
        },
        {
            label: 'August',
            value: 8,
            index: 7,
        },
        {
            label: 'September',
            value: 9,
            index: 8,
        },
        {
            label: 'October',
            value: 10,
            index: 11,
        },
        {
            label: 'November',
            value: 11,
            index: 10,
        },
        {
            label: 'December',
            value: 12,
            index: 11,
        },
        {
            label: 'All',
            value: '',
            index: 12,
        },
    ];

    const handleSC = debounce(k => {
        setKeyword(k);
    }, 800);

    const handlePreview = a => {
        setBlog(a);
        setPreviewVisible(true);
    };

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
    };

    const onEndReached = () => {
        setNewSearch(false);
        setCurrentPage(currentPage + 1);
    };

    const heightAdjustment = () => {
        const page = document.getElementById('page').clientHeight;
        const footer = document.getElementById('footer').clientHeight;
        setH(page - footer - 90);
    };

    const row = r => {
        return (
            <div
                className={`w-full flex justify-center items-center mb-16 mt-10`}>
                <div
                    style={{width: '100%'}}
                    className={`flex justify-start items-center bg-white `}>
                    <div style={{height: '15.0rem', width: '20.0rem'}}>
                        <div
                            style={{
                                height: '15.0rem',
                                width: '20.0rem',
                                backgroundImage: `url('${r.featured_image}')`,
                            }}
                            className={`bg-cover bg-center`}></div>
                    </div>

                    <div
                        style={{height: '15.0rem'}}
                        className={` ml-8 pr-4 pb-1 flex flex-col justify-between items-start`}>
                        <div
                            className={`text-menugreen uppercase tracking-wider font-semibold`}>
                            {' '}
                            {r.blog_type}{' '}
                        </div>
                        <div>
                            <div
                                className={`text-2xl font-semibold text-darkgray`}>
                                {' '}
                                {truncate(r.title, 50)}
                            </div>
                            <div className={` text-left text-darkgray `}>
                                {' '}
                                {moment(
                                    r.created_at,
                                    'YYYY-MM-DD hh:mm:ss',
                                ).format('MM/D/YYYY')}
                            </div>
                        </div>

                        <div
                            style={{fontSize: '1.0rem'}}
                            className={` text-darkgray text-justify`}>
                            {' '}
                            {silencedHtml(r.content, 300)}...
                        </div>
                        <div
                            className={`border cursor-pointer px-1 border-lightgray hover:bg-gray-200`}
                            onClick={() => handlePreview(r)}>
                            Read More{' '}
                        </div>
                    </div>
                </div>
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
                </div>
            </div>
        );
    };

    const BodyBlogs = props => {
        return <>{props.children}</>;
    };

    const CatMenu = () => {
        return (
            <div className={`bg-white border shadow-lg`}>
                {category.map((c, i) => {
                    return (
                        <div
                            key={i}
                            className={`tracking-widest cursor-pointer hover:bg-gray-300 px-4 py-1`}
                            onClick={() => {
                                if (c.label === 'All') {
                                    setCat([]);
                                } else {
                                    setCat([c.value]);
                                }
                            }}>
                            {c.label}
                        </div>
                    );
                })}
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
                                if (y.label === 'All') {
                                    setYear('');
                                } else {
                                    setYear(y.value);
                                }
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
                                    setMonth();
                                    setMIndex(i);
                                } else {
                                    setMonth(m.value);
                                    setMIndex(i);
                                }
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
                width={`75%`}
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
                        //  heightAdjustment();
                    }}
                    className={`bg-white overflow-y-auto`}
                    // style={{height: `${h}px`}}
                >
                    <div
                        className={`w-full bg-darkgray flex justify-center bg-cover bg-center  `}
                        style={{
                            backgroundImage: `url(${blog.featured_image})`,
                            height: '20rem',
                        }}>
                        {/* <img
                            style={{width: '100%', height: '50%'}}
                            src={blog.featured_image}
                        /> */}
                    </div>

                    <div className={`w-full  `}>
                        <div
                            className={` text-left font-semibold text-3xl mt-12`}>
                            {blog.title}
                        </div>
                        <div className={` text-left text-lg italic mb-16`}>
                            {' '}
                            {moment(
                                blog.created_at,
                                'YYYY-MM-DD hh:mm:ss',
                            ).format('MM/D/YYYY')}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: blog.content,
                            }}></div>
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
                                month:{' '}
                                {month === '' ? 'All' : months[mIndex]['label']}
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <DownOutlined />
                            </div>
                        </div>
                    </Dropdown>
                    <div className={`w-5`}> </div>
                    <Dropdown overlay={() => <CatMenu />}>
                        <div
                            className={`flex items-center justify-center cursor-pointer`}>
                            <div
                                className={` text-darkgray tracking-widest uppercase`}>
                                Category: {isEmpty(cat) ? 'All' : cat[0]}
                            </div>
                            <div className={`flex justify-center items-center`}>
                                <DownOutlined />
                            </div>
                        </div>
                    </Dropdown>
                </div>

                <div className={`w-full h-full `}>
                    <ListView
                        ref={listview}
                        key={1}
                        dataSource={blogs}
                        style={{
                            height: document.documentElement.clientHeight - 80,
                            border: 'none',
                        }}
                        renderFooter={() => (
                            <div style={{padding: 30, textAlign: 'center'}}>
                                {loading ? 'Loading...' : ''}
                            </div>
                        )}
                        renderBodyComponent={() => <BodyBlogs />}
                        renderRow={row}
                        renderFooter={() => (
                            <div className={`-mb-3 -mx-16`}>
                                <Footer />
                            </div>
                        )}
                        useBodyScroll={false}
                        scrollRenderAheadDistance={50}
                        useBodyScroll={true}
                        onEndReached={() => {
                            if (totalResults > 10) {
                                onEndReached();
                            }
                        }}
                        pageSize={10}
                    />
                </div>
            </section>
        </>
    );
};

export default Blogs;
