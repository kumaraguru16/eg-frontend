/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// Create axios instance with default params
const axiosInstance = axios.create();

// Main api function
const api = (axios: any) => {
  // Wrapper functions around axios
  return {
    get: (url: string, config?: any) => axios.get(url, config),

    post: (url: string, body: any, config?: any) =>
      axios.post(url, body, config),

    patch: (url: string, body: any, config?: any) =>
      axios.patch(url, body, config),

    put: (url: string, body: any, config?: any) => axios.put(url, body, config),

    delete: (url: string, body: any, config = {}) =>
      axios.delete(url, { ...config, data: body }),
    configureInterceptors: () => {
      axios.interceptors.response.use((response: any) => {
        return {
          ...response.data,
        };
      });
    },
  };
};
// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance);
