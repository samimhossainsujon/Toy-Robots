import React from 'react';
import { Link } from 'react-router-dom';
// import Rating from 'react-rating-stars-component';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const All_Toys_Cart = ({ allToy }) => {



    const { _id, photoUrl, ToyName, price, availableQuantity, rating: originalRating,
        SellerName, detailsPage, sellerEmail } = allToy;
    console.log(allToy);

    const rating = 4;
    const ratingString = rating.toString();
    return (
        <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className="overflow-x-auto w-full">
               
            </div>

        </div>
    );
};

export default All_Toys_Cart;