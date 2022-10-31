import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewCard({ review, onDeleteReview, updatedReview }) {
  const {id, user_id, album_id, rating} = review

  function handleDeleteClick() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(id);
      }
    });
  }


  function handleUpdate() {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((r) => r.json())
      .then((update) => {
        updatedReview(update);
      });
  }

  return (
    <li className="card">
        <p>{review.user.username}'s Review On:<br/></p>
        <h4>{review.album.title}</h4>
        <h5>{rating}</h5>
        <img src={review.album.cover} alt={"Album Cover"}/>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleUpdate}>Update Review</button>

    </li>
  );

}

export default ReviewCard;