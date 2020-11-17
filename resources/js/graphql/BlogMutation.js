import {gql} from '@apollo/client';

export const GET_BLOG = gql`
    query get_blog($id: ID!) {
        get_blog(id: $id) {
            id
            title
            blog_type
            featured_image
            content
            is_active
            created_at
            updated_at
        }
    }
`;

export const CREATE_BLOG = gql`
    mutation create_blog($input: BlogInput) {
        create_blog(input: $input) {
            status
            message
        }
    }
`;

export const UPDATE_BLOG = gql`
    mutation update_blog($input: BlogInput) {
        update_blog(input: $input) {
            id
            title
            blog_type
            featured_image
            content
            is_active
            created_at
            updated_at
        }
    }
`;

export const DELETE_BLOGS = gql`
    mutation delete_blogs($ids: [ID]) {
        delete_blogs(ids: $ids) {
            status
            message
        }
    }
`;
