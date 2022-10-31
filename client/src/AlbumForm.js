import React, { useState } from 'react';

function AlbumForm({updateAlbums, addAlbum}) {
    const [formInput, setFormInput] = useState({
        artist: "",
        title: "",
        year: "",
        cover: ""
    })

    function handleChange(e) {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
    }

    const newAlbum = {
        artist: formInput.artist,
        title: formInput.title,
        year: formInput.year,
        cover: formInput.cover
    }

    function addAlbum(e) {
        e.preventDefault()
        updateAlbums(newAlbum)

        fetch('/albums', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAlbum)
        });
    }



    return (
        <div className="new-album-form">
            <h2>ADD AN ALBUM</h2>
            <form onSubmit={addAlbum}>
                <input onChange={handleChange} value={formInput.artist} type="text" name="artist" placeholder="Artist" />
                <input onChange={handleChange} value={formInput.title} type="text" name="title" placeholder="Title" />
                <input onChange={handleChange} value={formInput.year} type="text" name="year" placeholder="Year" />
                <input onChange={handleChange} value={formInput.cover} type="text" name="cover" placeholder="Album Cover" />
                <button type="submit">ADD ALBUM</button>
            </form>
        </div>

    );

}

export default AlbumForm;