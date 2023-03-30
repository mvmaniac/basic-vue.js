import { fetchUserInfo, fetchItemInfo, fetchList } from '../apis';

export default {
  // promise
  // FETCH_LIST({commit}, pageName) {
  //   return fetchList(pageName)
  //     .then(response => {
  //       commit('SET_LIST', response.data);
  //       return response;
  //     })
  //     .catch(e => console.error(e));
  // },

  // async
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response; // Promise 객체를 리턴함
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  },

  async FETCH_USER({ commit }, username) {
    try {
      const response = await fetchUserInfo(username);
      commit('SET_USER', response.data);
      return response;
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  },

  async FETCH_ITEM({ commit }, id) {
    const response = await fetchItemInfo(id);
    commit('SET_ITEM', response.data);
    return response;
  }
};
