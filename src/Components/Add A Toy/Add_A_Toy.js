import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Add_A_Toy = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit } = useForm();
 

  const AddToy = (data) => {
    const allDetails = { ...data };

    if (Object.values(allDetails).every((value) => value !== '')) {
      console.log(allDetails);

      fetch('http://localhost:5000/addToy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          setSuccess(
            Swal.fire({
              icon: 'success',
              title: 'Toy Added',
              text: 'Toy Added Successfully',
            })
          );
        })
        .catch((error) => {
          setError(
            Swal.fire({
              icon: 'error',
              title: error,
              text: 'Please try again',
            })
          );
        });
    }
  };

  return (
    <form data-aos="fade-up-right" onSubmit={handleSubmit(AddToy)}>
      <div className="px-24">
        <div>
          <label className="label">
            <span className="text-center">Photo Url</span>
          </label>
          <input
            type="text"
            {...register('photoUrl')}
            placeholder="Enter your Photo Url here"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center">Toy Name</span>
          </label>
          <input
            type="text"
            {...register('ToyName')}
            placeholder="Enter your Toy name"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center">Toy Price</span>
          </label>
          <input
            type="number"
            {...register('price')}
            placeholder="Enter your toy price"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center">Toy Rating</span>
          </label>
          <input
            type="number"
            {...register('rating')}
            min={0}
            max={5}
            placeholder="Toy rating"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center">Available Quantity</span>
          </label>
          <input
            type="number"
            {...register('availableQuantity')}
            placeholder="Available Quantity"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center">Seller Name</span>
          </label>
          <input
            type="text"
            {...register('SellerName')}
            placeholder="Enter your Seller Name"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center">Seller Email</span>
          </label>
          <input
            type="email"
            {...register('sellerEmail')}
            placeholder="Enter your author email"
            className="input input-bordered input-error w-full mb-2"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="text-center"></span>
          </label>

          <select className="text-input" {...register("status")}>
            <option>select</option>
            <option value="Programmable">Programmable</option>
            <option value="RemoteControl">Remote Control</option>
            <option value="TransformingRobots">Transforming Robots</option>

          </select>

        </div>

        <div>
          <label className="label">
            <span className="text-center">Description Product</span>
          </label>
          <textarea
            {...register('detailsPage')}
            placeholder="Enter your toy details"
            rows={5}
            cols={50}
            required
            className="input input-bordered input-error w-full h-52 mb-2 p-5"
          />
        </div>

        <button className="btn btn-outline btn-secondary" type="submit">
          Add Toy
        </button>
      </div>
    </form>
  );
};

export default Add_A_Toy;
