import React from 'react'
import pic2 from '../../public/pic2.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
function About() {
  return (
    <div className='flex flex-wrap justify-between min-h-screen px-10 pt-48 text-white bg-black '>
      <div className=' lg:w-1/4'>
        <img src={pic2} alt="Photo" className='border-2 border-white rounded-full ' />
      </div>
      <div className='leading-6 text-right lg:w-2/3 font-poppins -pt-10'>
        <h1 className='text-xl font-kalam '>MY BIOGRAPHY</h1>
        <h2 className='text-3xl ' >Aspiring Computer Science Student and <br /> Software Engineer.</h2>
        <p className='pt-3 font-thin font-poppins'>Currently, I am immersed in my Bachelor of Computer Applications journey at Dr. Ram Manohar Lohia Avadh University. Throughout my academic pursuits, I have delved into a diverse array of programming languages and technologies, refining my skills in C, C++, Python, JAVA, JAVASCRIPT, TAILWIND CSS, SQL, CSS, HTML, React, Node JS, Express, Mongodb, Redux  and Data Structures and Algorithms</p>
       <div className='pt-3 pl-16 text-left border-b-2 border-l-2 border-white '>
        <h1 className='pt-3 '><span className='pt-3 text-xl text-gray-900 - '>Name:</span> Rahul Jaiswal</h1>
        <h1 className='pt-1'><span className='text-xl text-gray-900 - font-poppins '>Email:</span> jaiswalrahul2427@gmail.com</h1>
        <h1 className='pt-1 '><span className='text-xl text-gray-900 font-poppins '>From:</span> U.P,India</h1>
        </div>
<div className='flex justify-center '>
<div className='flex items-center justify-center '>
        <p className='flex pt-1 text-2xl text-gray-900 '><span className='font-bold font-poppins'>Follow Me On: </span></p>
          <div className='flex pt-2 space-x-2 text-3xl text-blue-900'>
            <a className='pl-2 duration-200 hover:text-blue-700 hover:text-3xl ' href="https://www.linkedin.com/in/rahul-jaiswal-278079204"> <FaLinkedin /></a>
            <a className='duration-200 hover:text-red-700 hover:text-3xl' href="https://instagram.com/jaiswalrahul2427?igshid=MzRlODBiNWFlZA=="><FaInstagram /></a>
            <a className='duration-200 hover:text-gray-800 hover:text-3xl' href="https://github.com/jaiswalrahul2427"><FaGithub /></a>
            <hr />
            <br />

          </div>

        
        </div>

        </div>


      </div>

    </div>
  )
}

export default About
