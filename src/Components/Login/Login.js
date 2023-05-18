import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { UserLogin, UserGoogleLogin } = useContext(AuthContext);
    const [error, setError] = useState();
    const [Success, setSuccess] = useState();

    const UserHandleGoogleLogin = () => {
        UserGoogleLogin();
        console.log(UserGoogleLogin);
    };

    const HandleUserLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        console.log(email, password);


        UserLogin(email, password)
            .then((result) => {
                const loggedUser = result.user;
                setSuccess(Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Registered successfully",
                }));

            })
            .catch((error) => {
                setError(Swal.fire({
                    icon: "error",
                    title: error,
                    text: "Please try again",
                }));
            });
    };






    return (
        <div>
            <form onSubmit={HandleUserLogin}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        name="password"
                                        required
                                    />
                                </div>

                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
                                </label>

                                <div className="form-control mt-6 mb-5">
                                    <button type="submit" className="btn btn-outline btn-secondary">
                                        Log in
                                    </button>
                                </div>

                                <div className="text-center text-5xl">
                                    <button
                                        onClick={UserHandleGoogleLogin}
                                        className="btn btn-circle btn-outline btn-secondary"
                                    >
                                        <FcGoogle />
                                    </button>
                                </div>

                                <Link
                                    to="/register"
                                    className="label-text-alt link link-hover text-blue-500 text-lg"
                                >
                                    Are you a new member? Register here
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
