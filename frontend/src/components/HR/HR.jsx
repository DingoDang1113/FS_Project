import Header from "../Header/Header";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";




const HR = () => {

    const [newHires, setNewHires] = useState('');
    const [leavers, setLeavers] = useState('');

    useEffect(() => {
        fetchAllUsers()
        .then(users => {
            const newHires = Object.values(users).filter(employee => employee.managerId === null && employee.employeeStatus === 'Active' );
            const leavers = Object.values(users).filter(employee => employee.employeeStatus !== 'Active' && employee.jobCode !== '' );
            setNewHires(newHires);
            setLeavers(leavers);
        })
        .catch(error => {
            console.error("Failed to fetch users:", error);
        });
    }, []);

    // console.log('CHECK',Object.values(newHires))



    return (
        <>
            <Header />
            <div>HR Function Dashboard</div>
            
            <div>
                <h3>Onboard New Hires</h3>
                {Object.values(newHires).map(employee => (
                    <li><Link to={`/users/profile/${employee.employeeId}`} >
                        {employee.firstName + ' ' + employee.lastName}
                    </Link></li>
                    // <li>{employee.name}</li> 
                ))}


            </div>
            
            <div>
                <h3>Offboad Employees</h3>
                {Object.values(leavers).map(employee => (
                    <li><Link to={`/users/profile/${employee.employeeId}`} >
                        {employee.firstName + ' ' + employee.lastName}
                    </Link></li>
                    // <li>{employee.name}</li> 
                ))}


            </div>



        </>
    )
}

export default HR