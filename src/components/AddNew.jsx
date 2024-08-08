import React, { useState } from 'react';
import { refreshList, submitForm } from './formhandler';
import { useNavigate } from 'react-router-dom';


function EmployeeForm() {
  const [empid, setEmpid] = useState('');
  const [empname, setEmpname] = useState('');
  const [deptname, setDeptname] = useState('');
  const [seatno, setSeatno] = useState('');

  const [laphost, setLaphost] = useState('');
  const [lapmodel, setLapmodel] = useState('');
  const [Processor, setProcessor] = useState('');
  const [RAM, setRAM] = useState('');
  const [HDD, setHDD] = useState('');
  const [warrenty, setWarrenty] = useState('');
  const [assigned, setAssigned] = useState('');

  const [moniid, setMoniid] = useState('');
  const [monibrand, setMonibrand] = useState('');
  const [monisn, setMonisn] = useState('');
  const [size, setSize] = useState('');
  const [servicetag, setServicetag] = useState('');

  const [keyID, setKeyID] = useState('');
  const [keybrand, setKeybrand] = useState('');
  const [keytype, setKeytype] = useState('');
  const [keysn, setKeysn] = useState('');

  const [mousebrand, setMousebrand] = useState('');
  const [mousemodel, setMousemodel] = useState('');
  const [mouseID, setMouseID] = useState('');
  const [mousetype, setMousetype] = useState('');
  const [mousesn, setMousesn] = useState('');

  const history = useNavigate();

  const goToLaptop = () => {
    document.querySelector('input[aria-label="Laptop Details"]').checked = true;
  };

  const goTomonitor = () => {
    document.querySelector('input[aria-label="Monitor Details"]').checked = true;
  };

  const goTokeyorad = () => {
    document.querySelector('input[aria-label="Keyboard Details"]').checked = true;
  };

  const goTomouse = () => {
    document.querySelector('input[aria-label="Mouse Details"]').checked = true;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(empid, empname, deptname, seatno, 
               laphost, lapmodel, Processor, RAM, HDD, warrenty, assigned,
               moniid, monibrand, monisn, size, servicetag,
               keyID, keybrand, keytype, keysn,
               mousebrand, mousemodel, mouseID, mousetype, mousesn
            );
            history.push('/');
            
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <section className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Fill the details</h2>

          
          <form onSubmit={handleSubmit}>
            <div className="mt-5 bg-white rounded-lg shadow">
            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Employee Details" defaultChecked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h1 className="inline text-2xl font-semibold leading-none">Employee Details</h1>
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                    <input 
                      placeholder="Employee Id" 
                      name="empid" 
                      value={empid} 
                      onChange={(e) => setEmpid(e.target.value)} 
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      required />
                  </div>
                  <div className="flex-grow w-1/4 pr-2">
                    <input 
                      placeholder="Dept Name" 
                      name="empdept" 
                      value={deptname} 
                      onChange={(e) => setDeptname(e.target.value)} 
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      required />
                  </div>
                </div>
                <input 
                  placeholder="Employee Name" 
                  name="empname" 
                  value={empname} 
                  onChange={(e) => setEmpname(e.target.value)} 
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  required />
                <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                    <input 
                      placeholder="Seat Number" 
                      name="empseatno" 
                      value={seatno} 
                      onChange={(e) => setSeatno(e.target.value)} 
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      required />
                  </div>
                </div>
              <div className="flex justify-center p-3">
              <button
                    type="button"
                    className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                    onClick={goToLaptop}
                >
                Next
                </button>
              </div>
              </div>
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Laptop Details"
     />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        
    <div className="widget">
      
        <div className="flex">
          <div className="flex-1 py-5 pl-5 overflow-hidden">
            <h1 className="inline text-2xl font-semibold leading-none">Laptop Details</h1>
          </div>
        </div>
        <div className="px-5 pb-5">
          <div className="flex">
            <div className="flex-grow pr-2">
              <input
                type="text"
                placeholder="HostName"
                value={laphost}
                onChange={(e) => setLaphost(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div className="flex-grow pr-2">
              <input
                type="text"
                placeholder="Model"
                value={lapmodel}
                onChange={(e) => setLapmodel(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Service Tag"
                value={servicetag}
                onChange={(e) => setServicetag(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="Processor"
            value={Processor}
            onChange={(e) => setProcessor(e.target.value)}
            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />

          <div className="flex">
            <div className="flex-grow w-1/4 pr-2">
              <input
                type="text"
                placeholder="HDD"
                value={HDD}
                onChange={(e) => setHDD(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="RAM"
                value={RAM}
                onChange={(e) => setRAM(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>

          <div className="flex pb-3">
            <div className="flex-grow w-1/4 pr-2">
              <h3 className="pl-1 pt-2">Warrenty End Date</h3>
              <input
                type="date"
                placeholder="Warrenty End Date"
                value={warrenty}
                onChange={(e) => setWarrenty(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <div className="flex-grow">
              <h3 className="pl-1 pt-2">Assigned Date</h3>
              <input
                type="date"
                placeholder="Assigned Date"
                value={assigned}
                onChange={(e) => setAssigned(e.target.value)}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center p-3">
              <button
                    type="button"
                    className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                    onClick={goTomonitor}
                >
                Next
                </button>
              </div>
    </div>
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Monitor Details"
     />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="widget">
                  
                    <div className="flex">
                      <div className="flex-1 py-5 pl-5 overflow-hidden">
                        <h1 className="inline text-2xl font-semibold leading-none">Monitor Details</h1>
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="flex">
                        <div className="flex-grow w-1/4 pr-2">
                          <input 
                            placeholder="Monitor Id" 
                            name="monitorid" 
                            value={moniid} 
                            onChange={(e) => setMoniid(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div className="flex-grow w-1/4 pr-2">
                          <input 
                            placeholder="Brand" 
                            name="monitorBrand" 
                            value={monibrand} 
                            onChange={(e) => setMonibrand(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-grow pr-2">
                          <input 
                            placeholder="Monitor S/N" 
                            name="monitorsn" 
                            value={monisn} 
                            onChange={(e) => setMonisn(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          <div className="flex-grow pr-2">
                            <input 
                              placeholder="Size" 
                              name="monitorsize" 
                              value={size} 
                              onChange={(e) => setSize(e.target.value)} 
                              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          <div className="flex-grow">
                            <input 
                              placeholder="Service Tag" 
                              name="monitortag" 
                              value={servicetag} 
                              onChange={(e) => setServicetag(e.target.value)} 
                              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center p-3">
              <button
                    type="button"
                    className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                    onClick={goTokeyorad}
                >
                Next
                </button>
              </div>
                  </div>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Keyboard Details" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="widget">
                    
                      <div className="flex">
                        <div className="flex-1 py-5 pl-5 overflow-hidden">
                          <h1 className="inline text-2xl font-semibold leading-none">Keyboard</h1>
                        </div>
                      </div>
                      <div className="px-5 pb-5">
                        <div className="flex">
                          <div className="flex-grow w-1/4 pr-2">
                            <input 
                              placeholder="Keyboard Brand" 
                              value={keybrand} 
                              onChange={(e) => setKeybrand(e.target.value)} 
                              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-grow pr-2">
                            <input 
                              placeholder="Keyboard ID " 
                              value={keyID} 
                              onChange={(e) => setKeyID(e.target.value)} 
                              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          <div className="flex-grow pr-2">
                            <input 
                              placeholder="Keyboard Type" 
                              value={keytype} 
                              onChange={(e) => setKeytype(e.target.value)} 
                              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          <div className="flex-grow">
                            <input 
                              placeholder="Keyboard S/N" 
                              value={keysn} 
                              onChange={(e) => setKeysn(e.target.value)} 
                              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          </div>
                    </div>

                    <div className="flex justify-center p-3">
              <button
                    type="button"
                    className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                    onClick={goTomouse}
                >
                Next
                </button>
                    </div>
                    
            </div>
  </div>


  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Mouse Details"
     />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    <div className="widget">
                  
                    <div className="flex">
                      <div className="flex-1 py-5 pl-5 overflow-hidden">
                        <h1 className="inline text-2xl font-semibold leading-none">Mouse</h1>
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="flex">
                        <div className="flex-grow w-1/4 pr-2">
                          <input 
                            placeholder="Mouse Brand" 
                            value={mousebrand} 
                            onChange={(e) => setMousebrand(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-grow pr-2">
                          <input 
                            placeholder="Mouse ID" 
                            value={mouseID} 
                            onChange={(e) => setMouseID(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div className="flex-grow pr-2">
                          <input 
                            placeholder="Mouse Type" 
                            value={mousetype} 
                            onChange={(e) => setMousetype(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                        <div className="flex-grow">
                          <input 
                            placeholder="Mouse S/N" 
                            value={mousesn} 
                            onChange={(e) => setMousesn(e.target.value)} 
                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white   focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center p-3">
                <div className="flex-initial pl-3">
                    <button
                    type="submit"
                    className="flex items-center px-8 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                    onClick={handleSubmit}
                >
          Submit
        </button>
      </div>
            </div>         
    </div>
  </div>
          </div>
          </div>
            
          </form>
        </section>
      </div>
    </div>
  );
};

export default EmployeeForm;