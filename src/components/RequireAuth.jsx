import React from 'react';
import Connect from './Connect';

const RequireAuth = ({ children, fallbackMessage }) => {
  return <>{children}</>;
};

export default RequireAuth;
