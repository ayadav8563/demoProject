import {
    signin,
    signin_user,
    signin_error,
    signout,
    signout_success,
    signout_error,
    register_user,
    register_error,
    register,
  } from "../constants/common"
  import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
  const auth = getAuth();

  export const signInUser = () => {
    return {
      type: signin,
    }
  }
  
  export const signeInUserSuccess = (payload) => {
    return {
      type: signin_user,
      payload,
    }
  }
  
  export const signeInUserError = (error) => {
    return {
      type: signin_error,
      payload: error,
    }
  }
  
  export const signOutUser = () => {
    return {
      type: signout,
    }
  }
  
  export const signOutUserSuccess = (payload) => {
    return {
      type: signout_success,
      payload,
    }
  }
  
  export const signOutUserError = (error) => {
    return {
      type: signout_error,
      payload: error,
    }
  }
  export const registerUser = () => {
    return {
      type: register,
    }
  }
  
  export const registerUserSuccess = (payload) => {
    return {
      type: register_user,
      payload,
    }
  }
  
  export const registerUserError = (error) => {
    return {
      type: register_error,
      payload: error,
    }
  }
  
  export const userSignInRequest = (data, success, failed) => {
    return (dispatch) => {
      dispatch(signInUser())
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          dispatch(signeInUserSuccess(response))
          success?.(response)
        })
        .catch((error) => {
          dispatch(signeInUserError(error))
          failed?.(error)
          alert(error.message);
          console.log("Error: ", error.message)
        })
    }
  }
  
  export const userSignOutRequest = (data, success, failed) => {
    return (dispatch) => {
      dispatch(signOutUser())
      signOut(auth)
      .then((response) => {
          dispatch(signOutUserSuccess(response))
          success?.(response)
        })
        .catch((error) => {
          dispatch(signOutUserError(error))
          failed?.(error)
          alert(error.message)
          console.log("Error: ", error)
        })
    }
  } 
  
  export const userRegisterRequest = (data, success, failed) => {
    return (dispatch) => {
      dispatch(registerUser())
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          dispatch(registerUserSuccess(response))
          success?.(response)
        })
        .catch((error) => {
          dispatch(registerUserError(error))
          failed?.(error)
          alert(error.message)
          console.log("Error: ", error)
        })
    }
  }
  