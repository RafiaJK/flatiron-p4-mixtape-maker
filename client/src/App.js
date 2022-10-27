import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReviewsContainer from './ReviewsContainer';
import ReviewForm from './ReviewForm';
import LoginForm from './LoginForm';
import AlbumsContainer from './AlbumsContainer';

function App() {
  const [reviews, setReviews] = useState([]);
  const [albums, setAlbums] = useState([])

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
      .then((data) => {
        setAlbums(data)
      });
  }, []);


  //LOGIN
  function Login() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);
    if (user) {
      return <h2>Welcome, {user.username}!</h2>;
    } else {
      return <Login onLogin={setUser} />;
    }
  }

  function Logout({ onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
    return (
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
      <LoginForm />
      </header>
      <BrowserRouter>
        <Navbar />

        <Switch>
         
          <Route exact path="/create-review">
            <ReviewForm />
          </Route>

          <Route exact path="/all-reviews">
            <ReviewsContainer reviews={reviews} />
          </Route>

          <Route exact path="/">
            <Home />
            <AlbumsContainer albums={albums} />

          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
