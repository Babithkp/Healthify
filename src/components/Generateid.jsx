import { NavLink } from "react-router-dom";

function Generateid({onClick}) {
  function buttonClick(){
    onClick()
  }
  return (
    <>
      <form className=" h-[85%] grid grid-cols-[49%,2%,49%] grid-rows-[2rem,1fr,3rem] w-[90%] ">
        <label className=" text-xl font-bold col-span-full">
          Fill all the details of Patient to create Health Id
        </label>
        <div className=" place-items-start row-start-2">
          <div className="w-full">
            <label className="text-lg font-medium">Enter First Name</label>
            <input
              type="text"
              placeholder="Enter patients First Name"
              className=" mb-3 h-10 w-full p-1 focus:outline-light-navy"
              required
            />
          </div>

          <div className="w-full">
            <label className="text-lg font-medium">Enter Date of birth</label>
            <input
              type="date"
              className=" mb-3 h-10 w-full p-1  focus:outline-light-navy"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium">Enter Phone Number</label>
            <input
              type="tel"
              placeholder="Enter pateints Phone Number"
              pattern="[0-9]{10}"
              className="mb-3  h-10 w-full p-1  focus:outline-light-navy"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium">Enter Email Id</label>
            <input
              type="email"
              placeholder="Enter pateints Email Id"
              className="  h-10 w-full p-1  focus:outline-light-navy"
              required
            />
          </div>
        </div>
        <div className=" col-start-3">
          <div className="w-full">
            <label className="text-lg font-medium">Enter Second Name</label>
            <input
              type="text"
              placeholder="Enter patients Second Name"
              className=" mb-3 h-10 w-full p-1 focus:outline-light-navy"
              required
            />
          </div>
          <div>
            <label form="gender" className="text-lg font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="Select Gender"
              className="w-full h-10 focus:outline-light-navy p-1 mb-3"
            >
              <option value="Male">-------Select Gender-------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="text-lg font-medium">Enter Patient Address</label>
            <textarea
              type="text"
              placeholder="Enter patients Address"
              className=" mb-3 h-[7.5rem] w-full p-1 focus:outline-light-navy"
              required
            />
          </div>
          <button onClick={buttonClick} className=" w-32 bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1">
            Genarate ID
          </button>
        </div>
      </form>
    </>
  );
}

export default Generateid;
