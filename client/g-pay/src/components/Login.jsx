import React, { useState } from "react";
import axios from "axios";
import '../App.css'
import Home from './Home'

const Login = ({ onLoginSuccess }) => {
    const [senderId, setSenderId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [initialAmount, setInitialAmount] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:4000/users/login",
                {
                    senderId,
                    phoneNumber,
                    initialAmount,
                }
            );

            console.log("Login response:", response.data);
            onLoginSuccess();
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div>
        <hr/>
            <h2 className="m-3 font-weight-bold">Login</h2>
            <div>
                <label className="pr-5">Sender-Id:     </label>
                <input
                    type="text"
                    value={senderId}
                    onChange={(e) => setSenderId(e.target.value)}
                    className="mt-2 mb-2"
                />
            </div>
            <div>
                <label className="pr-3">Phone Number:</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-2 mb-2"
                />
            </div>
            <div>
                <label className="pr-4">InitialAmount:</label>
                <input
                    type="text"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(e.target.value)}
                    className="mt-2 mb-2"
                />
            </div>
            <button onClick={handleLogin} className="m-3 btn btn-primary">Login</button>
        </div>
    );
};

export default Login;
