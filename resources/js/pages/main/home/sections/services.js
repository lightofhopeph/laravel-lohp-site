import React from 'react';

const Services = () => {
    return (
        <section id="services" className="pt-32 pb-4 w-full h-screen">
            <div className="mx-auto">
                <div className="text-center ">
                    <span
                        className="text-4xl lg:text-5xl uppercase font-bold"
                        style={{fontFamily: 'Montserrat, sans-serif'}}>
                        Solar Night Lamps
                    </span>
                    <p
                        className=" italic"
                        style={{fontFamily: 'Roboto Slab, serif'}}>
                        {' '}
                        <q>
                            {' '}
                            Because we care for the environment and for our
                            children's children...{' '}
                        </q>{' '}
                    </p>
                </div>
                <div className="lg:flex lg:flex-wrap lg:justify-center">
                    <div className="border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12">
                        <img
                            src="/storage/services/fablab2_s.jpg"
                            className="mx-auto"
                        />
                        <div className="p-4">
                            <span
                                className="font-bold "
                                style={{fontFamily: 'Montserrat, sans-serif'}}>
                                {' '}
                                Workshops and awareness about the environment{' '}
                            </span>
                            <p
                                className="text-justify"
                                style={{fontFamily: 'Roboto Slab, serif'}}>
                                Participate to become a steward for the
                                environment in creating a brighter future for
                                our children.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12">
                        <img
                            src="/storage/services/img3_s.jpg"
                            className="mx-auto"
                        />
                        <div className="p-4">
                            <span
                                className="font-bold"
                                style={{fontFamily: 'Montserrat, sans-serif'}}>
                                {' '}
                                Solar Lamp Program
                            </span>
                            <p style={{fontFamily: 'Roboto Slab, serif'}}>
                                This project aims to provide a clean, safe,
                                cheap and sustainable source of light for the
                                communities in far-flung areas. Join us in our
                                advocacy!{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:flex-wrap lg:justify-center">
                    <div className="lg:px-0 lg:py-4 p-4 mx-auto sm:px-0 sm:m-10 lg:w-4/5 xl:9/12">
                        <p
                            className="text-justify"
                            style={{fontFamily: 'Roboto Slab, serif'}}>
                            We are fulfilled knowing that today as of March
                            2020, we have assembled and distributed{' '}
                            <span className="font-bold text-green-500">
                                {' '}
                                2,033{' '}
                            </span>{' '}
                            Solar Night Lamps in A Bottle to{' '}
                            <span className="font-bold text-green-500">
                                {' '}
                                1,016{' '}
                            </span>{' '}
                            family beneficiaries, recycled{' '}
                            <span className="font-bold text-green-500">
                                {' '}
                                2,033{' '}
                            </span>{' '}
                            PET Plastic Bottles and reduced C0<sub>2</sub>{' '}
                            emissions from kersone (that's approximately 80,154
                            Kg of CO<sub>2</sub>). Thank you to all those who
                            shared their time and resources to make all of these
                            possible.{' '}
                        </p>
                        <p className="pt-4">
                            {' '}
                            <span
                                className="font-bold"
                                style={{fontFamily: 'Montserrat, sans-serif'}}>
                                These solar lamps are hitting 3 birds in 1
                                stone.
                            </span>{' '}
                        </p>
                        <ul className="list-decimal list-inside">
                            <li
                                className="text-justify"
                                style={{fontFamily: 'Roboto Slab, serif'}}>
                                {' '}
                                We are fighting against plastic pollution by
                                utilizing used plastic bottles.
                            </li>
                            <li
                                className="text-justify"
                                style={{fontFamily: 'Roboto Slab, serif'}}>
                                We are fighting against climate change by
                                reducing our carbon footprint with the aid of
                                renewable energy.{' '}
                            </li>
                            <li
                                className="text-justify"
                                style={{fontFamily: 'Roboto Slab, serif'}}>
                                {' '}
                                We are helping less privileged off grid
                                communities to have a safe source of light at
                                night time with the use of clean renewable
                                energy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
