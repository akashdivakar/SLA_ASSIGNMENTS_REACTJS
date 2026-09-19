import { useState } from "react";

function EmployeeDetails() {
  const [isUpdated, setIsUpdated] = useState(false);

  // Multiple state variables
  const [empid, setEmpid] = useState(101);
  const [empname, setEmpname] = useState("John Doe");
  const [salary, setSalary] = useState(50000);
  const [desg, setDesg] = useState("Software Engineer");
  const [deptno, setDeptno] = useState(10);

  const toggleDetails = () => {
    if (!isUpdated) {
      setEmpid(102);
      setEmpname("Akash");
      setSalary(75000);
      setDesg("Senior Developer");
      setDeptno(20);
      setIsUpdated(true);
    } else {
      setEmpid(101);
      setEmpname("John Doe");
      setSalary(50000);
      setDesg("Software Engineer");
      setDeptno(10);
      setIsUpdated(false);
    }
  };

  return (
    <div>
      <h3>1. Employee Details (Multiple States)</h3>
      <p>Employee ID: {empid}</p>
      <p>Employee Name: {empname}</p>
      <p>Salary: ₹{salary}</p>
      <p>Designation: {desg}</p>
      <p>Department Number: {deptno}</p>
      <button onClick={toggleDetails}>
        {isUpdated ? "Reset to Default" : "Update Employee Details"}
      </button>
    </div>
  );
}

export default EmployeeDetails;
