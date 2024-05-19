import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTelegram } from "react-icons/fa";

import { FaJava, FaReact } from "react-icons/fa";
import { FaGithub, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from '../../public/dp2.jpg';




function Home  () {
  return (
    <>
    <div name='Home' className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
<div className='flex flex-col md:md:flex-row'>
 <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>          
<span className='text-x1'>Welcome In My Feed</span>
<div className='flex space-x-1 text-2xl md:text-4x1'>

<h1>Hello, I'm a</h1>
<ReactTyped
className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

</div>
<br/>
<p className='text-sm md:text-md text-justify'>
Experienced full-stack engineer proficient in developing scalable web applications across the stack. Skilled in front-end technologies such as HTML/CSS, JavaScript (React, Vue.js), and back-end technologies including Node.js, Express.js, and databases like SQL and NoSQL. Strong understanding of RESTful APIs, microservices architecture, and cloud platforms (AWS, Azure). Proven ability to collaborate in cross-functional teams and deliver high-quality software solutions.

</p>
<br/>
 {/* social media icons */}
 <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>         
<div className='space-y-2'>
<h1 className="font-bold">Available on</h1>
<ul className='flex space-x-5'> 
  <li>
    <a href='https://www.facebook.com/' target='_blank'>       
  <FaFacebook className='text-2x1 cursor-pointer'/>
  </a>
    </li>   
<li>
<a href='https://www.linkedin.com/in/amit-kumar-937087189/' target='_blank'>       
<FaLinkedinIn className='text-2x1 cursor-pointer' />
</a>
</li>

<li>
<a href='https://web.telegram.org/k/' target='_blank'>       
<FaTelegram className='text-2x1 cursor-pointer' />
</a>
</li>

<li>
<a href='https://twitter.com/AmitRaj571497' target='_blank'>       
<FaSquareXTwitter className='text-2x1 cursor-pointer' />
</a>
</li>
<li>
<a href='https://www.instagram.com/coder_amit/' target='_blank'>       

<FaInstagram className='text-2x1 cursor-pointer' />
</a>
</li>

<li>
  <a href='https://github.com/amit7974' target='_blank'>
<FaGithub className='text-2x1 cursor-pointer' />
</a>
</li>
</ul>
 </div>
 <div className='space-y-2'>
 <h1 className="font-bold">Currently working on</h1>
<div className='flex space-x-5'>
<SiMongodb className='text-x1 md:text-3x1 hover:scale-110 duration-200 rounded-full border-[px]'/>
<SiExpress  className='text-x1 md:text-3x1 hover:scale-110 duration-200 rounded-full border-[0px]'/>
<FaReact  className='text-x1 md:text-3x1 hover:scale-110 duration-200 rounded-full border-[0px]'/>
<IoLogoNodejs className='text-x1 md:text-3x1 hover:scale-110 duration-200 rounded-full border-[0px]' />
<FaJava className='text-x1 md:text-3x1 hover:scale-110 duration-200 rounded-full border-[0px]' />

</div>
 </div>
 </div>
 </div>
 <div className='md:w-1/2 md:m1-48 md:mt-20 mt-8 order-1'>
<img src={pic} className='rounded-full md:w-[450px] md:h-[450px]'
alt=''/>

 </div>
    </div>
    </div>
  
    <hr/>
      </>
  );
}

export default Home
