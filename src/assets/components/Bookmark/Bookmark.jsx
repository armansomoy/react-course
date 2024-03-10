import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return <li>{title}</li>;
};

export default Bookmark;
