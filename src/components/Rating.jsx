import React from "react";

import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

const Rating = ({ rating, reviews }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {rating <= 0 ? <Star /> : rating < 1 ? <StarHalf /> : <StarFill />}
        {rating <= 1 ? <Star /> : rating < 2 ? <StarHalf /> : <StarFill />}
        {rating <= 2 ? <Star /> : rating < 3 ? <StarHalf /> : <StarFill />}
        {rating <= 3 ? <Star /> : rating < 4 ? <StarHalf /> : <StarFill />}
        {rating <= 4 ? <Star /> : rating < 5 ? <StarHalf /> : <StarFill />}
      </div>
      <span> ({reviews} Reviews)</span>
    </>
  );
};

export default Rating;
