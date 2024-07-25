import React from 'react';

const Register = () => {
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        const newUser = {name,email,password,photo};
        console.log(newUser)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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