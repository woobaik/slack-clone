import { SIGNUP_ERROR, SIGNUP_SUCCESS } from "./actionTypes"
import firebase from "../../firebase"
export const signUpUser = (email, password) => async (dispatch) => {
	try {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(
				dispatch({
					type: SIGNUP_SUCCESS,
					payload: "Your Account was successfully created!",
				})
			)
			.catch((error) => {
				dispatch({
					type: SIGNUP_ERROR,
					payload: error,
				})
			})
	} catch (error) {
		return { type: SIGNUP_ERROR, payload: error }
	}
}
