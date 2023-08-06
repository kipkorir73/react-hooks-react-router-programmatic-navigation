import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/home">
          <Home isSignedIn={!!user} />
        </Route>
        {/* Add more routes if needed */}
      </Switch>
    </Router>
  );
}

export default App;
