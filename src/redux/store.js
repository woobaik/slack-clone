import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/index"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"
import firebase from "../firebase"

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store
