import { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import carphoto from '../images/car.png'

const Park = (props) => {
    const [carlist , setCarList] = useState([]);

    useEffect(()=>{
     const allcars = JSON.parse(localStorage.getItem('car'));
     if( allcars == null || allcars == undefined || allcars.length == 0 ){
       return;
     }else{
     for (let index = 0; index < allcars.length; index++) {
        if(allcars.chekout < Date.now()){
            allcars.slice(index)
        }
        
     }
     setCarList(allcars);
    }
    } , [])

    const setBack = ( ) => {
       props.setAllBack(false)
    }

    return ( 
        <div className="h-[100%] w-[100%] bg-gray-400 flex justify-center items-center absolute top-0 left-0">
        <div className="bg-white w-[40%] rounded-md h-[80%] overflow-auto">
            <button onClick={setBack} className='py-2 px-4 ml-3 mt-3 rounded-md text-white bg-purple-500 '>Home</button>
        <div className='flex justify-center w-[100%] '>
                        <img src={logo} alt="" className='h-[13vh] my-2' />
                    </div>
                    <h1 className='text-2xl text-center'><span className='text-purple-500 text-3xl'>C</span>ar      <span className='text-purple-500 text-3xl'>P</span>ark</h1>
                    <h2 className='my-5 text-xl font-extrabold text-center'>Welcome to Parking</h2>
                    <h2 className='my-5 text-md font-extrabold text-center'>You have <span className='text-purple-500'>{carlist.length}</span> cars parked</h2> 
                   <div className='w-[100%] flex flex-col justify-center items-center '>
                   {
                    carlist.length == 0 ? "Please Park a Car to view it Here" :
                    carlist.map((car , index) => {
                        const time = (new Date(car.chekout)).toLocaleDateString();
                        return(
                            <div key={index} className='w-[80%] rounded-md py-3 flex  gap-4 my-2 shadow-md shadow-purple-100 '>
                             <div className='w-[18%] flex justify-center items-center ' >
                                <img src={carphoto} alt="" className='h-[8vh]' />
                             </div>
                             <div className='w-[78%] flex flex-col pl-2 h-[100%]'>
                             <div className='flex gap-1 my-2'> <span>Name:</span> <p>{car.name}</p></div>
                               <div className='flex gap-1 my-2'> <span>Plate:</span> <p>{car.plate}</p></div>
                               <div className='flex gap-1 my-2'> <span>Checkout:</span> <p>{time}</p></div>
                             </div>
                    </div>
                        )
                    })
                   }
                   </div>
            </div>
            </div>
     );
}
 
export default Park;