//-----------------------------------------------------------------------------
// src/store/actions/auth.js
//-----------------------------------------------------------------------------
import { TRY_AUTH } from './actionTypes'

export const tryAuth = (authData) => {
  return {
    type:     TRY_AUTH,
    authData: authData,
  }
}
