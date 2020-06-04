import * as types from "./authActionTypes"

const initialSIgnupState = {
  loading: false,
  token: "",
  error: false,
  errResponse: "",
}

export function AuthReducer(state = initialSIgnupState, action) {
  switch (action.type) {
    case types.AUTH_START:
      return {
        ...state,
        loading: true,
      }

    case types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      }

    case types.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      }

    default:
      return state
  }
}