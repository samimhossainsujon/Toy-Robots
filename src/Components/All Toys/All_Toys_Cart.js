import React from 'react';

const All_Toys_Cart = ({ allToy }) => {

    const { _id, name, photoUrl, price, rating, detailsPage } = allToy;
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoUrl} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{detailsPage}</p>
                    
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default All_Toys_Cart;