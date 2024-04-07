import React from 'react'

export default function Page6(props) {
  return (
     
<div className='flex flex-col items-center h-3/4 w-3/4 md:w-1/2'> 
  <div className='flex flex-col items-center mb-12'> 
    <h1 className='font-bold text-sm md:text-3xl mb-6'>{props.headings}</h1> 
    <p className='text-slate-400 text-xs md:text-xl'>{props.para}</p> 
  </div> 

  <div className='grid grid-cols-1 gap-3 md:flex md:flex-row md:justify-around'> 
    <fieldset className='border-slate-200 border-2 flex flex-col items-center justify-around h-56 w-56 md:flex-row md:h-56 md:w-72 justify-around hover:cursor-pointer shadow-lg shadow-green-300 hover:bg-slate-100' >  
      <legend className='flex w-32 ml-12 md:ml-20 justify-center items-center bg-yellow-400 text-black rounded-xl '>Most popular</legend>

      <img className='h-2/4 w-2/4 md:h-2/4 md:w-2/4' src={props.box1_img3}/> 
      <h1 className='text-[10px] md:text-[14px]'>{props.box1_lines}</h1>
    </fieldset> 

    <div className='border-slate-200 border-2 flex flex-col items-center justify-around h-56 w-56 md:flex-row md:h- md:w-72 justify-around hover:cursor-pointer shadow-lg shadow-green-300 hover:bg-slate-100' > 
      <img className='h-2/4 w-2/4 md:h-2/4 md:w-2/4' src={props.box2_img4}/> 
      <h1 className='text-[10px] md:text-[13px]'>{props.box2_lines}</h1>
    </div>  
  </div>  
  <button className='text-white bg-black w-32 h-10 flex justify-center items-center rounded-md mt-7  btn_next' onClick={props.sub} >continue</button>
</div>


  );
};
