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
export const onRssListDeleteClick = (name, url) => ({type: actionTypes.RSSLISTDELETE, name: name, url: url});
export const onRssListURLClick = (url) => ({type: actionTypes.OPEN_RSSURL, url: url});

export const onRssInputClick = (name, url) => {
  return(dispatch) => {
    dispatch(() => ({type: actionTypes.RSSISLOADING, name: name, url: url}));
    return fetch(url).then((response) => {
      try {
        return response.text()
      } catch (e) {
        console.log(e);
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))
      }
    }, (error) => (dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR})))).then((xml) => {
      console.log('parse!');
      try {
        var parser = new FeedMe(true);
        parser.write(xml);
        parser.done();
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_SUCCESS}))
      } catch (e) {
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))
      }
    })
  }
};
