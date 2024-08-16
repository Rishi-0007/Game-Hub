// Description: This file contains the http service class which is used to make http requests to the server.
import apiClient from "./api-client";

interface entity {
  id: number;
}

class httpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const request = apiClient.get<T>(this.endpoint, {
      signal: new AbortController().signal,
    });
    return { request, cancel: () => new AbortController().abort() };
  }

  delete<T extends entity>(entity: T) {
    return apiClient.delete(this.endpoint + "/" + entity.id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends entity>(entity: T, modifyU: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, modifyU);
  }
}

const createHttpService = (endpoint: string) => {
  return new httpService(endpoint);
};

export default createHttpService;
