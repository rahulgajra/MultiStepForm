import React,{useState} from 'react'

export default function Page2(props) { 
  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const choose = () => {
    let element = document.querySelector(".btn_next"); // Add a period (.) before the class name
    element.disabled = false;
    element.style.backgroundColor = "black"; // Use camelCase for inline styles 
    setButtonDisabled(false);
  };
  return (

    
    <>  
      <div className=' flex flex-col items-center justify-between  h-3/4 w-3/4 md:w-1/2 ' > 
       <div className='flex flex-col items-center mb-12'> 
         <h1 className='font-bold text-sm  md:text-2xl mb-6'>{props.headings}</h1> 
          <p className='text-slate-400 text-xs  md:text-l'>{props.para}</p> 
    </div>
      <div className='flex flex-row items-center  shadow-sm  shadow-gray-400 hover:cursor-pointer border-t-0  w-3/4 h-12 rounded-md hover:bg-slate-100' onClick={choose}> 
      <img className="h-6 w-6 mx-5" src='https://cdn1.iconfinder.com/data/icons/education-791/512/student-kid-children-school-boy-1024.png' alt='photo'/>
      <h1 className=' text-xs md:text-l'>{props.box1}</h1>
      </div>  

      <div className='flex flex-row items-center shadow-sm  shadow-gray-400 hover:cursor-pointer border-t-0  w-3/4 h-12 rounded-md hover:bg-slate-100' onClick={choose}> 
      <img className="h-6 w-6 mx-5" src='https://cdn2.iconfinder.com/data/icons/businessman-mascot/180/9-1024.png' alt='photo'/>
      <h1 className=' text-xs md:text-l'>{props.box2}</h1>
      </div>  

      <div className='flex flex-row items-center shadow-sm  shadow-gray-400  hover:cursor-pointer border-t-0  w-3/4 h-12 rounded-md hover:bg-slate-100' onClick={choose}> 
      <img className="h-6 w-6 mx-5" src='https://png.pngtree.com/png-clipart/20220103/original/pngtree-parents-holding-children-png-image_7018626.png' alt='photo'/>
      <h1 className=' text-xs md:text-l'>{props.box3}</h1>
      </div>  

      <div className='flex flex-row items-center  shadow-sm  shadow-gray-400 hover:cursor-pointer border-t-0  w-3/4 h-12 rounded-md hover:bg-slate-100' onClick={choose}> 
      <img className="h-6 w-6 mx-5" src='https://images.squarespace-cdn.com/content/v1/5d4873a0393738000125c3ae/1592260033739-V4J370RT25SZDXRK54W5/lifelong_learner.png?format=1500w' alt='photo'/>
      <h1 className=' text-xs md:text-l'>{props.box4}</h1>
      </div>  

      <div className='flex flex-row items-center shadow-sm  shadow-gray-400  hover:cursor-pointer border-t-0  w-3/4 h-12 rounded-md hover:bg-slate-100' onClick={choose}> 
      <img className="h-6 w-6 mx-5" src='https://www.pngall.com/wp-content/uploads/4/Teacher-PNG-Picture.png' alt='photo'/>
      <h1 className=' text-xs md:text-l'>{props.box5}</h1>
      </div>  
      <button className='text-white bg-slate-200 w-32 h-10 flex justify-center items-center rounded-md mt-3 btn_next' onClick={props.sub} disabled={buttonDisabled}>continue</button>
      </div>
    
    </>
  )
}
