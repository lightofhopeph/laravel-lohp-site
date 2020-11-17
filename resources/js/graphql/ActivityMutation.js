import {gql} from '@apollo/client';

export const GET_ACTIVITY = gql`
    query get_activity($id: ID) {
        get_activity(id: $id) {
            id
            title
            description
            location
            month
            year
            featured_image
            images {
                id
                image
                description
            }
            created_at
            updated_at
        }
    }
`;

export const CREATE_ACTIVITY = gql`
    mutation create_activity($input: ActivityInput) {
        create_activity(input: $input) {
            status
            message
        }
    }
`;

export const UPDATE_ACTIVITY = gql`
    mutation update_activity($input: ActivityInput) {
        update_activity(input: $input) {
            id
            title
            description
            location
            month
            year
            featured_image
            images {
                id
                image
                description
            }
            created_at
            updated_at
        }
    }
`;

export const DELETE_ACTIVITY = gql`
    mutation delete_activity($ids: [ID]) {
        delete_activity(ids: $ids) {
            status
            message
        }
    }
`;
