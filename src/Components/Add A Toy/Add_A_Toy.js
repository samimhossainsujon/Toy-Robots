import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add_A_Toy = () => {
    const [Success, setSuccess] = useState();
    const [error, setError] = useState();
  

    const AddToy = (event) => {
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
        const allDetails = { photoUrl, ToyName, price, rating,availableQuantity,SellerName, detailsPage, sellerEmail };
        console.log(allDetails);
        

        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allDetails)
        })
            .then(response => response.json())
            .then(data => {
                setSuccess(Swal.fire({
                    icon: "success",
                    title: "Toy Added",
                    text: "Toy Added Successful"
                }));
            })
            .catch((error) => {
                setError(Swal.fire({
                    icon: "error",
                    title: error,
                    text: "Please try again"
                }));
            });
    }





    return (
        <form onSubmit={AddToy}>
            <div className='px-24'>

                <div>
                    <label className="label">
                        <span className="text-center">Photo Url</span>
                    </label>

                    <input type="text" name='photoUrl' placeholder="Enter your Photo Url here"
                        className="input input-bordered input-error w-full mb-2" required />

                </div>



                <div>
                    <label className="label">
                        <span className="text-center">Toy Name</span>
                    </label>

                    <input type="text" name='ToyName' placeholder="Enter your Toy name"
                        className="input input-bordered input-error w-full mb-2" required />


                </div>



                <div>
                    <label className="label">
                        <span className="text-center">Toy Price</span>
                    </label>

                    <input type="number" name='price' placeholder="Enter your toy price"
                        className="input input-bordered input-error w-full mb-2" required />


                </div>



                <div>
                    <label className="label">
                        <span className="text-center">Toy Ratting</span>
                    </label>
                    <input type="number" name='rating' min={0} max={5}
                        placeholder="Toy ratting"
                        className="input input-bordered input-error w-full mb-2"
                        required
                    />


                </div>


                <div>
                    <label className="label">
                        <span className="text-center">Available Quantity</span>
                    </label>
                    <input type="number" name='availableQuantity'
                        placeholder="Available Quantity"
                        className="input input-bordered input-error w-full mb-2"
                        required
                    />


                </div>


                <div>
                    <label className="label">
                        <span className="text-center">Seller Name</span>
                    </label>
                    <input type="text" name='SellerName'
                        placeholder="enter your Seller Name"
                        className="input input-bordered input-error w-full mb-2"
                        required
                    />


                </div>


                <div>
                    <label className="label">
                        <span className="text-center">Seller Email</span>
                    </label>
                    <input type="email" name='sellerEmail'
                        placeholder="enter your author email"
                        className="input input-bordered input-error w-full mb-2"
                        required
                    />


                </div>






                <div>
                    <label className="label">
                        <span className="text-center">Description Product </span>
                    </label>

                    <textarea type="text" name='detailsPage'
                        placeholder="Enter your toy details"
                        rows={50}
                        cols={500}
                        // value='text'
                        required
                        className="input input-bordered input-error w-full h-52 mb-2 p-5" />


                </div>               




                <button className='btn btn-outline btn-secondary'> add toy</button>






            </div>

        </form>
    );
};

export default Add_A_Toy;