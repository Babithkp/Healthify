import { useState } from "react";

function NewReport({onAdd}) {
  const [testName, setTestName] = useState("")
  const [testResult, setTestResult] = useState("")
  const [testUnits, setTestUnits] = useState("")
  const [testRange, setTestrange] = useState("")
  const reportClickHandler = () => {
    onAdd(testName,testResult,testUnits,testRange)
    setTestName("")
    setTestResult("")
    setTestUnits("")
    setTestrange("")
  };

  const testNameHandler = (event) => {
    setTestName(event.target.value)
  };
  const resultHandler = (event) => {
    setTestResult(event.target.value)
  };
  const unitsHandler = (event) => {
    setTestUnits(event.target.value)
  };
  const rangeHandler = (event) => {
    setTestrange(event.target.value)
  };
  return (
    <>
      <input
        placeholder="Enter Test Name"
        className="my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1 col-start-1"
        type="text"
        onChange={testNameHandler}
        value={testName}
      />
      <input
        placeholder="Enter the result of test"
        className="my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1 "
        type="text"
        onChange={resultHandler}
        value={testResult}
      />
      <input
        placeholder="Enter in units"
        className="my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1 "
        type="text"
        onChange={unitsHandler}
        value={testUnits}
      />
      <input
        placeholder="Enter average range"
        className="my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1 "
        type="text"
        onChange={rangeHandler}
        value={testRange}
      />
      <button onClick={reportClickHandler} className=" col-start-5 row-start-2 bg-blue-400 p-2 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1">
        Add test
      </button>
    </>
  );
}

export default NewReport;
