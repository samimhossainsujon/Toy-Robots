import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';

const Registration = () => {

    const { CreateNewUser } = useContext(AuthContext);
    const [error, setError] = useState();
    const [Success, setSuccess] = useState();
    const [photoUrl, setPhotoUrl] = useState();

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, confirmPassword, photoUrl);

        if (password === confirmPassword) {
            // Passwords match, proceed with registration
            CreateNewUser(email, password)
                .then((result) => {
                    const createdUser = result.user;
                    console.log(createdUser);

                    // Set success message and show alert
                    setSuccess(Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Registered successfully",
                    }));


                    // Update user profile photo URL
                    updateProfile(createdUser, {
                        displayName: name,
                        photoURL: photoUrl,
                    });
                })
                .catch((error) => {
                    setError(Swal.fire({
                        icon: "error",
                        title: error,
                        text: "Please try again",
                    }));



                });
        } else {
            // Passwords do not match, handle the error
            alert("Passwords do not match, handle the error");
        }
    };





    return (
        <div>
            <form onSubmit={handelRegister}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-5">
                                Register Your Account!
                            </h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="input input-bordered"
                                        name="name"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Photo Url here"
                                        name="photoUrl"
                                        className="input input-bordered"
                                        value={photoUrl}
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                        required
                                    />


                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                        required
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


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Conform Password</span>
                                    </label>
                                    <input
                                        type="Password"
                                        placeholder="Conform Password"
                                        className="input input-bordered"
                                        name="confirmPassword"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register Now</button>
                                </div>

                                <Link
                                    to="/login"
                                    className="label-text-alt link link-hover text-blue-500 text-lg"
                                >
                                    already have an account login here.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Registration;