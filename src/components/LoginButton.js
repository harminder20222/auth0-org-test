import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({ redirectUri: 'https://harminder20222.github.io/auth0-org-test'  })}>Log In</button>;
};

export default LoginButton;