import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewsContainer({reviews}) {
  const reviewComponents = reviews.map((review) => {
    return <ReviewCard key={review.id} review={review} />
  })
  return (
    <ul className="cards">{reviewComponents}</ul>
  );
}

export default ReviewsContainer;
