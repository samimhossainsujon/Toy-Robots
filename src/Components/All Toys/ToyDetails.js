import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { SiGmail } from 'react-icons/si';
import Rating from 'react-rating-stars-component';




const ToyDetails = () => {
    const ToyDetail = useLoaderData();
    const { _id, photoUrl, ToyName, price, availableQuantity, rating: originalRating,
        SellerName, detailsPage, sellerEmail } = ToyDetail;
    console.log(ToyDetail);

    const rating = 4;
    const ratingString = rating.toString();

    return (
        <div>
            <div>
                <div className="w-full flex justify-center mb-5">
                    <img src={photoUrl} alt='' />

                </div>
                <div className='px-14'>
                    <h1 className='text-center font-extrabold text-black text-2xl'>Name: {ToyName}</h1>
                    <h1>SellerName: <span className='font-extrabold text-black text-xl'> {SellerName}</span></h1>
                    <h1 className='flex mx-auto items-center gap-5'>
                        <samp className='text-black text-xl'><SiGmail /></samp>
                        <span className='font-extrabold text-emerald-800 text-xl'>
                            {sellerEmail}</span>
                    </h1>
                    <h1>ratingString: <span className='font-extrabold text-black text-xl'> {ratingString}</span></h1>
                    <h1>Available Quantity: <span className='font-extrabold text-black text-xl'> {availableQuantity}</span></h1>

                    SiGmail

                    <h1 className='mt-5'> <span className='font-extrabold text-black text-xl'>Toy Details:</span> {detailsPage}</h1>
                </div>


                <div className='flex items-center px-14'>
                    <h1 className='font-bold text-black mr-2'>Rating </h1>
                    <Rating
                        className='text-2xl' 
                        value={Math.round(parseFloat(ratingString) || 0)}
                        edit={false}
                    />
                   
                    <span className='ms-2 text-lg text-black font-extrabold'>
                        {ratingString}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;