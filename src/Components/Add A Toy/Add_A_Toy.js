import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add_A_Toy = () => {
    const [Success, setSuccess] = useState();
    const [error, setError] = useState();

    const AddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const detailsPage = form.detailsPage.value;
        const allDetails = { photoUrl, name, price, rating, detailsPage };

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

                    <input type="text" name='name' placeholder="Enter your Toy name"
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
                        <span className="text-center">Photo Url</span>
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