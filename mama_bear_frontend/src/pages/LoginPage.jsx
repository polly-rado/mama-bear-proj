import React from 'react';
import '../styles/LoginPage.css';

function LogIn() {
    return (
        <div className="login-page">
            <h1>Log In</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;

