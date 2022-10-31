import React, { useState } from "react";
function LoginForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }
    

    return (
        <form onSubmit={handleSubmit}>
            <label> Username 
                <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </label>

            <label> Password 
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit"> Login </button>
        </form>
    );
}

export default LoginForm;