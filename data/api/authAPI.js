import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Utility methods to perform HTTP methods and extract response
 */
const api = {
  get: async (url, config) => {
    try {
      const response = await instance.get(url, { ...config });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (url, data = {}, config) => {
    try {
      const response = await instance.post(url, data, { ...config });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  put: async (url, data = {}, config) => {
    try {
      const response = await instance.put(url, data, { ...config });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (url, data = {}, config) => {
    try {
      const response = await instance.delete(url, {
        headers: { ...config },
        data,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
