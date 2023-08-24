import {Tree, TreeNode} from 'react-organizational-chart';
import Header from "../Header/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"


const Manager = (mgrId) =>{
    const dispatch = useDispatch();
    const [nameList, setNameList] = useState([]);
    const loginEID = useSelector((state) =>  state.session?.currentUser)
    const currentUser = useSelector((state) => state?.entities.users && state.entities.users[loginEID])



    useEffect(() => {
        fetchAllUsers()
        .then(users => {
            const directs = Object.values(users).filter(employee => employee['managerId'] === loginEID );
            // console.log(Object.values(users)[4]['managerId'])
            const miniProfile = Object.values(directs).reduce((acc, employee) => {
                acc[employee.employeeId] = {
                    employeeId: employee.employeeId,
                    name:`${employee.firstName} ${employee.lastName}`,
                    position: `${employee.positionDescription}`,
                    level: employee.levelCode
                    // manager: employee.managerId
                };
                console.log("SHMs",employee) 
                return acc; 
            }, {});
            setNameList(miniProfile);
        })
        .catch(error => {
            console.error("Failed to fetch users:", error);
        });
    }, []);

    const empIds = Object.keys(nameList)
    const employees = Object.values(nameList)

    console.log('CHECH',Object.values(employees))




    return (

        <>
            <Header />
            <div>
                <Tree label={<div>
                    <Link to={`/users/profile/${loginEID}`}>{currentUser?.firstName}  {currentUser?.lastName} </Link>
                    <p>{currentUser?.positionDescription}</p>
                    </div>} >

                    {Object.values(employees).map (employee => (
                        <TreeNode label={<div><Link to={`/users/profile/${employee.employeeId}`}> {employee.name} </Link>
                                <p>{employee.position}</p>
                            </div>} >
                 
                        </TreeNode>
                    
                    ))}

                </Tree>
            </div>
        
        
        </>

    );
}

export default Manager;