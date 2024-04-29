import React from 'react'
import TextRep from './TextRep'

function Home() {
  return (
    <div className='min-h-screen text-white bg-cover bg-Banner' >
        <div className='pt-40 pl-10 '>
 <h1 className=' text-8xl font-kalam'> Rahul Jaiswal</h1>

<p className='pt-5 text-2xl font-poppins'>👋 Hello there! I'm Rahul Jaiswal, a driven and diligent computer science student with an unwavering passion for <TextRep/> </p>
<div className="flex pt-4 space-x-2 text-xl font-poppins ">
<button className="px-2 py-1 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-3 shadow-cyan-500/50">Hire Me</button> 
  <button className='px-2 py-1 duration-200 border-2 border-white border-dotted rounded shadow-lg hover:bg-orange-600 shadow-cyan-500/50 '> My Portfolio</button>
</div>      
    </div>
    </div>
  )
}

export default Home
