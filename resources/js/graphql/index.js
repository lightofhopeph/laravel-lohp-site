import {gql} from '@apollo/client';

export const GET_PROFILE = gql`
    query GET_PROFILE {
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
`;

export const UPDATE_PROFILE = gql`
    mutation update_profile(
        $name: String
        $motto: String
        $logo: String
        $contact_number: String
        $email: String
        $street_address: String
        $city: String
        $zip: String
        $country: String
        $fp_image: String
        $act_image: String
        $blog_image: String
        $facebook: String
        $instagram: String
        $twitter: String
        $linkedin: String
    ) {
        update_profile(
            input: {
                name: $name
                motto: $motto
                logo: $logo
                contact_number: $contact_number
                email: $email
                street_address: $street_address
                city: $city
                zip: $zip
                country: $country
                fp_image: $fp_image
                act_image: $act_image
                blog_image: $blog_image
                facebook: $facebook
                instagram: $instagram
                twitter: $twitter
                linkedin: $linkedin
            }
        ) {
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
`;
