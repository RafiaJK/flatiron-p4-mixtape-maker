import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReviewsContainer from './ReviewsContainer';
import ReviewForm from './ReviewForm';
import LoginForm from './LoginForm';

function App() {
  const [reviews, setReviews] = useState([]);
  //const [filteredMixes, setFilteredMixes] = useState([])

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data)
        //setFilteredMixes(data)
      });
  }, []);


  // function filterMixes(search) {
  //   if (search === "") {
  //     setFilteredMixes(mixes)
  //   } else {
  //     setFilteredMixes(mixes.filter(mix => {
  //       return mix.mix_name.toLowerCase().includes(search.toLowerCase())
  //       //   || location.type.toLowerCase().includes(search.toLowerCase()) 
  //       //   || location.address.toLowerCase().includes(search.toLowerCase())
  //     }))
  //   }
  // }

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

      <BrowserRouter>
        <Navbar />
        <LoginForm />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/create-review">
            <ReviewForm />
          </Route>
          <Route exact path="/all-reviews">
            {/* <ReviewsContainer reviews={reviews} /> */}
          </Route>
        </Switch>
      </BrowserRouter>
      </header>
      <ReviewForm />



    </div>
  );
}

export default App;
