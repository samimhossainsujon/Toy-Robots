import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navigation_Bar = () => {


    const { User, UserLogOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownHover = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        setIsDropdownOpen(false);
    };



    const webSiteName = <>
        <h1>Toy Robots</h1>
    </>


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToy'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>


        {/* 
       //===========================
       // user profile picture change and logout button set up
       //===========================
       */}

        <div>
            {User ? (
                <div className={`hover:dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`} onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownLeave}>
                    <label className="btn btn-ghost btn-circle avatar">
                        {User && (
                            <div className="w-24 rounded-full profiles__group">
                                <img src={User.photoURL} alt="" />
                            </div>
                        )}
                    </label>
                    {User?.email && isDropdownOpen && (
                        <div className="dropdown-content">
                            <button className='btn btn-outline btn-secondary' onClick={UserLogOut}>Log Out</button>
                        </div>
                    )}
                </div>
            ) : (
                <li>
                    <button className='btn btn-outline btn-secondary'>
                        <Link to="/login">Login</Link>
                    </button>
                </li>
            )}
        </div>



    </>


    return (
        <div>
            <div className="navbar bg-slate-400 mb-5 justify-start">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >{navItems}
                        </ul>
                    </div>
                    <Link to="/"
                        className=" btn-ghost normal-case text-lg font-bold text-black"
                    >{webSiteName}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navigation_Bar;