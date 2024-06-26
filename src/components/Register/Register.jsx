// src/RegisterForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Register = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let regObj = { firstName, lastName, emailAddress, password, confirmPassword }
        console.log(regObj)

        fetch('http://localhost:3000/api/v1/user', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regObj)
        }).then((res) => {
            toast.success("Register success")
            navigate('/Login')

        }).catch((err) => {
            toast.error("failed to register")
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label className="block text-gray-700" htmlFor="firstName">First Name</label>
                        <input
                            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                            type="text" value={firstName} onChange={e => setfirstName(e.target.value)} name='firstName' id='firstName'
                            
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label className="block text-gray-700" htmlFor="lastName">Last Name</label>
                        <input
                            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                            type="text" value={lastName} onChange={e => setlastName(e.target.value)} name='lastName'
                            
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block text-gray-700" htmlFor="emailAddress">Email</label>
                        <input
                            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                            type="email" value={emailAddress} onChange={e => setemailAddress(e.target.value)} name='emailAddress'
                            
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block text-gray-700" htmlFor="password">Password</label>
                        <input
                            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                            type="password" value={password} onChange={e => setPassword(e.target.value)} name='password'
                            
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label className="block text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                            type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}

                            name="confirmPassword"

                            
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default Register;
