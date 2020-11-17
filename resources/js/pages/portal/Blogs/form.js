import React, {useState, useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Button, Form} from '../../../components/_base';
import {formFields} from './_fields';

import {useMutation, useQuery} from '@apollo/client';

import {swal, img2Base64} from '../../../helpers/knittygritty';

import {
    GET_BLOG,
    CREATE_BLOG,
    UPDATE_BLOG,
} from '../../../graphql/BlogMutation';

const BlogsAdminForm = () => {
    const {type} = useParams();
    const history = useHistory();
    const form = useRef(null);

    const [errors, setErrors] = useState({});
    const [blog, setBlog] = useState({});

    const {data} = useQuery(GET_BLOG, {
        variables: {id: type},
        onCompleted: data => {
            let {__typename, ...rest} = data.get_blog;
            setBlog({...rest});
        },
        skip: type === 'add',
    });

    if (type !== `add`) {
        Object.keys(formFields).forEach(key => {
            if (formFields.hasOwnProperty(key)) {
                formFields[key].value = blog[key];
                formFields[key].id = blog.id;
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
        type === 'add' ? CREATE_BLOG : UPDATE_BLOG,
        {
            update(cache) {
                if (type === 'add') {
                    cache.modify({
                        fields: {
                            blogs() {},
                        },
                    });
                }
            },
            onCompleted: () => {
                swal.fire({
                    icon: 'success',
                    title: `Blog successfully ${
                        type === 'add' ? 'added' : 'updated'
                    }.`,
                    text: 'Redirecting...',
                    showConfirmButton: false,
                    timer: 2000,
                    onClose: () => {
                        history.push(`/portal/blogs`);
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
                    payload[key] = blog.featured_image;
                }
            } else {
                payload[key] = formData.get(key);
            }
        }

        let variable = {...payload};

        if (type !== 'add') {
            variable = {id: type, ...payload};
        }
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

        setBlog({});
        setErrors({});
        history.push(`/portal/blogs`);
    };

    return (
        <section
            className={`w-full h-screen min-h-screen overflow-y-auto bg-white shadow-container rounded-lg p-8 `}>
            <h1 className={`text-3xl font-bold mb-8`}>
                {type === `add` ? `Add` : `Edit`} Blog
            </h1>
            <div className={`w-full flex items-start`}>
                <form className={`w-full h-full mr-16`} ref={form}>
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

export default BlogsAdminForm;
