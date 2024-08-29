import axios, { AxiosRequestConfig } from "axios";

export interface fetchResType<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "145bc56c9f494d9a96b487152be324dc",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchResType<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
