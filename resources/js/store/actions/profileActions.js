import {client} from '../../graphql/client';
import {gql} from '@apollo/client';
import {GET_PROFILE} from '../../graphql/index';

export const setState = (store, payload) => {
    Object.keys(payload).forEach(key => {
        store.setState({[key]: payload[key]});
    });
};

export const getProfile = async store => {
    client
        .query({
            query: gql`
                query {
                    profile {
                        id
                        name
                        motto
                        logo
                        contact_number
                        email
                        street_address
                        city
                        zip
                        country
                        fp_image
                        act_image
                        blog_image
                        facebook
                        instagram
                        twitter
                        linkedin
                        created_at
                        updated_at
                    }
                }
            `,
        })
        .then(r => {
            let {__typename, ...data} = r.data.profile;
            store.setState({...store.state, profile: {...data}});
        });
};

export const setStateImages = async (store, payload) => {
    store.setState({...store.state, state_images: payload});
};
