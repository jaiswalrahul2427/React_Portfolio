import React from 'react'
import projectlist from '../../../public/projectlist.json';
function Project() {
  return (
    <>
    <div className='pt-10 text-center text-white bg-black'>
      <h1 className='text-3xl font-kalam'>Project</h1>
      <p className='text-2xl font-poppins'>Some of my most recent works.</p>
      
    </div>
    <div className='grid grid-cols-1 px-12 pt-12 text-white bg-black gap-x-4 md:grid-cols-3'>
      {projectlist.map((project)=>(
        <div key={project.id} className='p-5 m-8 text-center border-t-2 border-r-2 rounded shadow-md h-92 w-92 bg-base-100 bg-zinc-950 shadow-cyan-100'>
          <figure className='bg-cover h-42'>
            <img src={project.img} className='container object-contain rounded-xl' alt="img" />

          </figure>
          <h1 className='pt-3 text-xl font-bold underline font-poppins'>{project.tittle}</h1>
          <p>{project.dis}</p>
          <div className='flex flex-wrap justify-between '>
          <button className='px-5 py-1 mt-2 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-6 shadow-cyan-500/50'><a className='text-xl font-kalam' href={project.live_link}>Live link</a></button>
          <button className='px-5 py-1 mt-2 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-6 shadow-cyan-500/50'><a className='text-xl font-kalam' href={project.repo_link}>Repo Link</a></button>

          </div>

        </div>
       ))
      }

    </div>
    </>

  )
}

export default Project
