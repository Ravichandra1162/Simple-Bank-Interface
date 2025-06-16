import React, { useState } from 'react';

function Login({ onLogin }) {
    const [userId, setUserId] = useState("1001");
    const [pin, setPin] = useState("");

    const handleLogin = () => {
        onLogin(userId, pin);
    };

    return (
        <div classname = "card">
            <h2>Login</h2>
            <select onChange={(e) => setUserId(e.target.value)} value={userId}>
                <option value="1001">User 1001</option>
                <option value="1002">User 1002</option>
                <option value="1003">User 1003</option>
                <option value="1004">User 1004</option>
                <option value="1005">User 1005</option>
            </select>
            <input type="password" 
                placeholder="Enter PIN" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default Login;