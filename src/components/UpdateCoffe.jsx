// import React from 'react';

import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateCoffe = () => {
  const coffee = useLoaderData();

  // eslint-disable-next-line no-unused-vars
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Good job!", "You have updated the coffe", "success");
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">
        Update Coffee: <span className="text-amber-700">{name}</span>
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* Coffe name row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={quantity}
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered ml-4 w-full"
              />
            </label>
          </div>
        </div>
        {/* Supplier name row */}
        <div className="md:flex mb-8">
          {" "}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                name="supplier"
                type="text"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                name="taste"
                type="text"
                placeholder="Taste"
                defaultValue={taste}
                className="input input-bordered ml-4 w-full"
              />
            </label>
          </div>
        </div>
        {/* Category name row */}
        <div className="md:flex mb-8">
          {" "}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={category}
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered ml-4 w-full"
              />
            </label>
          </div>
        </div>
        {/* photo url row */}
        <div className="mb-8">
          {" "}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                defaultValue={photo}
                type="text"
                placeholder="Phot Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffe;
