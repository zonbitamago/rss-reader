'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import fetch from 'isomorphic-fetch'
import FeedMe from 'feedme';

export const onShutDownClick = () => ({type: actionTypes.SHUTDOWN});
export const onMimizeClick = () => ({type: actionTypes.MINIMIZE});
export const onOpenGithubClick = () => ({type: actionTypes.OPEN_GITHUB});
export const onHomeClick = () => ({type: actionTypes.HOME});
export const onRssListModalClick = () => ({type: actionTypes.RSSLISTMODAL});
// export const onRssInputClick = (name, url) => ({type: actionTypes.RSSINPUT, name: name, url: url});
export const onRssInputClick = (name, url) => {
  return (dispatch) => {
    console.log('dispatch1!');
    dispatch((name, url) => ({type: actionTypes.RSSISLOADING, name: name, url: url}));
    console.log('dispatch2!');
    // return fetch(url).then((response) => {
    //   console.log('fetch!');
    //   var parser = new FeedMe(true);
    //   response.pipe(parser);
    //   // parser.on('error', () => {
    //     dispatch((name, url) => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}));
    //   // });
    //   // parser.on('end', () => {
    //     dispatch((name, url) => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_SUCCESS}));
    //   // });
    // }, (error) => {
    //   dispatch((name, url) => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}));
    // });
    return fetch(url).then(response => response.getBody(), error => dispatch((name, url) => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))).then(body => dispatch((name, url) => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR})))
  }
};
