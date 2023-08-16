import { useState } from "react"
import { postSession } from '../../utils/sessionApiUtils';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './LoginForm.css'

function LoginForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await postSession({ employee_id: employeeId, password });
            if (user) {
                console.log('Login successful', user);

            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('There was an error during login', error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input 
                    value={employeeId} 
                    onChange={e => setEmployeeId(e.target.value)} 
                    placeholder="Employee ID"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
            {/* <div className="auth-links">
                <Link to="/signup">Sign Up</Link>
                <Link to="/forgot-password">Forgot Password?</Link>
                <Link to="/hr-demo-login">HR Demo Login</Link>
            </div> */}
        </div>
    );
}

export default LoginForm;
