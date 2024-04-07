import React,{useState} from 'react'

export default function Page4(props) { 
  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const choose = () => {
    let element = document.querySelector(".btn_next"); // Add a period (.) before the class name
    element.disabled = false;
    element.style.backgroundColor = "black"; // Use camelCase for inline styles 
    setButtonDisabled(false);
  };
  return (
    
     
    <div className=' flex flex-col items-center  h-3/4 w-3/4 md:w-1/2' > 
    <div className='flex flex-col items-center mb-12'> 
      <h1 className='font-bold text-sm md:text-xl mb-6'>{props.headings}</h1> 
       <p className='text-slate-400 text-sm md:text-xl'>{props.para}</p> 
    </div> 

  
      <div  className='grid grig-col-1 gap-3 md:flex md:flex-row md:justify-around'> 
        <div className='border-slate-200 border-2 flex flex-col items-center h-20 w-24 md:h-44 md:w-44 justify-around hover:cursor-pointer shadow-lg shadow-blue-300 hover:bg-slate-100' onClick={choose}> 
        <img className=' h-1/4 w-28' src={props.box1_exp}/> 
        <h1 className='text-xs md:text-xl'>{props.box1_name}</h1>  
        <h1 className='text-slate-400 text-xs md:text-xl'>{props.box1_intro}</h1>
        </div> 
        <div className='border-slate-200 border-2 flex flex-col items-center h-20 w-24 md:h-44 md:w-44 justify-around hover:cursor-pointer shadow-lg shadow-blue-300 hover:bg-slate-100' onClick={choose}> 
        <img className=' h-1/4 w-28' src={props.box2_exp}/> 
        <h1 className='text-xs md:text-xl'>{props.box2_name}</h1>  
        <h1 className='text-slate-400 text-xs md:text-xl'>{props.box2_intro}</h1>
        </div> 
        <div className='border-slate-200 border-2 flex flex-col  h-20 w-24 items-center md:h-44 md:w-44 justify-around hover:cursor-pointer shadow-lg shadow-blue-300 hover:bg-slate-100' onClick={choose}> 
        <img className=' h-1/4 w-28 ' src={props.box3_exp}/> 
        <h1 className='text-[8px] md:text-xl'>{props.box3_name}</h1>  
        <h1 className='text-slate-400 text-xs md:text-xl'>{props.box3_intro}</h1>
        </div> 
        <div className='border-slate-200 border-2 flex flex-col items-center h-20 w-24  md:h-44 md:w-44 justify-around hover:cursor-pointer shadow-lg shadow-blue-300 hover:bg-slate-100' onClick={choose}> 
        <img className=' h-1/4 w-28' src={props.box4_exp}/> 
        <h1 className='text-xs md:text-xl'>{props.box1_name}</h1>  
        <h1 className='text-slate-400 text-xs md:text-xl'>{props.box4_intro}</h1>
        </div>
        
      </div>
        
      <button className='text-white bg-slate-200 w-32 h-10 flex justify-center items-center mt-5 rounded-md md:mt-14 btn_next' onClick={props.sub} disabled={buttonDisabled}>continue</button>
   </div>
   

  )
}
