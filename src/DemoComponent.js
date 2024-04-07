import React, { useState } from 'react';
import pages from './Data';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
const DemoComponent = () => {
  const [i, setI] = useState(0);
  const handleButtonClick = () => {
   
   //update i while event has occured   
    
      setI((prevI) => (prevI + 1) % componentsData.length); // Loop back to 0 when i reaches the end 
      const element=document.querySelector(".btn_next")
      element.disabled = true;
      //element.style.backgroundColor = "slate";


  }; 
  const back=()=>{ 
   
    // for back the i 
    if(i>0) 
    { 
      setI((prevI) => (prevI - 1) % componentsData.length);
    }
    else 
    { 

    }

  }

  const componentsData = [
    {
      component: <Page1 />,
      data: { 
        sub:handleButtonClick,
        headings: pages[0].heading,
        para: pages[0].para,
        box1: pages[0].box1,
        box2: pages[0].box2,
        box3: pages[0].box3,
        box4: pages[0].box4,
        box5: pages[0].box5,
        box6: pages[0].box6,
      },
    },
    {
      component: <Page2 />,
      data: { 
        sub:handleButtonClick,
        headings: pages[1].heading,
        para: pages[1].para,
        box1: pages[1].box1,
        box2: pages[1].box2,
        box3: pages[1].box3,
        box4: pages[1].box4,
        box5: pages[1].box5,
      },
    },
    {
      component: <Page3 />,
      data: { 
        sub:handleButtonClick,
        imgsrc: pages[2].img1,
        headings: pages[2].heading,
        para: pages[2].para,
      },
    },
    {
      component: <Page4 />,
      data: { 
        sub:handleButtonClick,
        headings: pages[3].heading,
        para: pages[3].para,
        box1_exp: pages[3].box1.exp,
        box1_name: pages[3].box1.name,
        box1_intro: pages[3].box1.intro,
        box2_exp: pages[3].box2.exp,
        box2_name: pages[3].box2.name,
        box2_intro: pages[3].box2.intro,
        box3_exp: pages[3].box3.exp,
        box3_name: pages[3].box3.name,
        box3_intro: pages[3].box3.intro,
        box4_exp: pages[3].box4.exp,
        box4_name: pages[3].box4.name,
        box4_intro: pages[3].box4.intro,
      },
    },
    {
      component: <Page5 />,
      data: { 
        sub:handleButtonClick,
        imgsrc: pages[4].img2,
        headings: pages[4].heading,
        stars: pages[4].star,
        para: pages[4].para,
        name: pages[4].name,
      },
    }, 
    
    {
      component: <Page6 />,
      data: { 
        sub:handleButtonClick,
        headings: pages[5].heading,
        para: pages[5].para,
        box1_hea: pages[5].box1.hea,
        box1_lines: pages[5].box1.lines,
        box1_img3: pages[5].box1.img3,
        box2_lines: pages[5].box2.lines,
        box2_img4: pages[5].box2.img4,
        
      },
    },
    
  ];

 //here is handel

  return (
    <>
      <div className='h-34 w-screen flex flex-row items-center justify-center'>
        <button onClick={back} >
          <img className='h-8 w-10' src='https://icon-library.com/images/back-icon-png/back-icon-png-16.jpg' alt='Back Icon' />
        </button>
        <div className='h-1 w-3/4 rou rounded-md' style={{ backgroundColor: `rgba(0, 128, 0, ${i / componentsData.length})` }}></div>
      </div>

      {/* Render components based on the value of i */}
      {componentsData.map((item, index) =>
        index === i ? React.cloneElement(item.component, item.data) : null
      )}
    
    </>
  );
};

export default DemoComponent;
