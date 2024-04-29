import React from 'react'
import pic2 from '../assets/pic2.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';
function SecondPage() {
  return (
    <div className='flex flex-wrap justify-between min-h-screen pt-48 mx-5 '>
      <div className=' lg:w-1/4'>
        <img src={pic2} alt="Photo" className='rounded-full ' />
        </div>
      <div className='leading-6 lg:w-2/3 font-poppins -pt-10'>
        <h1 className='text-xl font-kalam '>MY BIOGRAPHY</h1>
        <h2 className='text-3xl ' >Aspiring Computer Science Student and Software Engineer.</h2>
        <p className='pt-3 font-thin font-poppins'>Currently, I am immersed in my Bachelor of Computer Applications journey at Dr. Ram Manohar Lohia Avadh University. Throughout my academic pursuits, I have delved into a diverse array of programming languages and technologies, refining my skills in C, C++, Python, JAVA, JAVASCRIPT, TAILWIND CSS, SQL, CSS, HTML, React, Node JS, Express, Mongodb, Redux  and Data Structures and Algorithms</p>
        <p className='pt-3 '><span className='pt-3 text-xl - '>Name:</span> Rahul Jaiswal</p>
        <p className='pt-1'><span className='text-xl - font-poppins'>Email:</span> jaiswalrahul2427@gmail.com</p>
        <p className='pt-1 '><span className='text-xl font-poppins'>From:</span> U.P,India</p>

        <p className='flex pt-1 '><span className='font-bold font-poppins'>Follow Me On: </span>
<div className='flex space-x-2 text-2xl text-blue-800'>
<a className='pl-2 ' href="https://www.linkedin.com/in/rahul-jaiswal-278079204"> <FaLinkedin /></a>
          <a href="https://instagram.com/jaiswalrahul2427?igshid=MzRlODBiNWFlZA=="><FaInstagram /></a>
          <a href="https://github.com/jaiswalrahul2427"><FaGithub /></a>
</div>
          </p>
     
      </div>

    </div>
  )
}

export default SecondPage
