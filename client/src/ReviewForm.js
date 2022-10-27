import React, {useState} from "react"; 
function ReviewForm({updateReview,addReview}) {
    const [formInput, setFormInput] = useState({
        user: "",
        album: "",
        rating: ""
      })
    
      const newReview = {
        user_id: formInput.user,
        album_id: formInput.album,
        rating: formInput.rating,
      }
    
      function handleChange(e){
        setFormInput({...formInput, [e.target.name]: e.target.value})
      }
    
      function addReview(e){
        e.preventDefault()
        updateReview(newReview)
    
        fetch("/reviews", {
          method: "POST",
          headers: {
           "Accept": "application/json",
           "Content-Type":"application/json"
        },
         body: JSON.stringify(newReview),
        });
      }
    

      return (
        <div className="new-review-form">
          <h2>Create a new review!</h2>
          <form onSubmit={addReview}>
            <input onChange={handleChange} value={formInput.user} type="text" name="user" placeholder="User" />
            <input onChange={handleChange} value={formInput.album} type="text" name="album" placeholder="Album" /> 
            <input onChange={handleChange} value={formInput.rating} type="text" name="rating" placeholder="Review" /> 
            {/* <select onChange={handleChange} value={formInput.song} name="type" id="selectList">
              <option name="☕️ Cafe">Cafe</option>
              <option name="🍸 Bar">Bar</option>
              <option name="🍽 Restaurant">Restaurant</option>
            </select> */}
            <button type="submit">ADD REVIEW</button>
          </form>
        </div>
      );
}

export default ReviewForm;