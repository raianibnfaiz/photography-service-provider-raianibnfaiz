import React, { useState } from 'react';
import './Login.css';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/')
    }
    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title text-center mt-3">Login</h2>
                <form onSubmit={handleLogin} action="">
                    <div className="input-group text-center">
                        <label htmlFor="email" className="m-3">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" />
                    </div>
                    <div className="input-group text-center" >
                        <label htmlFor="password" >Password</label>
                        <input onBlur={handlePassword} className="m-1" type="password" name="password" />
                    </div>

                    <div className="text-center">
                        <input className='form-submit' type="submit" value="Login" />
                    </div>
                </form>
                <div className="text-center">
                    <p>New to this Ema-John? <Link className="form-link " to="/signup">Create new account</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Login;