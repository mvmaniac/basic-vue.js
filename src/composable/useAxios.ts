import { isRef, ref, unref, watchEffect } from 'vue';

import axios from 'axios';

import type { AxiosOption } from '@/shared/types';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { MaybeRef, Ref } from 'vue';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
});

const defaultConfig: AxiosRequestConfig<unknown> = {
  method: 'GET',
  params: {},
};

const defaultOptions: AxiosOption = {
  immediate: true,
};

interface UseAxiosReturn<D = unknown, P = MaybeRef<unknown>> {
  response: Ref<AxiosResponse<D>>;
  data: Ref<D>;
  error: Ref<Error | null>;
  loading: Ref<boolean>;
  execute: (body?: P) => void;
}

export const useAxios = <D = unknown, P = MaybeRef<unknown>>(
  url: MaybeRef<string>,
  config = defaultConfig,
  options = defaultOptions,
): UseAxiosReturn<D, P> => {
  const response = ref<AxiosResponse<D>>({} as AxiosResponse<D>);
  const data = ref<D>({} as D);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  const { onSuccess, onError, immediate }: AxiosOption = {
    ...defaultOptions,
    ...options,
  };

  const params: MaybeRef<unknown> = config.params;

  const handleSuccess = (res: AxiosResponse<D>) => {
    response.value = res;
    data.value = res.data;

    if (onSuccess) {
      onSuccess(res);
    }
  };

  const handleCatch = (err: Error) => {
    data.value = null;
    error.value = err;
    if (onError) {
      onError(err);
    }
  };

  const execute = (body = {} as P) => {
    error.value = null;
    loading.value = true;

    axiosInstance<D>(unref(url), {
      ...defaultConfig,
      ...config,
      params: unref(params),
      data: body,
    })
      .then(handleSuccess)
      .catch(handleCatch)
      .finally(() => {
        loading.value = false;
      });
  };

  if (isRef(params) || isRef(url)) {
    watchEffect(() => execute());
  } else if (immediate) {
    execute();
  }

  return {
    response: response as Ref<AxiosResponse<D>>,
    data: data as Ref<D>,
    error,
    loading,
    execute,
  };
};
