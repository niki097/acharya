import React, { useState } from 'react';
import './style.css';
import usa from '../assets/imgs/USA.svg';
import email from '../assets/imgs/dashicons_email-alt2.svg';
import loginImg from '../assets/imgs/email.svg';

function Login() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [enterNum, setEnterNum] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };
    const handleNumberChange = (e) => {
        setEnterNum(e.target.value);
    };

    const handlesendOtp=async(e)=>{
        e.preventDefault();
        if(enterNum===""){
            alert("enter your phone number")
        }
        if(enterNum.length!=10){
            alert("enter valid phone number")
        }
        else{
            alert("successful")
        }
        
        try {
            const response = await axios.post('http://localhost:3001/sendOTP', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error sending OTP');
        }
    }
    


    return (
        <>
            <div class="container login-div mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-0">
                    <div class="w-full h-full login-left relative">
                        <img src={loginImg} alt="" className='max-w-full h-auto' />
                    </div>
                    <div className="p-8 w-full register">
                        <h1>Hi Welcome!</h1>
                        <h5>Submit your Mobile number</h5>
                        <p className='text-center'><span>Log in or Sign up</span></p>
                        <div className="input_number">
                            <span><img src={usa} alt="" className='max-w-full h-auto' /></span>
                            <select className='bg-white mx-3' name="country" value={selectedCountry} onChange={handleCountryChange}>
                                <option value="US">+1</option>
                                <option value="ind">+91</option>
                                <option value="pak">+92</option>
                                <option value="aus">+3</option>
                            </select>
                            <input name='number' value={enterNum} onChange={handleNumberChange} className="text-md text-gray-900 dark:text-white" placeholder='Enter Mobile Number' type="text" />
                        </div>
                        <div className='send_otp_btn'>
                             <button onClick={handlesendOtp}>SEND OTP</button>
                            </div>
                        <p><span>or</span></p>
                        <div className='continue_with_email'><button className='flex'><span><img src={email} alt="" /></span>Continue with Email Id</button></div>
                        <p className='privacy text-xs font-white-400'>By signing up, you agree to our <a href="">Terms of Use</a>  and  Privacy Policy</p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Login;
