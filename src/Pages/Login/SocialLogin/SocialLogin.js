import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className="text-danger">Error: {error.message}</p>
            </div>
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div className="text-center">
                <button className="btn btn-primary w-50 mb-4" onClick={() => signInWithGoogle()}>
                    <img src="https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png" style={{ width: "20px", marginRight: "5px" }} alt="" />
                    Google Sign In</button>
            </div>

        </div>
    );
};

export default SocialLogin;