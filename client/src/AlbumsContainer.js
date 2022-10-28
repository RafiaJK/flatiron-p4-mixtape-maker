import React from "react";
import AlbumCard from "./AlbumCard";
import { useState } from "react";

function AlbumsContainer({albums}) {
  const albumComponents = albums.map((album) => {
    return <AlbumCard key={album.id} album={album} />
  })

  return (
    <ul className="cards">{albumComponents}</ul>
  );

}

export default AlbumsContainer;
