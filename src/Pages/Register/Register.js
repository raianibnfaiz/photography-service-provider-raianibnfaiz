import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassWord, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/')
    }
    const handleRegister = (event) => {
        event.preventDefault();
        if (password !== confirmPassWord) {
            setError("password did not match!")
            return;
        }
        if (password.length < 6) {
            setError("password length must be greater than 6 character!");
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className="form-container text-center w-75">
            <div>
                <h2 className="form-title ">SignUp</h2>
                <form onSubmit={handleRegister} action="">
                    <div className="input-group text-center ">
                        <label htmlFor="email" className="me-5">Email</label>
                        <input onBlur={handleEmail} type="email" required name="email" />
                    </div>
                    <div className="input-group text-center">
                        <label htmlFor="password" className="me-3">Password</label>
                        <input onBlur={handlePassword} type="password" required name="password" />
                    </div>
                    <div className="input-group text-center">
                        <label htmlFor="confirm-password" className="me-2 p-2">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" required name="confirm-password" />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit text-center' type="submit" value="SignUp" />
                </form>
                <p>Already have an account? <Link className="form-link" to="/login">Please Login</Link></p>
            </div>

        </div>
    );
};

export default Register;