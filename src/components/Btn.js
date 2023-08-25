import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Btn = (props) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
 

  return (
    <>
    <div className='ml-4 mr-4'>
      {
        isAuthenticated && <p>
          {user.name}
        </p>
      }
    </div>
     {
      isAuthenticated ? (
        <div >
        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      </button>

      

      </div>
      ):(
        <div >
          <button className='mr-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )
     }
    </>
  );
}

export default Btn;
