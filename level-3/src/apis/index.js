import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  BASE_URL: 'https://api.hnpwa.com/v0',
};

// 2. API 함수들을 정리
function fetchList(pageName) {
  return axios.get(`${config.BASE_URL}/${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.BASE_URL}/user/${username}.json`);
}

async function fetchItemInfo(id) {
  try {
    return await axios.get(`${config.BASE_URL}/item/${id}.json`);
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
}

/*
  default로 하게 되면 필요한 부분만 쓰려면 아래처럼 해야 함

  import apis from '../apis';
  const {fetchNewsList} = apis;
*/
export { fetchList, fetchUserInfo, fetchItemInfo };
