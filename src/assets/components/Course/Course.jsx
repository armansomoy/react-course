import React from "react";
import PropTypes from "prop-types";

const Course = ({ course, addToBookmark }) => {
  const { cover, title, id, price, credit_hour, description } = course;
  return (
    <div className="mb-12 bg-white p-3 rounded">
      <img src={cover} alt="" className="h-40 w-full mb-2 rounded" />
      <h2 className="font-bold py-2 text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex justify-between py-3">
        <div>
          <p>Price: $ {price} </p>
        </div>{" "}
        <div>
          <p>Credit: {credit_hour}hr </p>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => addToBookmark(course)}
        className="text-white bg-blue-600 my-2 w-full"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  addToBookmark: PropTypes.func.isRequired,
  course: PropTypes.array.isRequired,
};
export default Course;
