import { useState } from 'react';


function Demo() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const role = "admin";

    return (
        <>
            <h2>1.Demo of Different Condition Rendering Techniques</h2>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
            <h3>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h3>

            <h2>2.Show/Hide Details Toggle</h2>
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide Details" : "Show Details"}</button>
            {showDetails && <p>This is some detailed content!</p>}

            <h2>Admin vs User UI</h2>
            {(() => {
                if (role === 'admin') return <p>Admin Panel</p>;
                if (role === 'user') return <p>User Dashboard</p>;
                return <h2>Guest Access</h2>;
            })()}

        </>
    )
}


export default Demo;


