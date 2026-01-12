import axios from 'axios';

import type { AxiosRequestConfig } from 'axios';

function create(baseURL: string, options: AxiosRequestConfig = {}) {
  return axios.create(Object.assign({ baseURL }, options));
}

// development : http://localhost:5000/posts/
// production : http://localhost:5001/posts/
export const axiosPost = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
