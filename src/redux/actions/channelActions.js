import { SET_CURRENT_CHANNEL } from "./actionTypes"

export const setCurrentChannel = (channel) => {
	return {
		type: SET_CURRENT_CHANNEL,
		payload: channel,
	}
}
