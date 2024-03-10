import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";
import PropTypes from "prop-types";

const Courses = ({ addToBookmark }) => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="md:w-2/3 m-3 ">
      <div className="courses">
        {" "}
        {courses.map((course) => (
          <Course
            key={course.id}
            addToBookmark={addToBookmark}
            course={course}
          ></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  addToBookmark: PropTypes.func.isRequired,
};
export default Courses;
