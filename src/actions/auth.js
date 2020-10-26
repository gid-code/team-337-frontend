import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_SUCCESS } from "./types";

//register user
export const register = (username, password, email) => (dispatch) => {
	//request body
	const body = {
		username,
		password,
		email,
	};

	dispatch({
		type: REGISTER_SUCCESS,
		payload: body,
	});
};

//login user
export const login = (username, password) => (dispatch) => {
	//request body
	const body = {
		username,
		password,
	};

	dispatch({
		type: LOGIN_SUCCESS,
		payload: body,
	});
};

//logout user
export const logout = () => (dispatch, getState) => {
	dispatch({
		type: LOGOUT_SUCCESS,
	});
};
