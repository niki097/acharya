import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/JewelsbyVSB-white.png'
import { useLanguage } from '../../LanguageContext/LanguageContext';
import { LANGUAGES } from '../../constants/language';


function Navbar() {
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };
    return (
        <>
            <div className="px-6 w-full navbar bg-base-100 shadow-md hover:shadow-lg focus:shadow-xl sticky top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/chatwithastrologer'>Chat With Astrologer</Link></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><Link to='/talkwithastrologer'>Talk With Astrologer</Link></li>
                        </ul>
                    </div>
                    <Link className='className="btn btn-ghost text-xl' to='/'>Acharya</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/chatwithastrologer'>Chat With Astrologer</Link></li>
                        <li>
                            <details>
                                <summary>Horoscope</summary>
                                <ul className="p-2 z-10">
                                    <li><Link to='/horoscope2024'>Horoscope 2024</Link></li>
                                    <li><Link to='/todayshoroscope'>Today's Horoscope</Link></li>
                                    <li><Link to='/weeklyhoroscope'>Weekly Horoscope</Link></li>
                                    <li><Link to='/Monthlyhoroscope'>Monthly Horoscope</Link></li>
                                    <li><Link to='/yearlyhoroscope'>Yearly Horoscope</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to='/talkwithastrologer'>Talk With Astrologer</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <select defaultValue={"es"}>
                        {LANGUAGES.map(({ code, label }) => (
                            <option key={code} value={code}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <Link to='/signup' className="">login/signup</Link>
                </div>
            </div>

        </>
    )
}

export default Navbar