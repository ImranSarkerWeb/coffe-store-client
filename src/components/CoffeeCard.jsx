/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import swal from "sweetalert";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              const remaining = coffees.filter((coff) => coff._id !== _id);
              setCoffees(remaining);
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
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
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-amber-700 border-none hover:bg-amber-800"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
