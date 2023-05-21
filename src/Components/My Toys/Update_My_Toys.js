import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitleSetup from '../TitleSetup/TitleSetup';

const Update_My_Toys = () => {

    useTitleSetup('Update My Toy' )
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const updateMyToys = useLoaderData();

    const [data, setdata] = useState(updateMyToys);
    

    useEffect(() => {
        setdata(updateMyToys)
    },[])

    const {
        _id,
        photoUrl,
        ToyName,
        price,
        availableQuantity,
        rating,
        SellerName,
        detailsPage,
        sellerEmail
    } = data;
   

    const HandelToyDataUpdate = event => {
        event.preventDefault();        
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const ToyName = form.ToyName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const SellerName = form.SellerName.value;
        const detailsPage = form.detailsPage.value;
        const sellerEmail = form.sellerEmail.value;
        const UpdateData = {
            photoUrl,
            ToyName,
            price,
            rating,
            availableQuantity,
            SellerName,
            detailsPage,
            sellerEmail
        };

        fetch(`https://assignment-11-server-blue.vercel.app/updateMyToys/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UpdateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setSuccess(true);
                    
                    Swal.fire({
                        icon: "success",
                        title: "Update done",
                        text: "Update Successful"
                    });
                } else {
                    setError(true);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Update failed. Please try again."
                    });
                }
            })


    }



    return (
        <form onSubmit={HandelToyDataUpdate}>
            <div className='px-24'>

                <div>
                    <label className="label">
                        <span className="text-center">Photo Url</span>
                    </label>

                    <input type="text" name='photoUrl'
                        defaultValue={photoUrl}
                        className="input input-bordered input-error w-full mb-2" required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Toy Name</span>
                    </label>

                    <input type="text" name='ToyName'
                        defaultValue={ToyName}
                        className="input input-bordered input-error w-full mb-2" required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Toy Price</span>
                    </label>

                    <input
                        type="number"
                        name='price'
                        defaultValue={price}
                        className="input input-bordered input-error w-full mb-2" required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Toy Rating</span>
                    </label>
                    <input
                        type="number"
                        name='rating'
                        min={0}
                        max={5}
                        defaultValue={rating}
                        className="input input-bordered input-error w-full mb-2"
                        required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        name='availableQuantity'
                        defaultValue={availableQuantity}
                        className="input input-bordered input-error w-full mb-2"
                        required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Seller Name</span>
                    </label>
                    <input
                        type="text"
                        name='SellerName'
                        value={SellerName}
                        className="input input-bordered input-error w-full mb-2"
                        required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Seller Email</span>
                    </label>
                    <input
                        type="email"
                        name='sellerEmail'
                        defaultValue={sellerEmail}
                        className="input input-bordered input-error w-full mb-2"
                        required />

                </div>

                <div>
                    <label className="label">
                        <span className="text-center">Description Product</span>
                    </label>

                    <textarea
                        type="text"
                        name='detailsPage'
                        defaultValue={detailsPage}
                        rows={5}
                        cols={50}
                        required
                        className="input input-bordered input-error w-full h-52 mb-2 p-5" />

                </div>

                <div className='flex justify-center'>
                    <button className='btn btn-outline btn-secondary'>Update Now</button>

                </div>
            </div>


        </form>
    );
};

export default Update_My_Toys;