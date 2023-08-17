import { useState } from "react"
import { postSession } from '../../utils/sessionApiUtils';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './LoginForm.css'
import { loginUser } from "../../store/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

function LoginForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const currentUser = useSelector((state) =>  state.session?.currentUser)
    const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)
    // console.log(useSelector((state) => state.entities.users[currentUser].employeeId))
    if (currentUser && currentEmployeeId) return <Redirect to={`/users/${currentEmployeeId}`} />


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const user = await loginUser({ employee_id: employeeId, password });
            const user = await dispatch(loginUser({employeeId: employeeId, password}))
            // if (user) {
            //     console.log('Login successful', user);

            // } else {
            //     console.log('Login failed');
            // }
        } catch (error) {
            console.error('There was an error during login', error);
        }
    };

    return (

        <>
            <header>
                <h1>May Flowers Employee Site</h1>
                <p>powered by <strong>weekday</strong></p>
            </header>
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
        </>



    );
}

export default LoginForm;
