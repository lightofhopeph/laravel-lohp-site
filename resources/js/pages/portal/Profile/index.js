import React, {useRef, useState} from 'react';
import profile from '../../../store/profile';
import {formFields} from './_fields';
import {useMutation, useQuery} from '@apollo/client';
import {Button, Form} from '../../../components/_base';
import {UPDATE_PROFILE} from '../../../graphql/index';
import {toast, swal, img2Base64} from '../../../helpers/knittygritty';

const WebsiteProfile = () => {
    const [profileState, profileActions] = profile();
    const [errors, setErrors] = useState({});

    const form = useRef(null);

    const [mutation, {loading: isUpdating}, mutationResults] = useMutation(
        UPDATE_PROFILE,
        {
            onCompleted: data => {
                profileActions.getProfile();
                swal.fire({
                    icon: 'success',
                    title: `Profile successfully updated.`,
                    showConfirmButton: false,
                    timer: 1000,
                });
            },
            onError: error => {
                console.log(error.message);
            },
        },
    );

    const handleSubmit = async e => {
        e.preventDefault();
        let payload = {};
        let formData = new FormData(form.current);

        for (let key of formData.keys()) {
            if (
                key === 'fp_image' ||
                key === 'logo' ||
                key === 'act_image' ||
                key === 'blog_image'
            ) {
                if (formData.get(key).name !== '') {
                    payload[key] = await img2Base64(formData.get(key));
                } else {
                    payload[key] = profileState.profile[key];
                }
            } else {
                payload[key] = formData.get(key);
            }
        }

        let variable = {...payload};

        variable = {...payload};

        mutation({variables: variable});
    };

    if (!profileState.profile) {
        return (
            <div className={`w-full flex justify-center items-center`}>
                <div> Loading... </div>
            </div>
        );
    }
    Object.keys(formFields).forEach(key => {
        if (formFields.hasOwnProperty(key)) {
            formFields[key].value = profileState.profile[key];
            formFields[key].id = profileState.profile.id;
        }
    });

    return (
        <section
            className={`w-full h-screen min-h-screen overflow-y-auto bg-white  p-8`}>
            <h1 className={`text-3xl font-bold mb-8 `}>Website Profile</h1>
            <div className={`w-full flex items-start`}>
                <form className={`w-full mr-16`} ref={form}>
                    <Form errors={errors} formFields={formFields} />
                    <div className={`flex items-center ml-32 mt-16`}>
                        <button
                            disabled={isUpdating}
                            className={`px-16 py-2 rounded-full text-white bg-green-500`}
                            onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default WebsiteProfile;
