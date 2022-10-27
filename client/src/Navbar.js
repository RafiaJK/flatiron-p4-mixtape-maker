import { Link } from "react-router-dom";

function Navbar({onLogout}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>

      <nav>
        <Link to="/">Home </Link>
        <Link to="/create-review">Create A New Review</Link>
        <Link to="/all-reviews">View All Reviews</Link>
        <button onClick={handleLogout}>Logout</button>

      </nav>

    </header>
  );
}

export default Navbar;
