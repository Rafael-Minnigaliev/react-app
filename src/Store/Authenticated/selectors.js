export const authenticatedSelector = (state) => state.authenticated.authenticated;

export const emailSelector = (state) => state.authenticated.email;

export const passwordSelector = (state) => state.authenticated.password;

export const errorSelector = (state) => state.authenticated.error;

export const uidSelector = (state) => state.authenticated.uid;
