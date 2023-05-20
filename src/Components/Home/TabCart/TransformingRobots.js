import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import {FaRegStar, FaStar } from 'react-icons/fa';

const TransformingRobots = ({ ReactTab }) => {
    const { _id, photoUrl, ToyName, price, availableQuantity, rating: originalRating,
        SellerName, detailsPage, sellerEmail } = ReactTab;
    const rating = 4;
    const ratingString = rating.toString();

    return (
        <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className="card w-full bg-base-100 shadow-2xl border-4 border-indigo-600">
                <figure className="">
                    <img src={photoUrl} alt="Shoes" className="rounded-2xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ToyName}</h2>
                    <div className=' flex gap-12'>
                        <p>price: {price}</p>
                        <p>availableQuantity:{availableQuantity}</p>
                    </div>

                    <div className='flex gap-10'>
                        <div className=" text-center position-absolute bottom-0 end-50 mb-3 items-center">
                            <Rating
                                readonly
                                className="text-success"
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar> </FaStar>}
                                fullSymbol={<FaStar> </FaStar>}
                            />
                            <span className='ms-2 text-lg text-black font-extrabold'>
                                {ratingString}
                            </span>
                        </div>


                        <div>
                            <Link to={`/ToyDetails/${_id}`} className="card-actions">
                                <button className="btn btn-outline btn-secondary">View Details</button>
                            </Link>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
}

export default TransformingRobots;