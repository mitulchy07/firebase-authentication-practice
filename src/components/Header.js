import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className='navbar bg-primary text-primary-content'>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          <h1>HasanChowdhuri</h1>
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          Home
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/login'>
          LogIn
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/register'>
          Register
        </Link>
        {user?.displayName && <span>Hello, {user.displayName} </span>}
      </div>
    </div>
  );
};

export default Header;
