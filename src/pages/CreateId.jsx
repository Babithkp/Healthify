import { useState } from "react";
import loginImg from "../assets/doctorCard.svg";
import logo from '../assets/healthify2.png'
import Generateid from "../components/Generateid";
import RecievedId from "../components/RecievedId";

function CreateId() {
  const [buttonClick,setButtonClick] = useState(false)
  const clickHandler = () =>{
    setButtonClick(true)
  }
  return (
    <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-md flex overflow-hidden mt-20">
      <div className=" h-full relative">
      <img src={logo} className='w-[10rem] absolute right-0'/>
        <img src={loginImg} className="h-[120%]  " />
      </div>
      <div className=" bg-light-blue w-[100%] h-full rounded-lg flex  flex-col items-center ">
        <h3 className=" text-2xl font-bold mt-4">Health ID</h3>
          {!buttonClick && <Generateid onClick={clickHandler}/>}
          {buttonClick && <RecievedId/>}
      </div>
    </div>
  );
}

export default CreateId;
