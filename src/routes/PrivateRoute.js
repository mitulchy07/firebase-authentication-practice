import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className='radial-progress text-primary' style={{ '--value': 95 }}>
        99%
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;
