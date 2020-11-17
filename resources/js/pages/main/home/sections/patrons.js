import React, {useState, useRef, useEffect} from 'react';
import {Modal, Carousel, Button as Btn} from 'antd';
import {
    DatePicker as AntDatePicker,
    LocaleProvider,
    ListView,
} from 'antd-mobile';

const Patrons = () => {
    const [sponsors, setSponsors] = useState(
        new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    );

    const items = [
        {
            src_img: '/storage/patrons/patron_fablab.jpg',
        },
        {
            src_img: '/storage/patrons/patron_dti.jpg',
        },
        {
            src_img: '/storage/patrons/patron_psbank.jpg',
        },
        {
            src_img: '/storage/patrons/patron_pajo.jpg',
        },
        {
            src_img: '/storage/patrons/aklanvhs.PNG',
        },
        {
            src_img: '/storage/patrons/arch.PNG',
        },
        {
            src_img: '/storage/patrons/ascom.PNG',
        },
        {
            src_img: '/storage/patrons/cis.PNG',
        },
        {
            src_img: '/storage/patrons/cristalec.PNG',
        },
        {
            src_img: '/storage/patrons/fablabohol.PNG',
        },
        {
            src_img: '/storage/patrons/gla.PNG',
        },
        {
            src_img: '/storage/patrons/opcamp.PNG',
        },
        {
            src_img: '/storage/patrons/rotaractcf.PNG',
        },
        {
            src_img: '/storage/patrons/tag.PNG',
        },
        {
            src_img: '/storage/patrons/univet.PNG',
        },
        {
            src_img: '/storage/patrons/vriend.PNG',
        },
        {
            src_img: '/storage/patrons/workplace.PNG',
        },
    ];

    useEffect(() => {
        setSponsors(sponsors.cloneWithRows(items));
    }, []);

    const row = r => {
        return (
            <div className="w-auto block">
                <div>
                    <div className="flex justify-center pt-4">
                        <img src={r.src_img} className=" h-32" />
                    </div>
                </div>
            </div>
        );
    };

    const rowBody = props => {
        return <div className={`flex `}>{props.children}</div>;
    };

    return (
        <section id="patrons" className="w-full pt-20 pb-4">
            <div className=" mx-auto ">
                <div className="text-center pt-20 pb-4 ">
                    <span
                        className="text-4xl lg:text-5xl uppercase font-bold"
                        style={{fontFamily: 'Montserrat, sans-serif'}}>
                        {' '}
                        Our Patrons
                    </span>
                </div>
                <div
                    className=" w-full bg-superlightgray flex flex-wrap justify-evenly p-5"
                    style={{fontFamily: 'Roboto Slab, serif'}}>
                    {items.map((item, key) => {
                        return (
                            <div key={key} className="w-auto m-4 shadow-xl">
                                <div>
                                    <div className="flex justify-center overflow-hidden">
                                        <img
                                            src={item.src_img}
                                            className=" h-20 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* <ListView
                        key={1}
                        horizontal={true}
                        dataSource={sponsors}
                        renderBodyComponent={() => <rowBody />}
                        style={{
                            height: document.documentElement.clientHeight,
                            width: document.documentElement.clientWidth,
                            flex: 1,
                        }}
                        renderRow={row}
                        pageSize={10}
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default Patrons;
