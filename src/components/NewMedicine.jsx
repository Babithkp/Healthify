import { useState } from "react";

function NewMedicine({ onAdd }) {
  const [typeOfMed, setTypeOfMed] = useState("");
  const [medicine, setMedicine] = useState("");
  const [intakemedicine, setIntakeMedicine] = useState("");
  const [period, setPeriod] = useState("");

  const buttonHandler = (event) => {
    event.preventDefault();
    onAdd(typeOfMed, medicine, intakemedicine, period);

    setTypeOfMed("");
    setMedicine("");
    setIntakeMedicine("");
    setPeriod("");
  };
  const typeMedicineHandler = (event) => {
    setTypeOfMed(event.target.value);
  };
  const medicineHandler = (event) => {
    setMedicine(event.target.value);
  };
  const intakeHandler = (event) => {
    setIntakeMedicine(event.target.value);
  };
  const periodHandler = (event) => {
    setPeriod(event.target.value);
  };
  return (
    <section
      
      className="grid-cols-[1fr,1fr,1fr,1fr,15%] grid gap-3 pt-2 border-t-2 "
    >
      <label className="text-md font-medium">Select Type of Medicine</label>
      <label className="text-md font-medium">Medicine Name</label>
      <label className="text-md font-medium">Type of Intake</label>
      <label className="text-md font-medium">Time Peroid</label>
      <button className="bg-blue-400 p-1 row-start-2 col-start-5 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1" onClick={buttonHandler}>
        Add Medicine
      </button>

      <select
        onChange={typeMedicineHandler}
        id="mediceType"
        className="w-full drop-shadow-md my-2 h-8 bg-slate-100 focus:outline-light-navy row-span-2"
        value={typeOfMed}
      >
        <option>--Select one--</option>
        <option >TAB</option>
        <option >ING</option>
        <option >CAP</option>
        <option >Ointment</option>
        <option >R/S</option>
        <option>INH</option>
      </select>
      <input
        placeholder="Enter Medicine"
        className="p-2 bg-slate-100 my-2 w-full h-8 drop-shadow-md outline-light-navy"
        onChange={medicineHandler}
        value={medicine}
      />
      <select
        className="pl-2 bg-slate-100 my-2 w-full h-8 drop-shadow-md outline-light-navy"
        onChange={intakeHandler}
        value={intakemedicine}
      >
        <option>--Please Select--</option>
        <option>Every Morning</option>
        <option>Every Night</option>
        <option>Every 4 Hours</option>
        <option>Every Other day</option>
        <option>at Bedtime</option>
        <option>as Needed</option>
        <option>Before Meal</option>
        <option>After Meal</option>
        <option>1 Tea Spoon</option>
        <option>1 Tablespoonful</option>
      </select>
      <input
        placeholder="Enter Time Period"
        className="p-2 bg-slate-100 my-2 w-full h-8 drop-shadow-md outline-light-navy"
        onChange={periodHandler}
        value={period}
      />
    </section>
  );
}

export default NewMedicine;
