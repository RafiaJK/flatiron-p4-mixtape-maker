import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReviewsContainer from './ReviewsContainer';
import ReviewForm from './ReviewForm';
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';
import AlbumForm from './AlbumForm';
import { current } from 'daisyui/src/colors';
import SignUp from './SignUp';

function App() {
  const [reviews, setReviews] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data)
      });
  }, []);

  useEffect(() => {
    fetch("/albums")
      .then((r) => r.json())
      .then(setAlbums);
  }, []);

  function updateAlbums(newAlbum) {
    const albumToAdd = {...newAlbum, id: albums.length+1}
    setAlbums([...albums], albumToAdd)
  }

  function updateReview(newReview) {
    const reviewToAdd = {...newReview, id: reviews.length+1}
    setReviews([...reviews], reviewToAdd)
  }

  function handleUpdateReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      return review.id === updatedReview.id ? updatedReview : review;
    });
    setReviews(updatedReviews);
  }

  function handleDeleteReview(reviewToDelete) {
    const updatedReviews = reviews.filter((review) => review.id !== reviewToDelete.id);
    setReviews(updatedReviews);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h4>⏮ My Album Reviews ⏭</h4>
      </header>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
      <main>
          {user ? ( 
            <Switch>
              <Route exact path="/">
                <Home />
                <AlbumsContainer albums={albums}  />
                <AlbumForm updateAlbums={updateAlbums} />
              </Route>

              <Route exact path="/add-album">
                <AlbumForm updateAlbums={updateAlbums} />
              </Route>

              <Route exact path="/create-review">
                <ReviewForm updateReview={updateReview}/>
              </Route>

              <Route exact path="/all-reviews">
                <ReviewsContainer reviews={reviews} updatedReview={handleUpdateReview} onDeleteReview={handleDeleteReview}/>
                <ReviewForm/>
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/signup">
                <SignUp setUser={setUser}/>
              </Route>
              <Route exact path="/login">
                 <LoginForm setUser={setUser}/>
              </Route>
            </Switch>
          )}

      </main> 
      </BrowserRouter>
    </div>
  );
}

export default App;
