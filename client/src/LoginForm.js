import React, { useState } from "react";
function LoginForm({ onLogin, setCurrentUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password, password_confirmation:passwordConfirmation }),
        })
            .then((r) => r.json())
            .then(onLogin);
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/users`, {
            method: "POST", 
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUser)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
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
            <input type="submit" value="Sign up" />
            <input type="submit" value="Login" onClick={()=> setLogin}/>
        </form>
    );
}

export default LoginForm;