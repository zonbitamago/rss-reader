'use strict'

export function loadItem(store, loadingItemList, loadItemList) {
  store.dispatch(loadingItemList());
  store.dispatch(loadItemList());
}
