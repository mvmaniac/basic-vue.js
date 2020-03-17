import {fetchUserInfo, fetchItemInfo, fetchList} from '../apis';

export default {
  FETCH_LIST({commit}, pageName) {
    return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data);
        return response;
      })
      .catch(e => console.error(e));
  },
  FETCH_USER({commit}, username) {
    return fetchUserInfo(username)
      .then(({data}) => commit('SET_USER', data))
      .catch(e => console.error(e));
  },
  FETCH_ITEM({commit}, id) {
    return fetchItemInfo(id)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(e => console.error(e));
  }
};
