import React, { useCallback } from "react";
import {Tree, TreeNode} from 'react-organizational-chart';
import Header from "../Header/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState } from "react";
import Manager from "../Manager/Manager";
import OneLevel from "../Manager/OneLevel";
// import './OrgChart.css'
import OrganizationChart from '@dabeng/react-orgchart';
import MyNode from "./MyNode";
import { Redirect } from "react-router-dom/cjs/react-router-dom";



const OrgChart = () =>{
    const dispatch = useDispatch();
    const [nameList, setNameList] = useState([]);



    useEffect(() => {
        fetchAllUsers()
        .then(users => {
            const activeEmployees = Object.values(users).filter(employee => employee['employeeStatus'] ===  'Active');
            // console.log('EEEE',activeEmployees)
            const miniProfile = Object.values(activeEmployees).reduce((acc, employee) => {
                acc[employee.employeeId] = {
                    employeeId: employee.employeeId,
                    name:`${employee.firstName} ${employee.lastName}`,
                    position: `${employee.positionDescription}`,
                    level: employee.levelCode,
                    manager: employee.managerId,
                    directsID: employee.teamMembers
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

    const employeeData = (employeeMap, managerId='E1711') => {
        const employee = employeeMap[managerId];
        if(!employee) {return null}
        const children = (employee.directsID || []).map(eId => employeeData(employeeMap, eId)).filter( e => e!== null)
        return {
            employeeId:employee.employeeId,
            name:employee.name,
            // page:<Redirect to={`/users/profile/${employee.employeeId}`} />,
            title: employee.position,
            ...(children.length > 0 && {children})
        };
    };

    const ds = employeeData(nameList)

    // const ceoId = 'E1711';
    // const ceo = nameList[ceoId]
    // const employees = Object.values(nameList)



    // console.log('CHECH',ds)
    if (!ds) return null  

    return (

        <>
            <Header />

            <img className='banner' src="https://media.mktg.workday.com/is/image/workday/workday-yellow?fmt=png-alpha&wid=1664" />
            {/* <div className="org-chart">
                {ceo ? (
                    <Tree label={<div>
                        <Link to={`/users/profile/${ceo.employeeId}`}>{ceo.name}</Link>
                        <p>{ceo.position}</p>
                        </div>} >

                        <OneLevel mgr={ceo} employees={employees}/> 

                    </Tree>
                ) : (
                    <p>Loading...</p>
                )}
            </div> */}
            
            <div className="chart">
                <OrganizationChart datasource={ds} NodeTemplate={MyNode} chartClass="myChart"/>
            </div>
        
        
        </>

    );
}

export default OrgChart;