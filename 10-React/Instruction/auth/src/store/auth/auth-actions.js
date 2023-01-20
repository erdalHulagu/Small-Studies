import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types";

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFail = () => ({ type: LOGIN_FAIL });
export const logout = () => ({ type: LOGOUT });
