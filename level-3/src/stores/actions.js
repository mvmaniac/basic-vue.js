import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo
} from '../apis';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(e => console.error(e));
  },
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then(({data}) => commit('SET_JOBS', data))
      .catch(e => console.error(e));
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => commit('SET_ASK', data))
      .catch(e => console.error(e));
  },
  FETCH_USER({commit}, username) {
    fetchUserInfo(username)
      .then(({data}) => commit('SET_USER', data))
      .catch(e => console.error(e));
  },
  FETCH_ITEM({commit}, id) {
    fetchItemInfo(id)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(e => console.error(e));
  }
};
