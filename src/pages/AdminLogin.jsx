import { useCallback, useEffect, useState } from "react";
import loginImg from "../assets/doctor.svg";
import logo from "../assets/healthify2.png";
import AdminLoginForm from "../components/AdminLoginForm";
import AdminLogined from "../components/AdminLogined";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function AdminLogin() {
  const[isLogging,setIslogging] = useState(false)
  const[isFetchFail,setIsFetchFail] = useState(false)
  const [enterdID, setenterdID] = useState("")
  const loggingHandler = () =>{
    setIslogging(true)
  }
  const adminLoginHandler = (hospitalId,adminId)=>{
    setenterdID({
      adminId: adminId,
      hospitalId: hospitalId
    })
  }

  async function adminLogin(){
  try{

      const response = await fetch("https://healthify-ad309-default-rtdb.firebaseio.com/Healthify.json")
      if(!response.ok){
        setIsFetchFail(true)
      }else setIslogging(false)
      const data = await response.json()
      
      const adminData = []
      for(const key in data){
        adminData.push({
          id:key,
          adminId: data[key].adminId,
          hospitalId: data[key].hospitalid,
          hospitalName: data[key].hospitalName,
          hospitalAddress: data[key].hospitalAddress,
        })
      }
      console.log(adminData);
      
      const verification = adminData[0].adminId
      console.log(verification);
      
    }catch(err){
      setIsFetchFail(true)
}}
  useEffect(()=>{
    // adminLogin()
    // console.log(enterdID);
  },[enterdID])
  return (
    <div className=" relative w-[80%] h-[70%] bg-white rounded-lg shadow-md flex mt-4">
      {isFetchFail && <div className=" absolute bg-white text-center p-4 w-full z-50 top-[30%]">
        <h2 className=" font-bold text-lg">Fetch Failed!</h2>
        <p className=" font-medium">Please try Again Later</p>
        <button onClick={()=>setIsFetchFail(false)} className="bg-navy p-2 mt-4 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1">Close</button>
      </div>}
      {false && <div className=" bg-light-navy z-50 absolute right-[20%] top-[40%] w-42 p-4 flex items-center font-bold rounded-md">
        <AiOutlineLoading3Quarters size='2em' className=" animate-spin text-lg mr-4"/>
        <span>Processing...</span>
      </div>}
      <div className="w-[50%] h-full relative">
        <img src={logo} className="w-[12rem] absolute left-6" />
        <img src={loginImg} className="w-full h-full " />
      </div>
      <div className=" bg-light-blue w-[50%] rounded-lg grid grid-rows-[20%,50%] text-center justify-items-center items-center">
      {!isLogging && <AdminLoginForm onSignIn={adminLoginHandler} onlogging={loggingHandler}/>}
      {isLogging && <AdminLogined/>}
      </div>
    </div>
  );
}

export default AdminLogin;
