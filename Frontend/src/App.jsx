import React, { useState } from 'react';
import SignUpForm from '../src/Components/SignUpForm';
import LoginForm from '../src/Components/LoginForm';

function App() {
  // Manage form toggle state
  const [isLogin, setIsLogin] = useState(false);

  // Function to toggle the form
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <SignUpForm toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
