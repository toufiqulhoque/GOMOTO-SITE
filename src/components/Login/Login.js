import React from 'react';
import useAuth from '../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import useFirebase from '../Hooks/useFirebase';
import './Login.css'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { loginWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <div className='login-form '>
                <h3>Login With Google</h3>
                <button className='px-5 mt-2 py-2' onClick={handleGoogleLogin}><FcGoogle /><span className='m-3'>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default Login;