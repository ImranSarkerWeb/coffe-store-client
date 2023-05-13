// import React from 'react';

const AddCoffe = () => {
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffe</h2>
      <form>
        {/* Coffe name row */}
        <div className="md:flex mb-8">
          {" "}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffe Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="Coffe Name"
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
                placeholder="Details"
                className="input input-bordered ml-4 w-full"
              />
            </label>
          </div>
        </div>
        {/* phot url row */}
        <div className="mb-8">
          {" "}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffe Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="Coffe Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffe" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffe;
