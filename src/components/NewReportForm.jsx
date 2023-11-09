import NewMedicine from "./NewMedicine";
import { useRef, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import NewReport from "./NewReport";

function NewReportForm({onRemoveForm}) {
  const [reportTitle, setReportTitle] = useState("");
  const [billDate, setBillDate] = useState("");
  const [prescription, setPrescription] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [admissionType, setAdmissionType] = useState("");
  const [summary, setSummary] = useState("");
  const [doc, setDoc] = useState(null);
  const submittedReport = {};
  const totalmedicine = {
    medicine: [],
    reports: [],
  };

  const [overallReport, setOverallReport] = useState(submittedReport);
  const [singleMedicine, setSingleMedicine] = useState(totalmedicine);
  const [storeReport, setStoreReport] = useState(totalmedicine);
  const FormSubmitHandler = () => {
    setOverallReport({
      reportTitle,
      billDate,
      prescription,
      doctorName,
      facilityName,
      diagnosis,
      admissionDate,
      dischargeDate,
      admissionType,
      summary,
      doc,
      singleMedicine,
      storeReport,
    });
    setReportTitle("");
    setBillDate("");
    setPrescription("");
    setDoctorName("");
    setFacilityName("");
    setDiagnosis("");
    setAdmissionDate("");
    setAdmissionType("");
    setSummary("");
    setDoc("");
  };

  const addReportHandler = (
    reportName,
    reportResult,
    reportUnits,
    reportRange
  ) => {
    setStoreReport((prevReport) => {
      const teskId = Math.random();
      const newReport = {
        id: teskId,
        reportName,
        result: reportResult,
        units: reportUnits,
        reportRange,
      };
      return {
        ...prevReport,
        reports: [newReport, ...prevReport.reports],
      };
    });
  };
  const deleteReport = (id) => {
    setStoreReport((prevReport) => {
      return {
        ...prevReport,
        reports: prevReport.reports.filter((report) => report.id !== id),
      };
    });
  };
  const addMedicineHandler = (typeOfMed, medicine, intakemedicine, period) => {
    setSingleMedicine((prevMed) => {
      const teskId = Math.random();
      const newMed = {
        id: teskId,
        typeOfMed,
        medicine,
        intakemedicine,
        period,
      };
      return {
        ...prevMed,
        medicine: [newMed, ...prevMed.medicine],
      };
    });
  };
  const deleteMedicine = (id) => {
    setSingleMedicine((prevMed) => {
      return {
        ...prevMed,
        medicine: prevMed.medicine.filter((medicine) => medicine.id !== id),
      };
    });
  };
  function titleHandler(event) {
    setReportTitle(event.target.value);
  }
  function billHandler(event) {
    setBillDate(event.target.value);
  }
  function prescriptionHandler(event) {
    setPrescription(event.target.value);
  }
  function doctorNameHandler(event) {
    setDoctorName(event.target.value);
  }
  function facilityNameHandler(event) {
    setFacilityName(event.target.value);
  }
  function diagnosisHandler(event) {
    setDiagnosis(event.target.value);
  }
  function admissionDateHandler(event) {
    setAdmissionDate(event.target.value);
  }
  function dischargeDateHandler(event) {
    setDischargeDate(event.target.value);
  }
  function admissionTypeHandler(event) {
    setAdmissionType(event.target.value);
  }
  function summaryHandler(event) {
    setSummary(event.target.value);
  }
  const inputFileHandlander = (event) => {
    setDoc(event.target.files[0]);
  };
  return (
    <>
      
      <div className="w-full grid grid-cols-3">
        <div className="p-4">
          <label className="text-md font-medium">Report Title</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="text"
            placeholder="Enter Title for this Report"
            value={reportTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Billing Date</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="date"
            value={billDate}
            onChange={billHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Prescription No.</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="number"
            placeholder="Enter Prescription number"
            value={prescription}
            onChange={prescriptionHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Doctor Name</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="text"
            placeholder="Enter Doctor Name"
            value={doctorName}
            onChange={doctorNameHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Facility Name</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="text"
            placeholder="Enter Facility Name"
            value={facilityName}
            onChange={facilityNameHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Diagnosis</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="text"
            placeholder="Enter All Diagnosis with comas"
            value={diagnosis}
            onChange={diagnosisHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Date of Admission</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1"
            type="date"
            value={admissionDate}
            onChange={admissionDateHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Date of Discharge</label>
          <input
            className=" my-2 outline-light-navy text-base font-medium w-full bg-slate-100 drop-shadow-md p-1 "
            type="date"
            value={dischargeDate}
            onChange={dischargeDateHandler}
          />
        </div>
        <div className="p-4">
          <label className="text-md font-medium">Type of Admission</label>
          <select
            className="w-full bg-slate-100 h-8 my-3 shadow-md outline-light-navy"
            id="admission"
            value={admissionType}
            onChange={admissionTypeHandler}
          >
            <option value="">--Please select---</option>
            <option value="OPD">OPD</option>
            <option value="dayCare">Day care</option>
            <option value="inpatient">Inpatient</option>
          </select>
        </div>
        <div className="col-span-full  p-4">
          <label className=" font-bold">Final Report</label>
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr,10%] gap-2 py-2 border-t-2">
            <label className=" font-medium ">Test Name</label>
            <label className=" font-medium">Results</label>
            <label className=" font-medium">Units</label>
            <label className=" font-medium">Bio. Ref. Interval</label>

            <NewReport onAdd={addReportHandler} />
            {storeReport.reports.map((report) => (
              <ul
                key={report.id}
                className="flex justify-between mb-2 col-span-full"
              >
                <li>{report.reportName}</li>
                <li>{report.result}</li>
                <li>{report.units}</li>
                <li>{report.reportRange}</li>
                <button
                  className="rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1"
                  onClick={() => deleteReport(report.id)}
                >
                  <IoCloseCircle size="1.2em" className=" text-navy" />
                </button>
              </ul>
            ))}
          </div>
        </div>
        <div className="p-4 col-span-full">
          <label className="text-md font-bold ">Medication</label>
          <NewMedicine onAdd={addMedicineHandler} />
          {singleMedicine.medicine.map((items, i) => (
            <ul key={items.id} className="flex justify-between mb-2">
              <li>{i + 1}.</li>
              <li>{items.typeOfMed}</li>
              <li>{items.medicine}</li>
              <li>{items.intakemedicine}</li>
              <li>{items.period}</li>
              <button
                onClick={() => deleteMedicine(items.id)}
                className=" rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1"
              >
                <IoCloseCircle size="1.2em" className=" text-navy" />
              </button>
            </ul>
          ))}
        </div>
        <div className=" col-span-2">
          <label className=" text-lg font-medium underline">Summary</label>

          <textarea
            onChange={summaryHandler}
            value={summary}
            className="w-full h-28 mt-4 bg-slate-100 drop-shadow-md p-3 outline-light-navy"
            placeholder="Enter Doctor Summary"
          />
        </div>
        <div className=" text-center">
          <label className=" font-medium p-4">Upload File</label>
          <input
            type="file"
            className=" bg-slate-100 my-4 drop-shadow-md focus:outline-light-navy"
            onChange={inputFileHandlander}
          />
        </div>
      </div>
      <button
        onClick={FormSubmitHandler}
        className="w-32 bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1 mt-4 mr-4"
      >
        Submit
      </button>
      <button
        onClick={()=>onRemoveForm()}
        className="w-32 bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1 mt-4"

      >
        Close
      </button>
    </>
  );
}

export default NewReportForm;
