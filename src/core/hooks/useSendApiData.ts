import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { apiInstance } from '../services/api';
import {
  ErrorHandler,
  SuccessHandler,
  ValidationError,
  ValidationHandler,
} from '../ui/utils/types';
import constants from '../utils/constants';
import { logError } from '../utils/logger';

type CallApiArg = {
  endpoint: string;
  data: any;
  headers?: Record<string, any>;
  onValidationError?: ValidationHandler;
  onError?: ErrorHandler;
  onSuccess?: SuccessHandler;
};

export const useSendApiData = () => {
  const [submitting, setSubmitting] = useState(false);

  const callApi = async ({
    endpoint,
    data,
    headers = {},
    onValidationError,
    onError,
    onSuccess,
  }: CallApiArg) => {
    setSubmitting(true);
    try {
      const requestHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      };

      const response = await apiInstance.post(
        `${constants.apiUrl}/${endpoint}`,
        data,
        {
          headers: requestHeaders,
        }
      );

      if (onSuccess) onSuccess(response.data, response.status);
    } catch (err) {
      const apiErr = err as AxiosError;

      if (
        apiErr.response &&
        apiErr.response?.status === 400 &&
        onValidationError
      ) {
        onValidationError(apiErr.response!.data as unknown as ValidationError);
      } else {
        if (onError)
          onError(
            (apiErr?.response as any)?.data?.message ||
              apiErr.message ||
              'Unknown Error occurred'
          );
      }
      logError('Api Error', apiErr);
      logError('Res Data', apiErr.response?.data);
    }
    setSubmitting(false);
  };

  return { callApi, submitting };
};
