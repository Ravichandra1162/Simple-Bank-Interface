import React, {useState}  from "react";

function Dashboard({user, onlogout}) {
    const [amount, setAmount] = useState("");
    const [log, setlog] = useState(user.log);

    const updatelog = (message) => {
        const updatedLog = [message, ...log.slice(0,9)];
        setlog(updatedLog);
        user.log = updatedLog; // Update the user log
    };

    const deposit = () => {
        const val = parseFloat(amount);
        if (val > 0){
            user.balance += val;
            updatelog(`Deposited: $${val}`);
        }
        else {
            alert("Please enter a valid amount to deposit.");
        }
    };

    const withdraw = () => {
        const val = parseFloat(amount);
        if (val > 0 && user.balance >= val) {
            user.balance -= val;
            updatelog(`Withdrew: ${val}`);
        } 
        else if (val > 0) {
            alert("Insufficient balance for withdrawal.");
        }
    };

    return (
        <div className="card">
            <h2>Welcome, User{user.id}</h2>
            <p>Balance: ${user.balance}</p>
            <input type="number" 
                placeholder="Enter Amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}   />

            <button onClick={deposit}> Deposit </button>
            <button onClick={withdraw}> Withdraw</button>
            <h3>Transaction Log</h3>
            <ul>
                {log.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
            <button onClick={onlogout}>Logout</button>
        </div>
    );
 } 
export default Dashboard;