import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ContextProvider } from '../Contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createNewUser } = useContext(ContextProvider)
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        {
            toast.error('Invalid Email Address')
            return;
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password))
        {
            toast.error('Invalid Password')
            return;
        }
        if(!name)
        {
            toast.error('Name must be provided')
            return;
        }
        if(!photo)
        {
            toast.error('Photo URL must be provided')
            return;
        }
        try {
            const { user } = await createNewUser(email, password)
            if (user) {
                await updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                toast.success('User created successfully')
                form.reset();
                 navigate('/login')
            }
            else {
                toast.error('Failed to create user')
            }
        }
        catch (error) {
            toast.error('Oops! Something went wrong for creating user')
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
             <Helmet>
                <title>ShareByte | Registration</title>
             </Helmet>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            className="input input-bordered w-full"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"

                        />
                    </div>
                    <label className="label">
                        <Link to={'/login'} className="label-text-alt link link-hover">Already Have Account? Login</Link>
                    </label>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;