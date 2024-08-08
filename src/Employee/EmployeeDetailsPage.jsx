import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
 
const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5038/api/Assest/employee/${id}`);
        setEmployee(response.data);
      } catch (error) {
        setError('Error fetching employee details');
      } finally {
        setLoading(false);
      }
    };
 
    fetchEmployeeDetails();
  }, [id]);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!employee) return <p>No employee details available</p>;
 
  return (
<div>
<h1>Asset Details for {employee.empname}</h1>
<h2>Laptop Details</h2>
<p>HostName: {employee.laphost}</p>
<p>Model: {employee.lapmodel}</p>
<p>Processor: {employee.Processor}</p>
<p>RAM: {employee.RAM}</p>
<p>HDD: {employee.HDD}</p>
<p>Warranty End Date: {new Date(employee.warrenty).toLocaleDateString()}</p>
<p>Assigned Date: {new Date(employee.assigned).toLocaleDateString()}</p>
 
      <h2>Monitor Details</h2>
<p>Monitor ID: {employee.moniid}</p>
<p>Brand: {employee.monibrand}</p>
<p>Size: {employee.size}</p>
<p>Service Tag: {employee.servicetag}</p>
 
      <h2>Keyboard Details</h2>
<p>Keyboard ID: {employee.keyID}</p>
<p>Brand: {employee.keybrand}</p>
<p>Type: {employee.keytype}</p>
<p>Serial Number: {employee.keysn}</p>
 
      <h2>Mouse Details</h2>
<p>Mouse Brand: {employee.mousebrand}</p>
<p>Mouse ID: {employee.mouseID}</p>
<p>Type: {employee.mousetype}</p>
<p>Serial Number: {employee.mousesn}</p>
</div>
  );
};
 
export default EmployeeDetailsPage;