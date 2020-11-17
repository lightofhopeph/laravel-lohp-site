import React from 'react';
import Activities from '../../components/main/Activities';
import profile from '../../store/profile';
import Footer from '../../components/main/Footer';

const ActivitiesPage = () => {
    const [profileState, profileActions] = profile();

    const items = [
        {
            label: 'Lapu-Lapu City, Cebu',
            place: 'Pajo Barangay Hall',
            featured_image: '/storage/pajo/pajo_fp.jpg',
        },
        {
            label: 'Island in San Francisco, Cebu',
            place: 'Tulang Island',
            featured_image: '/storage/tulang/tulang_fp.jpg',
        },
        {
            label: 'Solderless Solar Night Lamp, 22 Hours Makeathon',
            place: 'Fablab UP, Cebu',
            featured_image: '/storage/fablab/fablab_fp.jpg',
        },
        {
            label: 'Lapu-lapu City, Cebu',
            place: 'Pajo Barangay Hall',
            featured_image: '/storage/pajo/pajo_fp.jpg',
        },
        {
            label: 'PS Bank',
            place: 'PS Bank',
            featured_image: '/storage/psbank/psbank_fp.jpg',
        },
        {
            label: 'Dipolog City',
            place: 'Dipolog',
            featured_image: '/storage/dipolog/dipolog_fp.jpg',
        },
        {
            label: 'Cebu City',
            place: 'Sitio Pundok, Pit-os',
            featured_image: '/storage/pitos/pitos_fp.jpg',
        },
        {
            label: 'Cebu',
            place: 'Op Camp, Carcar',
            featured_image: '/storage/carcar/carcar_fp.jpg',
        },
    ];

    return (
        <>
            <div
                className={`w-full relative bg-gray-400 h-auto bg-cover bg-center mt-12`}
                style={{
                    backgroundImage: `url(${profileState.profile.act_image})`,
                    imageRendering: '-webkit-optimize-contrast',
                    height: '50%',
                }}>
                <div
                    className="absolute w-2/5 h-full left-0 flex flex-col justify-center items-center font-normal text-gray-100 font-hairline italic text-2xl "
                    style={{
                        fontFamily: 'Poppins',
                    }}>
                    <q>
                        We can do no great things,
                        <br />
                        <span className={`pl-12`}>
                            {' '}
                            only small things with great love.
                        </span>
                    </q>
                </div>
            </div>
            <div
                className={`w-full text-left text-3xl  my-12 text-darkgray font-semibold tracking-wider`}
                style={{fontFamily: 'Montserrat, sans-serif'}}>
                {' '}
                Activities{' '}
            </div>

            <Activities />
            <div className={`w-screen h-24`}> </div>

            <div className={`-mb-3 -mx-16`}>
                <Footer />
            </div>
        </>
    );
};

export default ActivitiesPage;
