import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from './actions/profileActions';

const initialState = {
    profile: [],
    state_images: [],
};

const useUser = useGlobalHook(React, initialState, actions);

export default useUser;
