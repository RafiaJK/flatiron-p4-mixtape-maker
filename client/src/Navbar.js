import { Link } from "react-router-dom";

function Navbar({user, setUser}) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

  return (
    <header>
        <br/>

        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      <nav>
        <Link to="/">Home </Link>
        <Link to="/add-album">Add Album</Link>
        <Link to="/create-review">Create A New Review</Link>
        <Link to="/all-reviews">View All Reviews</Link>
      </nav>

    </header>
  );
}

export default Navbar;
