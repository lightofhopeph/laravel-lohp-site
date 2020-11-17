import React, {useState, useRef, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Button, Form} from '../../../components/_base';
import {formFields} from './_fields';

import {useMutation, useQuery} from '@apollo/client';

import {img2Base64, toast, swal} from '../../../helpers/knittygritty';
import {
    UPDATE_ACTIVITY,
    GET_ACTIVITY,
    CREATE_ACTIVITY,
} from '../../../graphql/ActivityMutation';
import profile from '../../../store/profile';

const ActivitiesForm = () => {
    const [profileState, profileActions] = profile();
    const {type} = useParams();
    const history = useHistory();
    const form = useRef(null);

    const [errors, setErrors] = useState({});
    const [activity, setActivity] = useState({});
    const [fm, setFm] = useState('');
    const [imgs, setImgs] = useState([]);

    const {data, loading: isFetchingActivity} = useQuery(GET_ACTIVITY, {
        variables: {id: type},
        fetchPolicy: 'network-only',
        onCompleted: data => {
            let {__typename, ...rest} = data.get_activity;
            setActivity({...rest});
            profileActions.setStateImages(data.get_activity.images);
        },
        onError: error => {
            console.log(error.message);
        },
        skip: type === 'add',
    });

    useEffect(() => {
        if (type === 'add') {
            profileActions.setStateImages([]);
        }
    }, []);

    if (type !== `add`) {
        Object.keys(formFields).forEach(key => {
            if (formFields.hasOwnProperty(key)) {
                formFields[key].value = activity[key];
                formFields[key].id = activity.id;
            }
        });
    } else {
        Object.keys(formFields).forEach(key => {
            if (formFields.hasOwnProperty(key)) {
                formFields[key].value = '';
            }
        });
    }

    const [mutation, mutationResults] = useMutation(
        type === 'add' ? CREATE_ACTIVITY : UPDATE_ACTIVITY,
        {
            update(cache) {
                if (type === 'add') {
                    cache.modify({
                        fields: {
                            activities() {},
                        },
                    });
                }
            },
            onCompleted: () => {
                swal.fire({
                    icon: 'success',
                    title: `Post successfully ${
                        type === 'add' ? 'added' : 'updated'
                    }.`,
                    text: 'Redirecting...',
                    showConfirmButton: false,
                    timer: 2000,
                    onClose: () => {
                        history.push(`/portal/activities`);
                    },
                });
            },
            onError: error => {
                setErrors(error);
            },
        },
    );

    const handleSubmit = async evt => {
        evt.preventDefault();

        let payload = {};
        let formData = new FormData(form.current);

        for (let key of formData.keys()) {
            if (key === 'featured_image') {
                if (formData.get(key).name !== '') {
                    payload[key] = await img2Base64(formData.get(key));
                } else {
                    payload[key] = activity.featured_image;
                }
            } else if (key === 'images') {
                payload[key] = profileState.state_images;
            } else {
                payload[key] = formData.get(key);
            }
        }

        let variable = {...payload};

        if (type !== 'add') {
            variable = {id: type, ...payload};
        }
        //console.log(variable);
        mutation({variables: {input: variable}});
    };

    const handleCancel = e => {
        e.preventDefault();
        Object.keys(formFields).forEach(key => {
            if (formFields.hasOwnProperty(key)) {
                if (key === 'is_active') {
                    formFields[key].value = 0;
                    return;
                }

                formFields[key].value = ``;
                formFields[key].id = ``;
            }
        });

        setActivity({});
        setErrors({});
        history.push(`/portal/activities`);
    };

    if (isFetchingActivity) {
        return (
            <div className={`w-full flex justify-center items-center`}>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <section
            className={`w-full h-screen min-h-screen overflow-y-auto bg-white shadow-container rounded-lg p-8 `}>
            <h1 className={`text-3xl font-bold mb-8`}>
                {type === `add` ? `Add` : `Edit`} Activity
            </h1>
            <div className={`w-full flex items-start`}>
                <form className={`w-full mr-16`} ref={form}>
                    <Form errors={errors} formFields={formFields} />
                    <div className={`flex items-center ml-32 mt-16`}>
                        <Button onClick={handleSubmit}>Save</Button>
                        <Button
                            className={`ml-2`}
                            styles={`secondary`}
                            onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ActivitiesForm;
