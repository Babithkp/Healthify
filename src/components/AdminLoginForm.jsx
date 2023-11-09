import { useState } from "react"

function AdminLoginForm({onSignIn,onlogging}) {
    const [typeError, setTypeError] = useState(false)
    const [hospitalId,setHospitalId] = useState("")
    const [adminId,setAdminId] = useState("")

    const adminSubmitHandler = (event) =>{
        event.preventDefault()
        if(hospitalId === "" || adminId === ""){
          setTypeError(true)
          return
        }
        onlogging()
        onSignIn(hospitalId,adminId)
        
    }
    const hospitalIdHandler =(event)=>{
        setHospitalId(event.target.value)
    }
    const adminIdHandler = (event)=>{
        setAdminId(event.target.value)
    }
  return (
    <>
      <h3 className=" text-2xl font-bold">ADMIN LOGIN</h3>
        <form onSubmit={adminSubmitHandler} className=" flex flex-col text-left items-start justify-around h-[60%] mb-20 w-[80%]">
          <div className="w-full mt-[5rem]">
            <label className="text-lg font-medium">Enter Hospital ID</label>
            <input
              type="text"
              placeholder="Enter Hospital ID"
              className=" mt-3 h-10 w-full p-1 focus:outline-light-navy"
              onChange={hospitalIdHandler}
              minLength='6'
              maxLength='6'
              required
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-medium">Adimn ID</label>
            <input
              type="text"
              placeholder="Enter Admin ID"
              className=" my-3 h-10 w-full p-1  focus:outline-light-navy"
              onChange={adminIdHandler}
              required
              minLength='6'
              maxLength='6'
            />
          </div>
          {typeError && <p className=" text-red-600 font-semibold mb-2">Please Fill ALl required Field</p>}
          <button  className=" bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1">
            Login
          </button>
        </form>
    </>
  )
}

export default AdminLoginForm