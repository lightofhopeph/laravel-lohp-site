import React from 'react';

const Cloudgrid = () => {
    return (
        <section id="cloudgrid" className="pt-32 pb-4 w-full h-screen">
            <div className="mx-auto">
                <div className="text-center ">
                    <span
                        className="text-4xl lg:text-5xl uppercase font-bold"
                        style={{fontFamily: 'Montserrat, sans-serif'}}>
                        Cloud Grid
                    </span>
                    <p
                        className=" italic"
                        style={{fontFamily: 'Roboto Slab, serif'}}>
                        {' '}
                        <q>
                            {' '}
                            It is every man’s obligation to put back into the
                            world at least the equivalent of what he takes out
                            of it...
                        </q>{' '}
                    </p>
                </div>
                <div className="lg:flex lg:flex-wrap lg:justify-center"></div>
                <div className="lg:flex lg:flex-wrap lg:justify-center"></div>
            </div>
        </section>
    );
};

export default Cloudgrid;
