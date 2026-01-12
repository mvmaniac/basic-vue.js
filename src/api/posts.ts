import type { Post, SearchParams } from '@/shared/types';
import type { AxiosResponse } from 'axios';

import { axiosPost } from '@/api';

export function getPosts(params: SearchParams): Promise<AxiosResponse<Post[]>> {
  return axiosPost.get('/', { params });
}

export function getPostById(id: number): Promise<AxiosResponse<Post>> {
  return axiosPost.get(`${id}`);
}

export function createPost(data: Post): Promise<AxiosResponse<Post>> {
  return axiosPost.post('', data);
}

export function updatePost(id: number, data: Post): Promise<AxiosResponse<Post>> {
  return axiosPost.patch(`${id}`, data);
}

export function deletePost(id: number): Promise<AxiosResponse<Post>> {
  return axiosPost.delete(`/${id}`);
}
