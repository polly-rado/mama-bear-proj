import React from 'react';

const LoginPage = () => {
  return (
    <div id="HomePage">
      <h1>Log In</h1>
      <form>
        <input type="email" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
