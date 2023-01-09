import * as types from "./mutation-types";
import * as storage from "../storage";
import { api } from "../../../services/api";

export const ActionDoLogin = ({ dispatch }, payload) => {
  return api.post("auth/login", payload).then((res) => {
    dispatch("ActionSetUser", res.data);
    dispatch("ActionSetToken", res.data.accessToken);
    dispatch("ActionSetUserAdmin", res.data);
  });
};
export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  const token = storage.getLocalToken();

  if (!token) {
    return Promise.reject(new Error("Token Inválido"));
  }

  dispatch("ActionSetToken", token);
};
export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload);
};

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload);
  storage.setHeaderToken(payload);
  commit(types.SET_TOKEN, payload);
};
export const ActionSetUserAdmin = ({ commit }, payload) => {
  commit(types.SET_ADMIN, payload);
};
