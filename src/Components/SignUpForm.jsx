import { useState } from 'react';

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    return  (
    <div>
    <h2>Sign Up!</h2>
    <form>
    <label>
    Username: <input />
    </label>
    <label>
    Password: <input />
    </label>
    <button>Submit</button>
    </form>
    </div>
)}