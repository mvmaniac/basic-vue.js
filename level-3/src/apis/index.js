import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  BASE_URL: 'https://api.hnpwa.com/v0'
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.BASE_URL}/news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.BASE_URL}/ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.BASE_URL}/jobs/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.BASE_URL}/user/${username}.json`);
}

function fetchItemInfo(id) {
  return axios.get(`${config.BASE_URL}/item/${id}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo
};

/*
  default로 하게 되면 필요한 부분만 쓰려면 아래처럼 해야 함

  import apis from '../apis';
  const {fetchNewsList} = apis;

  eslint 때문에 빈 오브젝트로 함
*/
export default {};
