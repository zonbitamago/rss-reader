'use strict';
import * as actionTypes from '../utils/actionTypes';

export const onShutDownClick = () => ({type: actionTypes.SHUTDOWN});
export const onMimizeClick = () => ({type: actionTypes.MINIMIZE});
export const onOpenGithubClick = () => ({type: actionTypes.OPEN_GITHUB});
export const onHomeClick = () => ({type: actionTypes.HOME});
