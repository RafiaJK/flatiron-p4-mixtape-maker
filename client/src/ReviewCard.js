import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewCard({ review }) {
  const {user_id, album_id, rating, } = review

  return (
    <li className="card">
        <p>REVIEW OF:<br/></p>
        <h4>{review.album.title}</h4>
        <h5>{rating}</h5>
        <img src={review.album.cover} alt={"Album Cover"}/>

    </li>
  );

}

export default ReviewCard;