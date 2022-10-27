import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="logo">

      </div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/create-review">Create A New Review</Link>
        <Link to="/all-reviews">View All Reviews</Link>
      </nav>
    </header>
  );
}

export default Navbar;
