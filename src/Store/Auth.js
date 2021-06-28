import React, { useState } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialTOken = localStorage.getItem('token');
  const [token, setToken] = useState(initialTOken);
  const userIsLoggedIn = token ? true : false;

  const loginHandler = (token) => {
    console.log('token Error');
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

//export default AuthContext;
