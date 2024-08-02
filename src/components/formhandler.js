import { useState, useEffect } from 'react';

const API_URL = "http://localhost:5038/";

const refreshList = async () => {
  try {
    const response = await fetch(API_URL + "api/Assest/employee");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const submitForm = async (empid, empname, deptname, seatno,
  laphost, lapmodel, Processor, RAM, HDD, warrenty, assigned,
  moniid, monibrand, monisn, size, servicetag,
  keyID, keybrand, keytype, keysn,
  mousebrand, mousemodel, mouseID, mousetype, mousesn) => {
  try {
    const response = await fetch(API_URL + 'api/Assest/addemployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        empid, empname, deptname, seatno,
        laphost, lapmodel, Processor, RAM, HDD, warrenty, assigned,
        moniid, monibrand, monisn, size, servicetag,
        keyID, keybrand, keytype, keysn,
        mousebrand, mousemodel, mouseID, mousetype, mousesn
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export { refreshList, submitForm };