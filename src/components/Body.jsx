import AdminLogin from "../pages/AdminLogin"
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";
function Body() {
  return (
    <>
      <Navbar/>
    <div className="flex flex-col bg-slate-100  items-center min-h-screen">
        {/* <Login/> */}
        {/* <AdminLogin/> */}
        {/* <CreateId/> */}
        {/* <Reports/> */}
        <Outlet/>
    </div>
    </>
  )
}

export default Body