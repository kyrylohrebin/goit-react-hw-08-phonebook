export const getIsLoggedIn = state => Boolean(state.auth.token);
export const loading = state => state.auth.loading;
export const getUserName = state => state.auth.user.name;
export const error = state => state.auth.error;
