import React, { useEffect, useState } from "react";

const Table = () => {
  const [userData, setUserData] = useState([]);
  const [registerDataTemp, setRegisterDataTemp] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isAtoZ, setIsAtoZ] = useState(true);
  useEffect(() => {
    const temp = [
      {
        userId: "krish",
        jobTitle: "Developer",
        firstName: "Krish",
        lastName: "Lee",
        employeeCode: "E1",
        region: "CA",
        phoneNumber: "123456",
        emailAddress: "krish.lee@learningcontainer.com",
      },
      {
        userId: "devid",
        jobTitle: "Developer",
        firstName: "Devid",
        lastName: "Rome",
        employeeCode: "E2",
        region: "CA",
        phoneNumber: "1111111",
        emailAddress: "devid.rome@learningcontainer.com",
      },
      {
        userId: "tin",
        jobTitle: "Program Directory",
        firstName: "tin",
        lastName: "jonson",
        employeeCode: "E3",
        region: "CA",
        phoneNumber: "2222222",
        emailAddress: "tin.jonson@learningcontainer.com",
      },
    ];
    setUserData(temp);
  }, []);
  const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));

  const handleLogOut = () => {
    localStorage.setItem("isLogin", false);
    localStorage.setItem("loginDetails", null);
    window.location.href = "";
  };
  const handleColumnClick = (columnName) => {
    setIsAtoZ(!isAtoZ);
    if (isAtoZ) {
      handleAtoZSort(columnName);
    } else {
      handleZtoASort(columnName);
    }
  };
  const handleAtoZSort = (column) => {
    debugger;
    userData.sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
    setUserData([...userData]);
  };
  const handleZtoASort = (column) => {
    userData.sort((a, b) => {
      if (a[column] < b[column]) return 1;
      if (a[column] > b[column]) return -1;
      return 0;
    });
    setUserData([...userData]);
  };
  const handleDeleteRecotd = (index) => {
    userData.splice(index, 1);
    setUserData([...userData]);
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  //   const handleSearch = (e) => {
  //     debugger;
  //     registerData.filter((x) => x.name.toLowerCase().includes(e.target.value));
  //     setRegisterData([...registerData]);
  //   };
  return (
    <div style={{ padding: "20px" }}>
      <label>User Name:{loginDetails[0].email}</label>
      <label onClick={handleLogOut}>LogOut</label>
      <div className="row">
        <label>Search:</label>
        <input
          type={"text"}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <h1>Employee List</h1>
      <div className="row">
        <div className="col-md-6">
          <table style={{}}>
            <tr>
              <th onClick={() => handleColumnClick("jobTitle")}>Job Title</th>
              <th onClick={() => handleColumnClick("firstName")}>firstName</th>
              <th onClick={() => handleColumnClick("lastName")}>Last Name</th>
              <th onClick={() => handleColumnClick("employeeCode")}>
                Employee Code
              </th>
              <th onClick={() => handleColumnClick("region")}>Region</th>
              <th onClick={() => handleColumnClick("phoneNumber")}>
                Phone Number
              </th>
              <th onClick={() => handleColumnClick("emailAddress")}>
                Email Address
              </th>
              <th>Action</th>
            </tr>
            {userData
              .filter((x) => x.firstName.toLowerCase().includes(searchValue))
              .map((item, index) => {
                return (
                  <React.Fragment>
                    <tr key={index}>
                      <td>{item.jobTitle}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.employeeCode}</td>
                      <td>{item.region}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.emailAddress}</td>
                      <td onClick={() => handleDeleteRecotd(index)}>Delete</td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </table>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Table;
