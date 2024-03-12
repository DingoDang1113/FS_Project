import { Tree, TreeNode } from "react-organizational-chart";
import Header from "../Header/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../utils/userUtils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneLevel from "./OneLevel";
import * as XLSX from "xlsx";
import "./Manager.css";

const Manager = ({ mgr }) => {
  const dispatch = useDispatch();
  const [nameList, setNameList] = useState([]);

  const loginEID = useSelector((state) => state.session?.currentUser);
  const currentUser = useSelector(
    (state) => state?.entities.users && state.entities.users[loginEID]
  );
  // console.log(currentUser.firstName + '_' + currentUser.lastName)

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        const directs = Object.values(users).filter(
          (employee) =>
            employee["managerId"] === (mgr ? mgr.employeeId : loginEID)
        );
        // console.log(Object.values(users)[4]['managerId'])
        const miniProfile = Object.values(directs).reduce((acc, employee) => {
          acc[employee.employeeId] = {
            employeeId: employee.employeeId,
            name: `${employee.firstName} ${employee.lastName}`,
            position: `${employee.positionDescription}`,
            employeeStatus: `${employee.employeeStatus}`,
            startDate: employee.startDate,
            level: employee.levelCode,
            levelDescription: employee.levelDescription,
            // manager: employee.managerId
          };
          // console.log("SHMs",employee)
          return acc;
        }, {});
        setNameList(miniProfile);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, []);

  const empIds = Object.keys(nameList);
  const employees = Object.values(nameList);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(employees);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(
      wb,
      `team_of_${currentUser.firstName + "_" + currentUser.lastName}.xlsx`
    );
  };

  // console.log('CHECH',Object.values(employees))

  return (
    <>
      <Header />

      <img
        className="banner"
        src="https://media.mktg.workday.com/is/image/workday/workday-yellow?fmt=png-alpha&wid=1664"
      />

      <div className="table">
        <div className="directs">
          <div className="field-name">Employee Id</div>
          <div className="field-name">Name</div>
          <div className="field-name">Employee Status</div>
          <div className="field-name">Start Date</div>
          <div className="field-name">Level</div>
          <div className="field-name">Position</div>

          {Object.values(nameList).map((employee) => (
            <div className="employee-row">
              <input type="text" value={employee.employeeId} />
              <input type="text" value={employee.name} />
              <input type="text" value={employee.employeeStatus} />
              <input type="date" value={employee.startDate} />
              <input type="text" value={employee.levelDescription} />
              <input type="text" value={employee.position} />
            </div>
          ))}
        </div>
        <button className="export" onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>

      <img
        className="directs-img"
        src="https://uploads-ssl.webflow.com/5e879c654fbaead2d1176c6b/6025744189ff5761ab2209e6_03_DigitalClassroom-p-1080.png"
      />
    </>
  );
};

export default Manager;
