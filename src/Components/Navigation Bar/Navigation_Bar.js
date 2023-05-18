import React from 'react';
import { Link } from 'react-router-dom';

const Navigation_Bar = () => {


    // const { user, LogOut } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     LogOut()
    //         .then(() => {
    //             // console.log("Logged out successfully");
    //         })
    //         .catch((error) => {

    //         });
    // };

    const webSiteName = <>
        <h1>Toy Robots</h1>
    </>


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToy'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/login'>login</Link></li>

        {/* {user?.email ? <>           
            <li><button onClick={handelLogOut}>Log Out</button></li>
            : <li><Link to='/login'>login</Link></li>
        </>
        } */}




        {/* <label className="btn btn-ghost btn-circle avatar"> */}
        {/* {user && (
            <div className="w-24 rounded-full profiles__group">
              <img src={user?.photoURL} alt='' />
              <p>{user?.displayName}</p>
             <p>{user?.email}</p>
              </div>
                   {/* )} */}
        {/* </label> */}


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