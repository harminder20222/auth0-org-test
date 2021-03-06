import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';
import Quiz from './components/Quiz';

function App() {
  const { isLoading, isAuthenticated , user, loginWithRedirect } = useAuth0();

  console.log(user);
  console.log(isAuthenticated);

  const url = window.location.href;
  const inviteMatches = url.match(/invitation=([^&]+)/);
  const orgMatches = url.match(/organization=([^&]+)/);

  console.log(inviteMatches);
  console.log(orgMatches);
  console.log(url);
  if (inviteMatches && orgMatches) {
    loginWithRedirect({
      organization: orgMatches[1],
      invitation: inviteMatches[1],
    });
  }
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="title">
          <span>What type of coder are you?</span>
          <p style={{ fontSize: "1.5rem" }}>Login to take the quiz.</p>
          <div className="glass-div" style={{ maxWidth: "12rem" }}>
            <LoginButton />
          </div>
        </div>
      ) :
        <div>
          <div className="glass-div" style={{ maxWidth: "12rem", marginBottom: "2rem" }}>
            <LogoutButton />
          </div>
          {/* <User /> */}
          {/* <Quiz /> */}
        </div>}
    </div>
  );
}

export default App;
