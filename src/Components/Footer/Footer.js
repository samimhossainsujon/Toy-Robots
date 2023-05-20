import React from 'react';
import { BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGooglePlay, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div className='px-5 mx-5  mt-10 mb-10'>
            <footer className="footer footer-center p-10 bg-slate-500 text-black">
                <div>
                    <p className='text-5xl text-black'><FaRobot /></p>
                    <p className="font-bold">
                        Toy Robots  Ltd. <br />Providing reliable tech since 1992
                    </p>

                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 font-extrabold text-3xl">
                        <Link to='https://play.google.com/store/apps/developer?id=MY+RIGIL+SOFT'><FaGooglePlay /></Link>

                        <Link to='https://github.com/samimhossainsujon'><BsGithub /></Link>

                        <Link to='https://www.facebook.com/samimhossainsujon1'><BsFacebook /></Link>

                        <Link to='https://twitter.com/samimhossain_s'><BsTwitter /></Link>

                        <Link to='https://www.linkedin.com/in/samimhossainsujon/'><AiFillLinkedin /></Link>
                    </div>
                </div>

                <div>
                    <p>Copyright © 2023 - All right reserved by Toy Robots Ltd</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;