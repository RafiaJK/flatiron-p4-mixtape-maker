import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <section className="container">
      {/* {mixes.map((mix) => (
        <div key={mix.id} className="card">
          <h2>
            <Link to={`/mixes/${mix.id}`}>{mix.name}</Link>
          </h2>
          <button onClick={() => handleDelete(mix.id)}>Delete</button>
        </div>
      ))} */}
    </section>
  );
}

export default Home;
