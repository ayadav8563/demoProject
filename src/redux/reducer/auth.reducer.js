import {
    signin,
    signin_user,
    signin_error,
    signout,
    signout_success,
    signout_error,
    register,
    register_user,
    register_error,
  } from "../constants/common"
  
const initial_state = {
    loading: false,
    email: null,
    error: "",
    loggedIn: false,
  }
  
  const reducer = (state = initial_state, { type, payload }) => {
    switch (type) {
      case signin:
        return {
          ...state,
          loading: true,
        }
      case signin_user:
        return {
          loading: false,
          email: payload?.user?.email,
          loggedIn: payload.success,
          error: "",
        }
      case signin_error:
        return {
          ...initial_state,
          loading: false,
          error: payload,
        }
      case signout:
        return {
          ...state,
          loading: true,
        }
      case signout_success:
        return initial_state
      case signout_error:
        return {
          loading: false,
          error: payload,
        }
        case register:
        return {
          ...state,
          loading: true,
        }
      case register_user:
        return {
          loading: false,
          email: payload?.user?.email,
          loggedIn: payload.success,
          error: "",
        }
      case register_error:
        return {
          loading: false,
          error: payload,
        }
  
      default:
        return state
    }
  }
  
  export default reducer
  