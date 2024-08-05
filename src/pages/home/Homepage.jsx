import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Swal} from 'sweetalert2';

function App() {
  const API_URL = "http://localhost:5038/";
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const response = await fetch(API_URL + "api/Assest/employee");
    const data = await response.json();
    setNotes(data);
  };

  const addNewPage = () => {
    navigate('/assets');
  };

  const updateData = (id) => {
    // TO DO: implement update logic
  };

  const deleteData = async (id) => {
    const response = await fetch(API_URL + "api/Assest/deleteemployee?id=" + id, {
      method: 'DELETE',
    });
    const data = await response.json();
    alert(data);
    refreshList();
  };

  // const deleteData = async (id) => {
  //   try {
  //     const result = await Swal.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     });
  
  //     if (result.isConfirmed) {
  //       const response = await fetch(API_URL + "api/Assest/deleteemployee?id=" + id, {
  //         method: 'DELETE',
  //       });
  //       const data = await response.json();
  
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       );
  
  //       refreshList();
  //     }
  //   } catch (error) {
  //     Swal.fire(
  //       'Error!',
  //       'There was a problem deleting the data.',
  //       'error'
  //     );
  //   }
  // };
  

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <h1 className="flex justify-center text-2xl font-semibold leading-none">Employee Details</h1>

      <div className="flex flex-row-reverse p-3">
        <button onClick={addNewPage} type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out">
          Add New +
        </button>
      </div>
      <table className="w-full text-l text-left rtl:text-right text-black-100 dark:text-black-400">
        <thead className="text-l text-white bg-gray-600 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Seat Number
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note._id} className="bg-white hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:black-white">
                <a href="/abc">{note.empname}</a>
              </th>
              <td className="px-6 py-4">
                {note.empid}
              </td>
              <td className="px-6 py-4">
                {note.deptname}
              </td>
              <td className="px-6 py-4">
                {note.seatno}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex">
                  <div className="pr-5">
                    <button className="block text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={() => deleteData(note._id)}>
                      Delete
                    </button>
                  </div>

                  <div className="pl-5">
                    <button className="block text-black bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => updateData(note._id)}>
                      Edit
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;