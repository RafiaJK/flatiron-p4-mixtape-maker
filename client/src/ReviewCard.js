import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewCard({ review }) {
  const {user_id, album_id, rating} = review

  return (
      <li className="card">
        <h2>{album_id}</h2>
        <h4>{user_id}</h4>
        <p>Review: {rating}</p>
      </li>
  );

}

export default ReviewCard;