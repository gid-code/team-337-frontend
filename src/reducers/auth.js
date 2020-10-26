import {
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	USER_LOADING,
	USER_LOADED,
} from "../actions/types";

const initialState = {
	isAuthenticated: false,
	isLoading: false,
	user: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			};

		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			};

		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			// localStorage.setItem('token',action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
			};

		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				token: null,
				user: null,
			};

		default:
			return state;
	}
}
