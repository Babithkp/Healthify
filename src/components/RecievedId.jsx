import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function RecievedId() {
  const [copy, setCopy] = useState("123456789");

  const copiedHandler = () => {
    navigator.clipboard.writeText(copy);
  };

  const copyHandler = (event) => {
    setCopy(event.target.value);
  };
  return (
    <>
      <div className=" flex flex-col justify-center w-[50%] h-[20rem]">
        <label className=" text-lg font-bold">Generated ID for Mr. Param</label>
        <section className="flex">
          <input
            value={copy}
            className="w-full h-10 bg-white p-4 mt-4"
            disabled
            onChange={copyHandler}
          />
          <button
            className="w-18  h-10 mt-4 ml-2 bg-navy p-3 rounded-lg text-white active:-scale-[.9] "
            onClick={copiedHandler}
          >
            <BiCopy size="1.5rem" className="mt-[-.3rem]" />
          </button>
        </section>
        <p>**Please share Id to The Patient**</p>
        <NavLink to='/adminLogin' className=" w-20 flex justify-center bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1 mt-4">
          Close
        </NavLink>
      </div>
    </>
  );
}

export default RecievedId;
