import React, { useState } from 'react';
import './style.css';
import usa from '../assets/imgs/USA.svg';
import email from '../assets/imgs/dashicons_email-alt2.svg';

function Register() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    return (
        <>
            <div className="register">
                <h1>Hi Welcome!</h1>
                <h5>Submit your Mobile number</h5>
                <p className='text-center'><span>Log in or Sign up</span></p>
                <div className="input_number">
                    <span><img src={usa} alt="" /></span>
                    <select className='bg-white mx-3' name="country" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="US">+1</option>
                        <option value="ind">+91</option>
                        <option value="pak">+92</option>
                        <option value="aus">+3</option>
                    </select>
                    <input className="text-md text-gray-900 dark:text-white" placeholder='Enter Mobile Number' type="text" />
                </div>
                <div className='send_otp_btn'> <button>
                    SEND OTP
                </button></div>
                <p><span>or</span></p>
                <div className='continue_with_email'><button className='flex'><span><img src={email} alt="" /></span>Continue with Email Id</button></div>
                <p className='text-xs font-white-400'>By signing up, you agree to our <a href="">Terms of Use</a>  and  Privacy Policy</p>
            </div>
        </>
    );
}

export default Register;
