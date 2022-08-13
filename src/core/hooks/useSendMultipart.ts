import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { useState } from 'react';
import {
  ErrorHandler,
  SuccessHandler,
  ValidationError,
  ValidationHandler,
} from '../ui/utils/types';
import constants from '../utils/constants';
import { logError } from '../utils/logger';

type CallApiArg = {
  headers?: AxiosRequestHeaders;
  onError?: ErrorHandler;
  onSuccess?: SuccessHandler;
  onValidationError?: ValidationHandler;
};

const useSendMultipart = () => {
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const callApi = async (
    endpoint: string,
    data: any,
    { headers, onError, onSuccess, onValidationError }: CallApiArg = {}
  ) => {
    setProgress(0);
    setSubmitting(true);
    try {
      const res = await axios.post(`${constants.apiUrl}/${endpoint}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          ...headers,
        },
        onUploadProgress: (progress) => {
          setProgress((progress.loaded * 100) / progress.total);
        },
      });

      if (onSuccess) onSuccess(res.data, res.status);
    } catch (e) {
      setProgress(0);
      const apiErr = e as AxiosError;
      logError(apiErr);
      if (
        apiErr.response &&
        apiErr.response?.status === 400 &&
        onValidationError
      ) {
        onValidationError(apiErr.response!.data as unknown as ValidationError);
      } else if (onError)
        onError(
          (apiErr.response as any)?.data?.message ||
            apiErr.message ||
            'Unknown Error occurred'
        );
    }
    setSubmitting(false);
  };

  return { callApi, submitting, progress };
};

export default useSendMultipart;
