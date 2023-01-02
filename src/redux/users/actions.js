import { types } from "./type";

export function register(user) {
    return {
      type: types.REGISTER,
      payload: user,
    };
  }
  