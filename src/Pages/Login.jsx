import React, { useContext } from 'react';
import loginAni from './LoginAni.json';
import Lottie from "lottie-react";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { ContextProvider } from '../Contexts/AuthContext';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { loggedUser } = useContext(ContextProvider)
    const navigate = useNavigate()
    const handleLogin = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Invalid Email Address')
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
            toast.error('Invalid Password')
            return;
        }
        const loggedUser1 = { email, password };
        console.log(loggedUser1)
        try {
            const { user } = await loggedUser(email, password)
            if (user) {
                toast.success('Login Successful')
                navigate('/')
            }
        }
        catch (error) {
            toast.error('Login Failed')
        }
    }
    return (
        <div>
            <Helmet>
            <title>ShareByte | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie className='h-[500px]' animationData={loginAni}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/register'} className="label-text-alt link link-hover">Dont have Account? Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning btn-outline">Login</button>
                            </div>
                            <p className='text-center text-xs'>-- OR  --</p>
                            <div className='flex justify-center items-center'>
                                <button className="btn btn-warning btn-outline btn-wide"> <FaGoogle /> Google Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;