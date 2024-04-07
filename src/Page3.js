import React from 'react'

export default function Page3(props) {
  return (
    <> 
       
       <div className='flex flex-col items-center justify-between h-3/4 w-full md:w-3/4'>
  <div className='grid grid-cols-1 gap-2 md:flex md:flex-row md:items-center md:justify-center'> 
    <img className='h-3/4 w-screen md:h-3/4 md:w-3/4' src={props.imgsrc} alt='photo'/>
    <div className='ml-4 md:ml-8'> 
      <h1 className='font-bold text-sm md:text-2xl mb-4 md:mb-10'> {props.headings}</h1> 
      <p className='text-xs md:text-xl'>{props.para}</p>
    </div>
  </div>

  <button className='text-white bg-black w-32 h-10 flex justify-center items-center rounded-md mt-3 btn_next' onClick={props.sub}>continue</button>     
</div>

    
    </>
  )
}
