import React, { useCallback } from "react";
import {Tree, TreeNode} from 'react-organizational-chart';
import Header from "../Header/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState } from "react";

const OrgChart = () =>{
    const dispatch = useDispatch();
    const [nameList, setNameList] = useState([]);



    useEffect(() => {
        fetchAllUsers()
        .then(users => {
            const miniProfile = Object.values(users).reduce((acc, employee) => {
                acc[employee.employeeId] = {
                    employeeId: employee.employeeId,
                    name:`${employee.firstName} ${employee.lastName}`,
                    position: `${employee.positionDescription}`,
                    level: employee.levelCode,
                    manager: employee.managerId
                };
                // console.log(employee)
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
            {/* <h1> Hi </h1> */}
            <div>
                {/* <Tree label={<div><Link to={`/users/profile/${employeeId}`}>CEO</Link></div>} > */}

                <Tree label={<div>
                    <Link to={`/users/profile/E1711`}>Francis Geary</Link>
                    <p>CEO</p>
                    </div>} >
                {Object.values(employees).map (employee => (
                    <span>
                         <Link to={`/users/profile/${employee.employeeId}`}>{employee.name}</Link>
                            <p>{employee.position}</p>
                            <p>{employee.level}</p>
                    </span>

                ))}






                    <TreeNode label={<div><Link to={`/users/profile/R4402`}>Marcus Geary</Link>
                        <p>CFO</p>
                    </div>} >
                        
                        <TreeNode label={<div>Open Positon</div>} />
                    </TreeNode>

                    <TreeNode label={<div><Link to={`/users/profile/U4507`}>Darren Eid</Link>
                        <p>Tech Director</p>
                    </div>} >

                        <TreeNode label={<div><Link to={`/users/profile/T9413`}>Taylor Musolf</Link>
                            <p>Tech Manager</p>
                        </div>} >   
                            <TreeNode label={<div><Link to={`/users/profile/P8925`}>Shali Peng</Link>
                                <p>Developer</p>
                            </div>} />
                        </TreeNode>

                        <TreeNode label={<div><Link to={`/users/profile/W1529`}>Diego </Link>
                                <p>Tech Manager</p>
                            </div>} >
                        </TreeNode>

                    </TreeNode>

                </Tree>
            </div>
        
        
        </>

    );
}

export default OrgChart;