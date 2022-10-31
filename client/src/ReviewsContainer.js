import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewsContainer({reviews, onDeleteReview, updatedReview}) {
  const reviewComponents = reviews.map((review) => {
    return <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview} updatedReview={updatedReview}/>
  })
  
  
  return (
    <ul className="cards">{reviewComponents}</ul>
  );
}

export default ReviewsContainer;
