import React from 'react';
import { Link } from 'react-router-dom';

const All_Toys_Cart = ({ allToy }) => {



    const { _id, photoUrl, ToyName, price, availableQuantity, rating, SellerName, detailsPage, sellerEmail } = allToy;
   
   
    return (
        <div>

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
                    <Link to={`/ToyDetails/${_id}`} className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default All_Toys_Cart;