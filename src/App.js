import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';  // Update the import path based on your project structure
import Home from './pages/Home';  // Assuming you have a Home component
import Login from './pages/Login';  // Assuming you have a Login component
import About from './pages/About';  // Assuming you have an About component
import Register from './pages/Register';  // Assuming you have a Register component
import Professor from './pages/Professor';
import Student from './pages/Student';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/student" component={Student} />
        <Route path="/professor" component={Professor} />
      </Switch>
    </Router>
  );
}

export default App;