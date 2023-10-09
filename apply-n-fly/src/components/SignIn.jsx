import React from 'react';
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = 'your_client_id_here';

const SignIn = () => {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // TODO: handle successful login
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // TODO: handle failed login
  };

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        responseType='code,token'
      />
    </div>
  );
};

export default SignIn;
