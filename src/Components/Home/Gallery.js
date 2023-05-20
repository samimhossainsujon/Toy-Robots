import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
  // ?limit=20
  const ToyDetails = useLoaderData();
  // const { photoUrl, ToyName, price, availableQuantity, rating: originalRating,
  //   SellerName, detailsPage, sellerEmail } = ToyDetails;

  // console.log(ToyDetails);
  return (

    <div>
      <div>
        <h2 className="text-center text-3xl
         text-black font-serif font-extrabold
         mt-20 mb-5
         ">Photo Gallery</h2></div>
      <div className="grid grid-cols-3 gap-5 px-20  bg-base-200 my-container">

        {ToyDetails.map((ToyDetail) => (
          <GalleryImg
            key={ToyDetail._id}
            ToyDetail={ToyDetail}
          ></GalleryImg>
        ))}
      </div>
    </div>

  );
};

export default Gallery;