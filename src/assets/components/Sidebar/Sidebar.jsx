import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Sidebar = ({ bookmark, creditHour, totalCreditHour, totalPrice }) => {
  const formattedTotalPrice = totalPrice.toFixed(2);
  return (
    <div className="md:w-1/3 m-3 p-2 bg-white rounded">
      <h2 className="text-2xl font-bold py-2 text-blue-500">
        {" "}
        Credit Hour Remaining {creditHour} hr
      </h2>
      <hr />
      <h2 className="text-2xl font-bold py-2 ">Course Name</h2>
      <ol>
        {bookmark.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </ol>
      <hr />
      <h2 className="text-2xl font-bold py-2">
        Total Credit Hours: {totalCreditHour}
      </h2>
      <hr />
      <h2 className="text-2xl font-bold py-2">
        Total Price: ${formattedTotalPrice}
      </h2>
    </div>
  );
};

export default Sidebar;
