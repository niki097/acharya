import React, { useState } from 'react';
import './style.css';
import email from '../assets/imgs/dashicons_email-alt2.svg';
import loginImg from '../assets/imgs/email.svg';
import Layout from './Layout/Layout';

function Register({ showModal, setShowModal }) {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    // handle form submission
    const handleUserDetails = (e) => {
        e.preventDefault();

        // validation
        if (formData.name.trim() === "" || formData.phoneNumber.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "" || formData.confirmPassword.trim() === "") {
            alert("Please fill in all fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("registered Successful!");
        console.log(formData)
        // Clear form data after successful submission
        setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: ""
        });

        // Close the modal after successful registration
        setShowModal(false);
    }

    return (
        <>
            <form action="" className='register_form'>
                <div className=" login-div mx-auto my-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-0">
                        <div className="w-full h-full login-left relative">
                            <img src={loginImg} alt="" className='max-w-full h-auto' />
                        </div>
                        <div className="p-8 register">
                            <h1>Hi Welcome!</h1>
                            <h5>Submit your Basic Details</h5>
                            <p className='text-center'><span>Log in or Sign up</span></p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 sm:col-span-1 input-number">
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="text-md text-gray-900 dark:text-white w-full rounded-lg p-2"
                                        placeholder="Enter Your Name"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 sm:col-span-1">
                                    <input
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="text-md text-gray-900 dark:text-white w-full rounded-lg p-2"
                                        placeholder="Enter Mobile Number"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 sm:col-span-1">
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="text-md text-gray-900 dark:text-white w-full rounded-lg p-2"
                                        placeholder="Enter Email Address"
                                        type="email"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 sm:col-span-1">
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="text-md text-gray-900 dark:text-white w-full rounded-lg p-2"
                                        placeholder="Enter Password"
                                        type="password"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 sm:col-span-1">
                                    <input
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="text-md text-gray-900 dark:text-white w-full rounded-lg p-2"
                                        placeholder="Confirm Password"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div className='send_otp_btn'>
                                <button onClick={handleUserDetails}>Sign Up</button>
                            </div>
                            <p><span>or</span></p>
                            <div className='continue_with_email'><button className='flex'><span><img src={email} alt="" /></span>Already you have an account? Login </button></div>
                            <p className='privacy text-xs font-white-400'>By signing up, you agree to our <a href="">Terms of Use</a>  and  Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;
