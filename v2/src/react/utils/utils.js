'use strict';

export function getRssList() {
  return localStorage.getItem('rssList') == null
    ? undefined
    : JSON.parse(localStorage.getItem('rssList'));
};
