import React, { useState } from "react";
import Login from "./Login";
import Transfer from "./Transfer";
import '../App.css'

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        console.log("Login successful");
        // Update the state to indicate that the user is logged in
        setLoggedIn(true);
    };
    return (
        <div>
            <h1 className="m-4 progress-bar bg-dark">PAYMENT APP</h1>
            {loggedIn && <Transfer />}
            {!loggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
        </div>
    );
};

export default Home;
