import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitleSetup from '../TitleSetup/TitleSetup';

const My_Toys = () => {
    useTitleSetup('My Toys')
    const { User } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${User?.email}`)
            .then(response => response.json())
            .then(data => {
                const sortedData = data.sort((a, b) => a.price - b.price);

                setMyToys(sortedData);

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const ToysDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/updateMyToys/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                    },

                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            }
        });
    };



    return (
        <div data-aos="fade-up-right" className='pr-10 ps-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Detail Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((myToy, index) => (
                            <tr key={myToy._id}
                                myToy={myToy}
                            >
                                <td className='font-extrabold text-black'>{index + 1}</td>
                                <td>{myToy.price}</td>
                                <td>{myToy.availableQuantity}</td>
                                <td>{myToy.detailsPage.split(' ').slice(0, 10).join(' ')}</td>


                                <td>
                                    <Link to={`/updateMyToys/${myToy._id}`}>
                                        <button className='btn btn-outline btn-secondary text-2xl'>
                                            <AiFillEdit />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => ToysDelete(myToy._id)}
                                        className='btn btn-outline btn-secondary text-2xl'>
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_Toys;
