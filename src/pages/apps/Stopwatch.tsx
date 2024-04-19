import  { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const formatTime = (timeInSeconds:number)=>{
 const hours = String(Math.floor(timeInSeconds/3600));
 const min = String(Math.floor((timeInSeconds%3600)/60));
 const sec = String(timeInSeconds%60);

 return `${hours.padStart(2,"0")}:${min.padStart(2,"0")}:${sec.padStart(2,"0")}`;
}



const Stopwatch = () => {

    const [time, setTime] = useState<number>(0);
    const [isRunning,setIsRunnnig] = useState<boolean>(false);

    useEffect(() => {
      let IntervalId:number;
      
     if(isRunning){
         IntervalId = setInterval(()=>{
          setTime((prev)=>prev+1);
      },1000); 
    }

      return () => {
        clearInterval(IntervalId);
      };
    }, [isRunning])
    
    const resethandler = ()=>{
        setIsRunnnig(false);
        setTime(0);
    }

  return (
    <div className='adminContainer'>
    <AdminSidebar/>
    <main className='dashboardAppContainer'>
    <h1>Stopwatch</h1>
    <section>
        <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={()=>{setIsRunnnig((prev)=>!prev)}}>{isRunning?"Stop":"Start"}</button>
            <button onClick={resethandler}>Reset</button>
        </div>
    </section>
    </main>
    </div>
  )
}

export default Stopwatch