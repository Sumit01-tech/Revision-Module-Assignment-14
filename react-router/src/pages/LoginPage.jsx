import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/dashboard');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginPage;
