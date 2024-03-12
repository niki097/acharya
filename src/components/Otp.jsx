import React, { useState } from 'react';
import './style.css';
import usa from '../assets/imgs/USA.svg';
import mobile from '../assets/imgs/Vector.svg';
import otpImg from '../assets/imgs/otp.svg';


function Otp() {
    const [sentOtp, setSentOtp] = useState(null);

    const handleCountryChange = (e) => {
        setSentOtp(e.target.value);
    };

    return (
        <>
            <div class="container login-div mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-0">
                    <div class="w-full h-full login-left relative">
                        <img src={otpImg} alt="" className='max-w-full h-auto' />
                    </div>
                    <div className="p-8 w-full register">
                        <h1>OTP Verification</h1>
                        <h5>An 4 digit code has been sent to your number</h5>
                        <p className='text-center'><span>Log in or Sign up</span></p>
                        <div class="flex justify-center items-center mt-10">
                            <input type="text" class="w-12 h-12 text-center border border-gray-300 rounded mr-4" maxlength="1" />
                            <input type="text" class="w-12 h-12 text-center border border-gray-300 rounded mr-4" maxlength="1" />
                            <input type="text" class="w-12 h-12 text-center border border-gray-300 rounded mr-4" maxlength="1" />
                            <input type="text" class="w-12 h-12 text-center border border-gray-300 rounded" maxlength="1" />
                        </div>

                        <div className='send_otp_btn'> <button>
                            Verify OTP
                        </button></div>
                        <p>If you din't receive a code! Resend</p>
                        <div className='continue_with_email'><button className='flex'><span><img src={mobile} alt="" /></span>Change Mobile Number</button></div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Otp;
