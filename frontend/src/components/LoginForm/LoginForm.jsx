import { useState } from "react"
// import { postSession } from '../../utils/sessionApiUtils';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './LoginForm.css'
import { loginUser } from "../../store/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";



function LoginForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.loginUser.errors)

    const currentUser = useSelector((state) =>  state.session?.currentUser)
    const currentEmployeeId = useSelector((state) => state?.entities.users && state.entities.users[currentUser]?.employeeId)
    // console.log(useSelector((state) => state.entities.users[currentUser].employeeId))

    console.log('current_user:', currentUser)
    console.log('emp_id:', currentEmployeeId)

    if (currentUser) return <Redirect to={`/users/home`} />


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const user = await loginUser({ employee_id: employeeId, password });
            const user = await dispatch(loginUser({employeeId: employeeId, password}))
        } catch (error) {
            console.error('There was an error during login', error);
        }
    };

    const handleHRDemo = async (e) => {
        e.preventDefault();
        const user = await dispatch(loginUser({employeeId: 'G4333', password: '123456'}))
    }

    const handleMgrDemo = async (e) => {
        e.preventDefault();
        const user = await dispatch(loginUser({employeeId: 'T9413', password: '123456'}))
    }

    const handleUserDemo = async (e) => {
        e.preventDefault();
        const user = await dispatch(loginUser({employeeId: 'P8925', password: '123456'}))
    }

    return (

        <>
            <header className="login-header">
                <h1>May Flowers Employee Site</h1>
                <p>powered by <strong>weekday</strong></p>
            </header>
            
            <div onSubmit={handleSubmit} className="login-container">
                <form >
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
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <ul className="error-login">
                    {Array.isArray(errors) ? errors.map((error) => <li key={error}>{error}</li>) : ''}
                </ul>

                <div className="auth-links">
                    <Link to="/users/new" className="signup"> New Joiner Sign Up</Link>
                    {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                    <Link to={"/users/G4333"} className="demo" onClick={handleHRDemo}>HR Demo Sign In</Link>
                    <Link to={"/users/G9413"} className="demo" onClick={handleMgrDemo}>Mgr Demo Sign In</Link>
                    <Link to={"/users/8925"} className="demo" onClick={handleUserDemo}>User Demo Sign In</Link>
                </div>


            </div>



        </>



    );
}

export default LoginForm;
