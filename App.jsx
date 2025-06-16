import React, {useState } from 'react';
import './App.css'
import Dashboard from './Dashboard';
import Login from './Login';
import accounts from './data/accounts';

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (userId, pin) => {
    const account = accounts[userId];
    if (account && account.pin === pin) {
      setUser({ ...account, id: userId });
    } else {
      alert("Invalid User Credentials.");
    }
  };

  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      { user ? (
        <Dashboard user={user} onlogout={handleLogout} /> )
        : 
        ( <Login onLogin={handleLogin} /> )
      }
    </div>
  )
}

export default App
