import Header from "../Header/Header";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Note: This isn't used
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./HR.css";

const EmployeeList = ({ employees, displayTerminationDate }) => (
  <div className={displayTerminationDate ? "Offboard-employees" : "New-hires"}>
    <div className="field-name">Employee Id</div>
    <div className="field-name">Name</div>
    <div className="field-name">Position Code</div>
    <div className="field-name">Position Desc</div>
    <div className="field-name">
      {displayTerminationDate ? "Termination Date" : "Start Date"}
    </div>

    {employees.map((employee) => (
      <div className="employee-row">
        <input type="text" value={employee.employeeId} />
        <Link to={`/users/profile/${employee.employeeId}`}>
          {employee.firstName + " " + employee.lastName}
        </Link>
        <input type="text" value={employee.positionId} />
        <input
          type="text"
          value={employee.positionDescription || employee.level}
        />
        <input
          type="date"
          value={
            displayTerminationDate
              ? employee.terminationDate
              : employee.startDate
          }
        />
      </div>
    ))}
  </div>
);

const HR = () => {
  const [newHires, setNewHires] = useState([]);
  const [leavers, setLeavers] = useState([]);

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        const allUsers = Object.values(users);
        setNewHires(
          allUsers.filter(
            (employee) =>
              employee.managerId === null &&
              employee.employeeStatus === "Active"
          )
        );
        setLeavers(
          allUsers.filter(
            (employee) =>
              employee.terminationDate !== null && employee.jobCode !== "L0000"
          )
        );
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <img
        className="banner"
        src="https://media.mktg.workday.com/is/image/workday/workday-yellow?fmt=png-alpha&wid=1664"
      />
      <h3>Onboard New Hires</h3>
      <EmployeeList employees={newHires} />
      <h3>Offboard Employees</h3>
      <EmployeeList employees={leavers} displayTerminationDate />
    </>
  );
};

export default HR;
