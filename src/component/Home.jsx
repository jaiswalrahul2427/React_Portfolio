import React from 'react'
import TextRep from './TextRep'
import About from './About'
import ThirdPage from './ThirdPage'

function Home() {
  return (
    
    <>
    <div className='min-h-screen text-white bg-cover opacity-95 bg-Banner contrast-150 ' >
        <div className='pt-48 px-14'>
 <h1 className=' text-8xl font-kalam'> Rahul Jaiswal</h1>

<p className='pt-5 text-2xl font-poppins'>👋 Hello there! I'm Rahul Jaiswal, a driven and diligent computer science student with an unwavering passion for <TextRep/> </p>
<div className="flex pt-4 space-x-2 text-xl font-poppins ">
<button className="px-2 py-1 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-3 shadow-cyan-500/50"><a href="https://wa.me/qr/C2POJOKUOKUHO1">Hire Me</a></button> 
  <button className='px-2 py-1 duration-200 bg-gray-700 border-2 border-white border-dotted rounded shadow-lg hover:bg-orange-600 shadow-cyan-500/50 '><a href="https://drive.google.com/file/d/185aaiuViiY9O1vVkoRX9OwTXoQF94ipB/view?usp=sharing"> My Resume</a> </button>
</div>      
    </div>
    </div>
    <About/>
    <ThirdPage/>
    </>

  )
}

export default Home
