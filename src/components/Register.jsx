import React, { useState } from 'react';
import './style.css';
import usa from '../assets/imgs/USA.svg';

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
                    <select name="country" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="US">+1</option>
                        <option value="ind">+91</option>
                        <option value="pak">+92</option>
                        <option value="aus">+3</option>
                    </select>
                    <input placeholder='Enter Mobile Number' type="text" />
                </div>
                <button>
                    SEND OTP
                </button>
                <p><span>or</span></p>
                <button><span><img src="" alt="" /></span>Continue with Email Id</button>
                <p className=''>By signing up, you agree to our <a href="">Terms of Use</a>  and  Privacy Policy</p>
            </div>
        </>
    );
}

export default Register;
