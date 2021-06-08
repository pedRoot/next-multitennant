import { fetchWrapper } from "../helpers";
import { useConfigContext } from "contexts/configContext";

const baseUrl = "https://jsonplaceholder.typicode.com/users/";


const getAll = () => {
  return fetchWrapper.get(`${baseUrl}`);
}

const getById = (id) => {
  return fetchWrapper.get(`${baseUrl}${id}`);
}

const create = (params) => {
  return fetchWrapper.post(`${baseUrl}`, params);
}

const update = (id, params) => {
  return fetchWrapper.put(`${baseUrl}${id}`, params);
}

const remove = (id) => {
  return fetchWrapper.delete(`${baseUrl}${id}`);
}

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: remove
};