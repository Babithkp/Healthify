import { CgDetailsMore } from 'react-icons/cg';
function OldReport() {
  return (
    <ul className="grid grid-cols-[1fr,1fr,1fr,1fr,10%] bg-light-blue">
        <label className=" font-medium bg-light-navy p-2">Date</label>
        <label className='font-medium bg-light-navy p-2'>Hospital</label>
        <label className='font-medium bg-light-navy p-2'>Report Title</label>
        <label className='font-medium bg-light-navy p-2'>Intaken Dedicine</label>
        <label className='font-medium bg-light-navy '></label>
        <li className=' p-2'>12/10/23</li>
        <li className='p-2'>Manipal Hospital</li>
        <li className='p-2'>Blood Report</li>
        <li className='p-2'>Some Medicine</li>
        <button className='p-2'><CgDetailsMore size='2em'/></button>
        
        <li className=' p-2'>12/10/23</li>
        <li className='p-2'>Manipal Hospital</li>
        <li className='p-2'>Blood Report</li>
        <li className='p-2'>Some Medicine</li>
        <button className='p-2'><CgDetailsMore size='2em'/></button>
    </ul>
  );
}

export default OldReport;
