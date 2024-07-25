import React from 'react';
import loginAni from './LoginAni.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       <Lottie className='h-[500px]' animationData={loginAni}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/register'} className="label-text-alt link link-hover">Already Have Account? Register</Link>
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