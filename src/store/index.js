import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import rootReducer from "./root.reducer"

const store = __DEV__
  ? createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
  : createStore(rootReducer, {}, applyMiddleware(thunk))

export { store }
