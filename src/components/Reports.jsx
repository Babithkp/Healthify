import { FcPlus } from "react-icons/fc";
import logo from "../assets/healthify2.png";
import NewReportForm from "./NewReportForm";
import PatientDetails from "./PatientDetails";
import AdminHospital from "./AdminHospital";
import OldReport from "./OldReport";
import { useState } from "react";
function Reports() {
  const [addNewReport,setAddNewReport] = useState(true)
  function changeHandler(){
    setAddNewReport(prev=> !prev)
  }
  return (
    <div className="w-[80%] p-8  bg-white rounded-lg shadow-md ">
      <header className=" border-b-2 flex justify-between h-[20%] items-center  w-full">
        <AdminHospital/>
        <picture className=" w-[15%] p-3">
          <img src={logo} className=" "></img>
        </picture>
      </header>
      <PatientDetails/>
      {addNewReport && <OldReport/>}
      {!addNewReport && <NewReportForm onRemoveForm={changeHandler}/>}
      {addNewReport && <div className="flex justify-center w-full mt-4">
        <button onClick={()=>setAddNewReport(false)} className="w-36 h-12 justify-center gap-2 items-center rounded-xl outline-none flex text-white bg-navy hover:-translate-y-1 duration-300 active:translate-y-1">
          <FcPlus size="2em" />
          <p>Add Report</p>
        </button>
      </div>}
    </div>
  );
}

export default Reports;
