import React, {useEffect, useState, useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Radio} from 'pretty-checkbox-react';
import ReactQuill from 'react-quill';
import Input from './Input';
import TextArea from './TextArea';
import Select from 'react-select';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {img2Base64, toast, swal} from '../../helpers/knittygritty';
import Tooltip from './Tooltip';
import profile from '../../store/profile';

const Form = ({errors, formFields, data = {}}) => {
    const [profileState, profileActions] = profile();

    const Field = key => {
        const [limitError, setLimitError] = useState(false);
        let type = formFields[key].type;
        let inputFile = useRef(null);
        let [filename, setFilename] = useState('');
        let [editorValue, setEditorValue] = useState('');
        let [base64, setBase64] = useState('');

        useEffect(() => {
            if (type === 'editor' && formFields[key].value) {
                setEditorValue(formFields[key].value);
            }
        }, [formFields[key].value]);

        switch (type) {
            case 'select':
                const handleDefaultValue = () => {
                    let value = formFields[key].value;
                    let selected = null;

                    Object.keys(formFields[key].options).forEach(optionKey => {
                        if (
                            formFields[key].options[optionKey].value === value
                        ) {
                            selected = formFields[key].options[optionKey];
                        }
                    });

                    return selected;
                };

                return (
                    <Select
                        isOptionSelected
                        isSearchable={false}
                        name={key}
                        classNamePrefix={`input-select`}
                        onChange={formFields[key].handleChange}
                        className={`select-dropdown w-full`}
                        placeholder={formFields[key].placeholder}
                        options={formFields[key].options}
                        defaultValue={handleDefaultValue()}
                    />
                );

            case 'file':
                const handleFile = () => {
                    let name = '';

                    if (inputFile.current.files.length) {
                        let files = Array.from(inputFile.current.files);
                        name = files[0].name;
                    }

                    setFilename(name);
                };

                const clearFile = () => {
                    inputFile.current.type = '';
                    inputFile.current.type = 'file';
                    setFilename('');
                };

                return (
                    <div
                        className={`c-file-input js-file-input bg-gray-100 hover:bg-gray-200 ${filename &&
                            'has-file'}`}>
                        <div className="c-file-input__indicator">
                            <span className="c-file-input__indicator__icon c-icon c-icon--attach">
                                <i className="fa fa-paperclip" />
                            </span>
                        </div>
                        <label
                            className={`cursor-pointer c-file-input__label js-file-input__label ${filename &&
                                'text-primary'}`}>
                            <span>{filename || 'No file choosen'}</span>
                            <input
                                ref={inputFile}
                                type="file"
                                name={formFields[key].name || key}
                                accept={formFields[key].accept}
                                onChange={handleFile}
                                className="c-file-input__field js-file-input__field"
                            />
                        </label>
                        <div
                            className="c-file-input__remove js-file-input__remove"
                            onClick={clearFile}>
                            <span className="c-file-input__remove__icon c-icon c-icon--remove-circle">
                                <i className="fa fa-minus-circle" />
                            </span>
                        </div>
                    </div>
                );

            case 'radio':
                let radioWrapperClass =
                    formFields[key].classname || 'flex flex-col';

                return (
                    <section className={radioWrapperClass}>
                        {Object.keys(formFields[key].options).map(optionKey => (
                            <Radio
                                key={optionKey}
                                name={key}
                                value={optionKey}
                                inputProps={{
                                    defaultChecked:
                                        formFields[key].value === optionKey,
                                }}
                                {...formFields[key].methods}
                                color="danger">
                                {formFields[key].options[optionKey]}
                            </Radio>
                        ))}
                    </section>
                );

            case 'textarea':
                return (
                    <>
                        <TextArea
                            name={key}
                            rows={6}
                            defaultValue={
                                formFields[key].value || data[key] || ``
                            }
                            placeholder={formFields[key].placeholder || ``}
                        />
                    </>
                );

            case 'editor':
                const modules = {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{list: 'ordered'}, {list: 'bullet'}],
                        [{script: 'sub'}, {script: 'super'}],
                        [{indent: '-1'}, {indent: '+1'}],
                        [{direction: 'rtl'}],
                        [{header: [1, 2, 3, 4, 5, 6, false]}],
                        [{color: []}, {background: []}],
                        [{font: []}],
                        [{align: []}],
                        ['link', 'image'],
                    ],
                };

                return (
                    <>
                        <ReactQuill
                            // theme={`snow`}
                            className={`w-full h-full`}
                            modules={modules}
                            value={editorValue}
                            onChange={setEditorValue}
                        />
                        <textarea
                            name={key}
                            className={`hidden `}
                            value={editorValue}
                            onChange={() => null}
                        />
                    </>
                );

            case 'base64':
                const handleFileChange = e => {
                    e.preventDefault();

                    if (e.target.files.length > 0) {
                        let reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = function() {
                            setBase64(reader.result);
                        };

                        reader.onerror = function(error) {
                            console.log(error);
                        };

                        //setFilename(e.target.files[0]["name"]);
                    } else {
                        //setFilename("");
                    }
                };

                return (
                    <div className={``}>
                        <label className={`w-full cursor-pointer`}>
                            <input
                                id={key}
                                type={`file`}
                                className={`hidden`}
                                name={key}
                                accept={formFields[key].accept}
                                onChange={handleFileChange}
                            />
                            <img
                                className={`w-64 h-48 border bg-center bg-cover`}
                                src={
                                    base64
                                        ? base64
                                        : formFields[key].value ||
                                          data[key] ||
                                          null
                                }
                            />
                            <span
                                className={`w-full text-center text-gray-700 px-2 text-xs italic`}>
                                Please select an image...
                            </span>
                        </label>
                    </div>
                );
            case 'array':
                const handleRemove = async (e, i) => {
                    e.preventDefault();
                    e.stopPropagation();

                    profileActions.setStateImages([
                        ...profileState.state_images.filter((image, k) => {
                            if (i !== k) {
                                return image;
                            }
                        }),
                    ]);

                    if (profileState.state_images.length > 8) {
                        setLimitError(true);
                    } else {
                        setLimitError(false);
                    }
                };

                const handleChange = async e => {
                    const fmCount = profileState.state_images.length;
                    const onCount = e.target.files.length;

                    if (fmCount + onCount > 8) {
                        setLimitError(true);
                        e.target.value = null;
                        return;
                    } else {
                        setLimitError(false);
                    }

                    let imgs = profileState.state_images;

                    [...e.target.files].map(file => {
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function() {
                            // profileActions.setStateImages([
                            //     ...profileState.state_images.concat({
                            //         image: reader.result,
                            //         description: '',
                            //     }),
                            // ]);
                            imgs.push({image: reader.result, description: ''});
                            profileActions.setStateImages(imgs);
                        };

                        reader.onerror = function(error) {
                            console.log(error);
                        };
                    });

                    e.target.value = null;
                };

                return (
                    <div className={``}>
                        <div
                            className="w-full h-full flex flex-wrap justify-evenly "
                            style={{
                                textAlign: 'center',
                                marginBottom: '0px',
                            }}>
                            {console.log('ac ', profileState.state_images)}
                            {profileState.state_images.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="rounded-sm border m-2 relative w-40 h-40 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('${image.image}')`,
                                        }}>
                                        <div
                                            className={`absolute bg-palette-blue-light font-bold leading-none ml-1 mt-1 rounded-full text-white w-1/4`}>
                                            {index + 1}
                                        </div>
                                        <Tooltip title={`Remove this item`}>
                                            <span
                                                onClick={e =>
                                                    handleRemove(e, index)
                                                }
                                                className={`absolute bottom-0 right-0 p-2 -mb-2 cursor-pointer`}>
                                                <FontAwesomeIcon
                                                    className={`text-red-500 shadow-xl hover:font-bold hover:text-red-700`}
                                                    icon={['fas', 'times']}
                                                />
                                            </span>
                                        </Tooltip>
                                    </div>
                                );
                            })}
                            <div
                                className={`rounded-sm overflow-hidden  m-2 w-40 h-40 bg-cover bg-center`}>
                                <label>
                                    <div
                                        className={`w-40 h-40 bg-gray-100 hover:bg-gray-300 cursor-pointer relative flex justify-center items-center`}
                                        onDragOver={e => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onDragEnter={e => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onDragLeave={e => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}>
                                        <div>
                                            {' '}
                                            <FontAwesomeIcon
                                                className={`text-2xl`}
                                                icon={[
                                                    'fas',
                                                    'cloud-upload-alt',
                                                ]}
                                            />
                                            <span className={`block text-base`}>
                                                Click to add image
                                            </span>
                                        </div>
                                        <input
                                            type="file"
                                            id={key}
                                            accept="image/*"
                                            multiple
                                            className="hidden"
                                            name={key}
                                            onChange={e => handleChange(e)}
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        {limitError && (
                            <span className="px-1 text-red-400 tracking-widest  text-xs ">
                                Please limit your photos to eight(8) items only.
                            </span>
                        )}
                    </div>
                );
            default:
                return (
                    <>
                        <Input
                            type={formFields[key].type || `text`}
                            step={`any`}
                            className={`
                                ${formFields[key].class}
                                ${formFields[key].width || 'w-full'}
                            `}
                            name={key}
                            autoComplete={`off`}
                            defaultValue={
                                formFields[key].value || data[key] || ``
                            }
                            placeholder={formFields[key].placeholder || ``}
                            minLength={formFields[key].minlength || ``}
                            maxLength={formFields[key].maxlength || ``}
                        />
                    </>
                );
        }
    };

    return Object.keys(formFields).map((value, key) => (
        <div
            className={`mb-5 text-base flex`}
            key={formFields[value].id ? `${formFields[value].id}${key}` : key}>
            <label className="mr-3 w-32 mt-2 capitalize">
                <span className="font-semibold text-sm">
                    {formFields[value].label || value.replace('_', ' ')}
                </span>
                {formFields[value].required && (
                    <span className="text-red-500"> *</span>
                )}
            </label>

            <div className={`w-full ml-3 `}>
                <div className={`flex`}>{Field(value)}</div>
                {errors[value] && (
                    <span className="text-red-500 text-sm">
                        {errors[value]}
                    </span>
                )}
            </div>
        </div>
    ));
};

export default Form;
