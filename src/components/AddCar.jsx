import { useState } from 'react';
import logo from '../images/logo.png'
import tick from '../images/tick.jpg'

const AddCar = (props) => {
   const  [plate , setPlate] = useState("");
   const [name , setName] = useState("");
   const [status , setStatus] = useState("Park Car")
   const [validate , setValidate] = useState("");

   const dataHandler = (e)=>{
      e.preventDefault();
      const allCars = JSON.parse(localStorage.getItem('car'))
     const checkin = Date.now();
     const chekout = checkin + 200000; 
     const data = {
      plate,
      name,
      checkin,
      chekout
     }

     if(data.name == "" || data.plate == ""){
      return setValidate("Please fll all the fiels*")
     }else{
      if( allCars == null || allCars == undefined  ){
      localStorage.setItem('car' , JSON.stringify([]))
      }else{
      setStatus("Parking...")
      allCars.push(data);
     localStorage.setItem('car' , JSON.stringify(allCars))
     setPlate("");
     setName("");
     props.setBack(false , "Car parked successfully for 4mins!!")
      }
     }
   }  

   const setBack = ( ) => {
      props.setBack(false)
   }

    return (  
        <div className="h-[100%] w-[100%] bg-gray-400 flex justify-center items-center absolute top-0 left-0">
            <div className="bg-white w-[40%] rounded-md">
            <button onClick={setBack} className='py-2 px-4 ml-3 mt-3 rounded-md text-white bg-purple-500 '>Cancel</button>
               <div className='w-[100%] h-[5vh] mt-2 flex justify-center'>
               <img src={logo} alt="" className='h-[5vh]' />
               </div>
               <h1 className='text-xl text-center my-2'><span className='text-purple-500 text-2xl'>C</span>ar      <span className='text-purple-500 text-2xl'>P</span>ark</h1>
               <p className='my-2 text-center'>Fill the given form to park your car </p>
               <div className='w-[100%] my-3 flex flex-col justify-center items-center'>
                  <h1 className=' text-red-400'>{validate}</h1>
                 <form action="" onSubmit={dataHandler}>
                    <div className='w-[100%] my-3 flex flex-col justify-center items-center'>
                    <input value={plate} type="text" name="" id=""  className='w-[90%] border border-purple-500 my-2 rounded-md py-2 pl-2' placeholder="The car's plate" onChange={(e)=>{
                       setPlate(e.target.value)
                    }}/>
                    <input value={name} type="text" name="" id="" className='w-[90%] border border-purple-500 my-2 rounded-md py-2 pl-2' placeholder="The driver's name" onChange={(e)=>{
                     setName(e.target.value)
                    }} />
                    <button className='bg-purple-500 text-white py-2 px-5 rounded-md my-2'>{status}</button>
                    </div>
                 </form>
               </div>
            </div>
            
        </div>
     );
}
 
export default AddCar;