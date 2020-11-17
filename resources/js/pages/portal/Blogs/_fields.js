export const formFields = {
    title: {
        label: 'Title',
        required: true,
    },

    blog_type: {
        label: 'Category',
        required: true,
        type: 'select',
        options: [
            {
                value: 'How to',
                label: 'How to',
            },
            {
                value: 'Inspiration',
                label: 'Inspiration',
            },
            {
                value: 'Community',
                label: 'Community',
            },
        ],
    },
    featured_image: {
        label: 'Featured Image',
        accept: 'image/*',
        required: true,
        type: 'base64',
    },
    content: {
        type: 'editor',
        label: 'Content',
    },
};
