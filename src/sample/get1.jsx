import React, { useState, useEffect } from 'react';

function App() {
  const [employee, setEmployee] = useState({});
  const [laptops, setLaptops] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [keyboards, setKeyboards] = useState([]);
  const [mice, setMice] = useState([]);

  useEffect(() => {
    fetch('/api/employee/:id')
      .then(response => response.json())
      .then(data => setEmployee(data));

    fetch('/api/laptops')
      .then(response => response.json())
      .then(data => setLaptops(data));

    fetch('/api/monitors')
      .then(response => response.json())
      .then(data => setMonitors(data));

    fetch('/api/keyboards')
      .then(response => response.json())
      .then(data => setKeyboards(data));

    fetch('/api/mice')
      .then(response => response.json())
      .then(data => setMice(data));

      fetch('http://localhost:3000/api/laptops')
      .then(response => response.text())
      .then(data => console.log(data));
    
  }, []);


  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.email}</p>

      <h1>Laptop Details</h1>
      <ul>
        {laptops.map(laptop => (
          <li key={laptop._id}>
            <p>HostName: {laptop.hostName}</p>
            <p>Model: {laptop.model}</p>
          </li>
        ))}
      </ul>

      <h1>Monitor Details</h1>
      <ul>
        {monitors.map(monitor => (
          <li key={monitor._id}>
            <p>Monitor Brand: {monitor.brand}</p>
            <p>Monitor Model: {monitor.model}</p>
          </li>
        ))}
      </ul>

      <h1>Keyboard Details</h1>
      <ul>
        {keyboards.map(keyboard => (
          <li key={keyboard._id}>
            <p>Keyboard Brand: {keyboard.brand}</p>
            <p>Keyboard Model: {keyboard.model}</p>
          </li>
        ))}
      </ul>

      <h1>Mouse Details</h1>
      <ul>
        {mice.map(mouse => (
          <li key={mouse._id}>
            <p>Mouse Brand: {mouse.brand}</p>
            <p>Mouse Model: {mouse.model}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;