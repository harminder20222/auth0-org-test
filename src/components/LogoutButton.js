import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: 'https://harminder20222.github.io/auth0-org-test'  })}>
      Log Out
    </button>
  );
};

export default LogoutButton;