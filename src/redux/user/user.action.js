import  UserActionTypes  from './user.types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const SignInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload:error
});
export const emailSignInStart = emailAndPassword=> ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const cheackUserSeasion = () => ({
  type: UserActionTypes.CHECK_USER_SEASION
});

export const signOutStart = () => ({
  type:UserActionTypes.SIGN_OUT_START
})
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = error => ({
  type: UserActionTypes.signOutFailure,
  payload: error
})


