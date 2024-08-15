import React from 'react';
import '../styles/CreateAccountPage.css';

function CreateAccountPage() {
  return (
    <div className="create-account-page">
      <h1>Create Account</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
