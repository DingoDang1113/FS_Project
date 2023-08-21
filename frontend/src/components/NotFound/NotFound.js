import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NotFound.css'



const NotFound = () => (

    <>

        <header className="header-signup">
            <h1>May Flowers Employee Site</h1>
            <p>powered by <strong>weekday</strong></p>
        </header>
    
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to={"/"} className="back" >Back to Sign In</Link>
        </div>
    
    </>
)

export default NotFound
