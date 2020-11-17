import React from 'react';
import Frontpage from './sections/frontpage';
import Services from './sections/services';
import Cloudgrid from './sections/cloudgrid';

import Patrons from './sections/patrons';
import Getinvolved from './sections/getinvolved';

export default () => {
    return (
        <div className={``}>
            <Frontpage />
            <Cloudgrid />
            <Services />
            <Patrons />
            <Getinvolved />
        </div>
    );
};
