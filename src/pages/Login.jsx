import loginImg from '../assets/login.svg'
function Login() {
  return (
    <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-md flex mt-4">
        <div className='w-[50%] h-full'>
            <img src={loginImg} className='h-full '/>
        </div>
        <div className=' bg-light-blue w-[50%] rounded-lg grid grid-rows-[20%,50%] text-center justify-items-center items-center'>
            <h3 className=' text-2xl font-bold'>LOGIN</h3>
            <form className=' text-left  w-[80%]'>
                <div className='w-full'>
                <label className='text-lg font-medium'>Enter Health ID</label>
                <input type='text' placeholder='Enter your health ID' className=' mt-3 h-10 w-full p-1 focus:outline-light-navy'/>
                </div>
                <div className='w-full'>
                <label className='text-lg font-medium'>Enter Age</label>
                <input type='date' className=' my-3 h-10 w-full p-1  focus:outline-light-navy'/>
                </div>
                <button className=' bg-navy p-3 rounded-lg text-white hover:-translate-y-1 duration-300 active:translate-y-1'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login