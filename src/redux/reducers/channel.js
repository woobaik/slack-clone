import { SET_CURRENT_CHANNEL } from "../actions/actionTypes"

const initialChannelState = {
	currentChannel: null,
}
const channelReducer = (state = initialChannelState, action) => {
	switch (action.type) {
		case SET_CURRENT_CHANNEL:
			return {
				...state,
				currentChannel: action.payload,
			}

		default:
			return state
	}
}

export default channelReducer
