import React from 'react'

export default function Page5(props) { 
  const choose = () => {
    let element = document.querySelector(".btn_next"); // Add a period (.) before the class name
    element.disabled = false;
    element.style.backgroundColor = "black"; // Use camelCase for inline styles
  };

  return (
      
    <> 
    
    <div className='flex flex-col items-center justify-between h-3/4 w-full md:w-3/4'>
  <div className='h-3/4 w-full md:w-3/4 flex flex-col md:flex-row items-center justify-between'>
    <img className='h-3/4 w-2/4 md:h-full md:w-2/4' src={props.imgsrc} alt='photo'/>
    <div className='ml-4 md:ml-8 mt-4 md:mt-0'> 
      <h1 className='font-bold text-xl md:text-2xl mb-4'>{props.headings}</h1> 
      <img className='h-14 w-28 md:h-28 md:w-44 mb-4' src={props.stars} alt='rating'/> 
      <p>{props.para}</p> 
      <p className='mt-2 md:mt-4'>{props.name}</p>
    </div>
  </div>

  <button className='text-white bg-black w-32 h-10 flex justify-center items-center rounded-md mt-3 btn_next' onClick={props.sub}>continue</button> 
</div>
   
   </> 

  )
}
