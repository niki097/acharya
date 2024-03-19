import React from 'react'
import verificationImg from '../../assets/imgs/successImg.svg'
import vectorRight from '../../assets/imgs/Vector (1).svg'
import './verification.css'

function Verification() {
    return (
        <>
            <div className='container w-full aspect-auto flex justify-center items-center h-screen'>
                <div className="column-1 aspect-square m-5 verification bg-white rounded-lg  p-6">
                    <img className='w-full' src={verificationImg} alt="" />
                    <div className='verification-msg w-full grid justify-items-center'>
                        <img className='mb-2' src={vectorRight} alt="" />
                        <p className='p-2'>Mobile verification has successfully done</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification