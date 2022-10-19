import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className='navbar bg-primary text-primary-content'>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          <h1>HasanChowdhuri</h1>
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          Home
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/orders'>
          Orders
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/login'>
          LogIn
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/register'>
          Register
        </Link>
        {user?.email && <span>Hello, {user?.email} </span>}
        {user?.email && (
          <button onClick={handleSignOut} className='btn btn-xs'>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
