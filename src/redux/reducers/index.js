import { combineReducers } from "redux"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import authReducer from "../reducers/auth.js"
import channelReducer from "../reducers/channel"

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	authReducer: authReducer,
	channelReducer: channelReducer,
})

export default rootReducer
