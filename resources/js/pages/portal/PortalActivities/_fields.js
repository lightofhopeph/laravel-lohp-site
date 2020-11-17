import moment from 'moment';

const baseYear = moment().year();

export const formFields = {
    title: {
        label: 'Title',
        required: true,
    },

    description: {
        label: 'Description',
        required: true,
    },

    location: {
        label: 'Location',
        required: true,
    },

    month: {
        label: 'Month',
        type: 'select',
        required: true,
        value: 0,
        options: [
            {value: 'January', label: 'January'},
            {value: 'February', label: 'February'},
            {value: 'March', label: 'March'},
            {value: 'April', label: 'April'},
            {value: 'May', label: 'May'},
            {value: 'June', label: 'June'},
            {value: 'July', label: 'July'},
            {value: 'August', label: 'August'},
            {value: 'September', label: 'September'},
            {value: 'October', label: 'October'},
            {value: 'November', label: 'November'},
            {value: 'December', label: 'December'},
        ],
    },

    year: {
        label: 'Year',
        type: 'select',
        required: true,
        value: 0,
        options: [
            {value: baseYear, label: baseYear},
            {value: baseYear - 1, label: baseYear - 1},
            {value: baseYear - 2, label: baseYear - 2},
            {value: baseYear - 3, label: baseYear - 3},
            {value: baseYear - 4, label: baseYear - 4},
            {value: baseYear - 5, label: baseYear - 5},
        ],
    },

    featured_image: {
        label: 'Featured Image',
        accept: 'image/*',
        required: true,
        type: 'base64',
    },

    images: {
        label: 'Images',
        accept: 'image/*',
        type: 'array',
    },
};
