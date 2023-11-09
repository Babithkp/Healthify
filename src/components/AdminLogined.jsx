import { NavLink } from "react-router-dom";

function AdminLogined() {
  return (
    <div className=" p-4  h-full row-span-full mt-16 ">
      <h1 className=" font-bold text-2xl">Manipal Hospital</h1>
      <p className=" font-medium border-b-2 text-2xl border-black">
        Manipal Hospital, HAL airpost road, bengaluru
      </p>
      <form className=" font-medium text-right my-8 p-4 bg-light-navy rounded-md">
        <label className=" mr-4 font-medium">Search Patients: </label>
        <input
          placeholder="Enter HealthId"
          type="text"
          className="w-[70%] p-2 my-4"
          required
          minLength='6'
          maxLength='6'
        />
        <NavLink to='/reports' className=" bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1">
          Search
        </NavLink>
      </form>
      <NavLink
        to="/createID"
        className=" bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1 font-bold"
      >
        Create Health ID
      </NavLink>
    </div>
  );
}

export default AdminLogined;
