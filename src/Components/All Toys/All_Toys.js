import React, { useEffect, useState } from 'react';

import { FaEye } from 'react-icons/fa';
import useTitleSetup from '../TitleSetup/TitleSetup';
import { Link } from 'react-router-dom';

const All_Toys = () => {
    useTitleSetup('All Toys')
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    console.log(allToys);

    useEffect(() => {
        fetch('https://assignment-11-server-blue.vercel.app/allToy?limit=20')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            });
    }, []);

    const handleSearch = () => {
        fetch(`https://assignment-11-server-blue.vercel.app/allToySearch/${searchText}`)
            .then(response => response.json())
            .then(data => {
                setAllToys(data);
                setLoading(false)
                // console.log(data);
            });
    };

    return (
        <div data-aos="fade-up-right">
            <div className="flex justify-center gap-6">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                    className="input input-bordered" />

                <button className="btn btn-outline btn-secondary" onClick={handleSearch}>Search</button>

            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>photo</th>
                            <th>Toy Name</th>
                            <th>subCategory</th>
                            <th>sellerName</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>View Details</th>

                        </tr>
                    </thead>

                    <tbody>
                        {/* Data Row Start */}
                        {allToys?.map((toy, index) => (
                            <tr key={toy._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={toy.photoUrl} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{toy.ToyName}</td>
                                <td>{toy.status}</td>
                                <td>{toy.SellerName}</td>
                                <td>{toy.price}</td>
                                <td>{toy.availableQuantity}</td>

                                <td>
                                    <Link to={`/ToyDetails/${toy._id}`} className="card-actions">
                                        <button className="btn btn-outline btn-secondary">View Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    





                </table>
            </div>

        </div>
    );
};

export default All_Toys;


// <Link to={`/updateMyToys/${myToy._id}`}>
// <button className='btn btn-outline btn-secondary text-2xl'>
//     <AiFillEdit />
// </button>
// </Link>


/**
 *   <tbody>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>


                    </tbody>
 */