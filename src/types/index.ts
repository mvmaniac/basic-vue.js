import type { AxiosResponse } from 'axios';

export { Dayjs } from '@/plugins/symbol';

export interface Person {
  name: string;
  say?: () => void;
}

export interface Post {
  id?: number;
  title: string;
  content: string;
  createdAt?: string | Date | number;
}

export interface SearchParams {
  _sort: string;
  _order: string;
  _page: number;
  _limit: number;
  title_like: string;
}

export interface Alert {
  message: string;
  type?: string;
}

export interface AxiosOption {
  immediate: boolean;
  onSuccess?: (response: AxiosResponse) => void;
  onError?: (err: Error) => void;
}
