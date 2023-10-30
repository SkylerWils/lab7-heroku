import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [season, setSeason] = useState('default');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [error, setError] = useState('');

  const validateInputs = () => {
    var nameRegex = /^[A-Za-z -]+$/i;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@$%&*?])[A-Za-z\d!@$%&*?]{8,}$/;

    if (firstName.match(nameRegex)) {
      if (lastName.match(nameRegex)) {
        if (email.match(emailRegex)) {
          if (!(season === 'default')) {
            if (password.match(passwordRegex)) {
              setIsFormSubmitted(true);
              setError('');
            } else {
              setError('Password doesn\'t match Regex pattern.');
            }
          } else {
            setError('Please select a season');
          }
        } else {
          setError('Email doesn\'t match Regex pattern.');
        }
      } else {
        setError('Last name doesn\'t match Regex pattern.');
      }
    } else {
      setError('First name doesn\'t match Regex pattern.');
    }
  };

  const renderForm = () => (
    <form>
      <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <input type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <select value={season} onChange={(e) => setSeason(e.target.value)}>
        <option value="default">Select a season</option>
        <option value="spring">Spring</option>
        <option value="fall">Fall</option>
        <option value="winter">Winter</option>
      </select>
      <button type="button" onClick={validateInputs}>Submit</button>
    </form>
  );

  const renderUserAccount = () => (
    <div>
      <h2>User Account Details:</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Season: {season}</p>
      <button onClick={() => setShowDashboard(true)}>Go to Dashboard</button>
    </div>
  );

  const renderDashboard = () => (
    <div>
      <h2>Dashboard</h2>
      <p>DUMMY DATA DUMMY DATA DUMMY DATA</p>
    </div>
  );

  return (
    <div className="App">
      {isFormSubmitted ? (showDashboard ? renderDashboard() : renderUserAccount()) : renderForm()}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;