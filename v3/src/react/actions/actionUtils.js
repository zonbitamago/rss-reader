'use strict'

export const loadItem = (store, loadingItemList, loadItemList) => {
  store.dispatch(loadingItemList());
  store.dispatch(loadItemList());
}
