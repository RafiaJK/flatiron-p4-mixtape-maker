import { useEffect, useState } from "react";


function AlbumCard({ album }) {
  const {artist, title, year, cover} = album

  return (
    <li className="card">
        <h3>{artist} | {title}</h3>
        <img src={cover} alt={"Album Cover"}/>
        <h5>{year}</h5>
    </li>
  );

}

export default AlbumCard;