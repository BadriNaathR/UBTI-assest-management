import React, { useState } from 'react';

const AssetManagementPortal = () => {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [laptopDetails, setLaptopDetails] = useState({});
  const [monitorDetails, setMonitorDetails] = useState({});
  const [keyboardDetails, setKeyboardDetails] = useState({});
  const [mouseDetails, setMouseDetails] = useState({});



  const handleEmployeeSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeDetails),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLaptopSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/laptops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(laptopDetails),
        
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMonitorSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/monitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(monitorDetails),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyboardSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/keyboards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(keyboardDetails),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/mice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mouseDetails),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Asset Management Portal</h1>
      <form onSubmit={handleEmployeeSubmit}>
        <h2>Employee Details</h2>
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeDetails.name}
          onChange={(event) =>
            setEmployeeDetails({...employeeDetails, name: event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Employee Email"
          value={employeeDetails.email}
          onChange={(event) =>
            setEmployeeDetails({...employeeDetails, email: event.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleLaptopSubmit}>
        <h2>Laptop Details</h2>
        <input
          type="text"
          placeholder="HostName"
          value={laptopDetails.hostName}
          onChange={(event) =>
            setLaptopDetails({...laptopDetails, hostName: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Model"
          value={laptopDetails.model}
          onChange={(event) =>
            setLaptopDetails({...laptopDetails, model: event.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleMonitorSubmit}>
        <h2>Monitor Details</h2>
        <input
          type="text"
          placeholder="Monitor Brand"
          value={monitorDetails.brand}
          onChange={(event) =>
            setMonitorDetails({...monitorDetails, brand: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Monitor Model"
          value={monitorDetails.model}
          onChange={(event) =>
            setMonitorDetails({...monitorDetails, model: event.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleKeyboardSubmit}>
        <h2>Keyboard Details</h2>
        <input
          type="text"
          placeholder="Keyboard Brand"
          value={keyboardDetails.brand}
          onChange={(event) =>
            setKeyboardDetails({...keyboardDetails, brand: event.target.value })
          }
        />
            <input
              type="text"
              placeholder="Keyboard Model"
              value={keyboardDetails.model}
              onChange={(event) =>
                setKeyboardDetails({...keyboardDetails, model: event.target.value })
              }
            />
            <button type="submit">Submit</button>
          </form>
    
          <form onSubmit={handleMouseSubmit}>
            <h2>Mouse Details</h2>
            <input
              type="text"
              placeholder="Mouse Brand"
              value={mouseDetails.brand}
              onChange={(event) =>
                setMouseDetails({...mouseDetails, brand: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Mouse Model"
              value={mouseDetails.model}
              onChange={(event) =>
                setMouseDetails({...mouseDetails, model: event.target.value })
              }
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
export default AssetManagementPortal;