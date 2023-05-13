/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 p-10 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pe-6">
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>{details}</p>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="btn">View</button>
          <button className="btn">Edit</button>
          <button className="btn">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
