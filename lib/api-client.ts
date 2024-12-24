import { ApiError } from "@/types/api-error";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

async function post<T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig,
  returnRaw = false
): Promise<R | AxiosResponse<R>> {
  try {
    const response: AxiosResponse<R> = await apiClient.post<R>(
      url,
      data,
      config
    );

    if (returnRaw) {
      return response;
    }

    return response.data;
  } catch (error) {
    throw createApiError(error);
  }
}

async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.get<T>(url, config);

    return response.data;
  } catch (error) {
    throw createApiError(error);
  }
}

async function put<T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<R> {
  try {
    const response: AxiosResponse<R> = await apiClient.put<R>(
      url,
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw createApiError(error);
  }
}

async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.delete<T>(url, config);
    return response.data;
  } catch (error) {
    throw createApiError(error);
  }
}

function createApiError(error: any): ApiError {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    const statusCode = data.statusCode ?? 500;
    const message =
      data.message ||
      error.response?.statusText ||
      error.message ||
      "An unexpected error occurred";
    return new ApiError(message, statusCode, data);
  } else {
    return new ApiError("An unexpected error occurred", 500);
  }
}

export { get, post, put, del };
