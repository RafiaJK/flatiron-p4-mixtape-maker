import React from "react";
import AlbumCard from "./AlbumCard";
import { useState } from "react";

function AlbumsContainer({albums, updateAlbum}) {
  const albumComponents = albums.map((album) => {
    return <AlbumCard key={album.id} album={album} />
  })

  const [formInput, setFormInput] = useState({
    artist: "",
    title: "",
    year: "",
    cover: ""
  })

  const newAlbum = {
    artist: formInput.artist, 
    title: formInput.title,
    year: formInput.year,
    cover: formInput.cover
  }

  function handleChange(e){
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }

  function addAlbum(e){
    e.preventDefault()
    updateAlbum(newAlbum)

    fetch("/albums", {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type":"application/json"
    },
     body: JSON.stringify(newAlbum),
    });
  }

  return (
    <>
    <ul className="cards">{albumComponents}</ul>

    <div className="new-album-form">
          <h2>ADD AN ALBUM</h2>
          <form onSubmit={addAlbum}>
            <input onChange={handleChange} value={formInput.artist} type="text" name="artist" placeholder="Artist" />
            <input onChange={handleChange} value={formInput.title} type="text" name="title" placeholder="Title" /> 
            <input onChange={handleChange} value={formInput.year} type="text" name="year" placeholder="Year" /> 
            <input onChange={handleChange} value={formInput.cover} type="img" name="cover" placeholder="Album Cover" /> 
            <button type="submit">ADD ALBUM</button>
          </form>
        </div>
    </>
  );


}

export default AlbumsContainer;
