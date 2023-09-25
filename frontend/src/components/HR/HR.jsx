import Header from "../Header/Header";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './HR.css'




const HR = () => {

    const [newHires, setNewHires] = useState('');
    const [leavers, setLeavers] = useState('');

    useEffect(() => {
        fetchAllUsers()
        .then(users => {
            const newHires = Object.values(users).filter(employee => employee.managerId === null && employee.employeeStatus === 'Active' );
            const leavers = Object.values(users).filter(employee => employee.employeeStatus !== 'Active' );
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

            <img className='banner' src='https://media.mktg.workday.com/is/image/workday/workday-yellow?fmt=png-alpha&wid=1664' />


            <h3>Onboard New Hires</h3>
            <div className='New-hires'>
                <div className="field-name">Employee Id</div>               
                <div className="field-name">Name</div>
                {/* <div className="field-name">Level</div> */}
                <div className="field-name">Start Date</div>
                {/* <div className="field-name">Profile</div> */}


                {Object.values(newHires).map (employee => (
                        <div className='employee-row'>
                            <input type="text" value={employee.employeeId}  />

                        <Link to={`/users/profile/${employee.employeeId}`} >
                            {employee.firstName + ' ' + employee.lastName}
                        </Link>
                            {/* <input type="text" value={employee.level}  /> */}
                            <input type="date" value={employee.startDate} />
                        </div>

                ))}
            </div>

            
            <h3>Offboard Employees</h3>
            <div className='Offboard-employees'>
                <div className="field-name">Employee Id</div>               
                <div className="field-name">Name</div>
                {/* <div className="field-name">Level</div> */}
                <div className="field-name">Termination Date</div>

                {Object.values(leavers).map (employee => (
                        <div className='employee-row'>
                            <input type="text" value={employee.employeeId}  />
                            
                            <Link to={`/users/profile/${employee.employeeId}`} >
                                {employee.firstName + ' ' + employee.lastName}
                            </Link>
                                {/* <input type="text" value={employee.level}  /> */}
                                <input type="date" value={employee.terminationDate} />
                        </div>

                ))}


            </div>



        </>
    )
}

export default HR