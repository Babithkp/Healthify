function PatientDetails() {
  return (
    <section className="grid grid-cols-2 py-4 border-b">
        <div>
          <label>Patient Name: </label>
          <input
            value="Mr. Param"
            disabled
            className=" mb-4 ml-3 h-8 w-[70%] p-4"
          />
        </div>
        <div>
          <label>Phone No: </label>
          <input
            value="123456789"
            disabled
            className="mb-4 ml-3 h-8 p-4 w-[70%]"
          />
        </div>
        <div>
          <label>Age/Sex: </label>
          <input
            value="26/Male"
            disabled
            className="mb-4 ml-12 pl-4 h-8 w-[70%]"
          />
        </div>
        <div>
          <label>Health Id: </label>
          <input
            value="MH0012875"
            disabled
            className=" mb-4 ml-3 h-8 w-[70%] p-4"
          />
        </div>
      </section>
  )
}

export default PatientDetails