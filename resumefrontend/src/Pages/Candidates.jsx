import React, { useState } from "react";
import { JDTextArea } from "../Components/TextArea/JDTextArea";
import { CandidateTable } from "../Components/Table/CandidateTable";
import Button from 'react-bootstrap/Button';
import axios from "axios";


export const Candidates = () => {

  const [jdValue, setJdValue] = useState({
    jd: ''
  });

  const handleJdCandidates = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/', jdValue)
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }
  console.log(jdValue)

  return (
    <div className="m-4">
      <div className="d-flex align-items-center w-100 gap-3 mb-3">
        <JDTextArea setJdValue={setJdValue} jdValue={jdValue} />
        <Button variant="primary" onClick={handleJdCandidates}>Primary</Button>
      </div>
      <CandidateTable />
    </div>
  );
};
