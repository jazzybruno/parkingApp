import image from '../images/parkingimg.png'
import logo from '../images/logo.png'
import AddCar from '../components/AddCar';
import { useState } from 'react';
import Park from '../components/Park';

const Home = () => {
    const [car , setCar] = useState(false)
    const [carList , setCarList] = useState(false)
    const [successMessage , setsuccessMessage] =  useState("")

    const setItBack = (value  , message)=>{
        setCar(value);
        console.log(message);
        setsuccessMessage(message)
        setTimeout(()=>{
          setsuccessMessage("")
        } , 2000)
    }

    const setMySpace = (value) =>{
        setCarList(value)
    }

    return ( 
        <div className=" w-screen h-[100vh]">
           
            <div className="h-[100%] w-[100%] flex justify-center">
                  <div className="flex h-[100%] w-[40%] justify-center items-center flex-col">
                    <div className='flex justify-center w-[100%] '>
                        <img src={logo} alt="" className='h-[15vh] my-2' />
                    </div>
                    <h1 className='text-2xl'><span className='text-purple-500 text-3xl'>C</span>ar      <span className='text-purple-500 text-3xl'>P</span>ark</h1>
                    <h2 className='my-8 text-xl font-extrabold'>Welcome to Park  your Car!!</h2>
                    <div className='w-[100%] flex justify-center gap-10'>
                        <button className='p-3 px-7 flex justify-center rounded-md bg-purple-500 text-white  hover:bg-white hover:text-purple-500 hover:border  hover:border-purple-500' onClick={()=>{setCar(true)}}> Park a car</button>
                        <button className='p-3 px-7 flex justify-center  rounded-md bg-purple-500 text-white hover:bg-white hover:text-purple-500 hover:border  hover:border-purple-500' onClick={()=>{setCarList(true)}}>Parked Cars</button>
                    </div>
                    <p className='text-purple-500 my-5 '>{
                        successMessage
                    }</p>
                     </div>
                  <div className="flex h-[100%] w-[60%] justify-center items-center"> 
                  <img src={image} alt="" className=' object-cover' />
                  </div>
                  {
                    !car ? <></>  : <AddCar setBack={setItBack}></AddCar>
                  }
                  
                  {
                    !carList ? <></> : <Park setAllBack={setMySpace}   />
                  }
            </div>
        </div>
     );
}
 
export default Home;