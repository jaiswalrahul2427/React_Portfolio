import React from 'react'
function Card({item}) {
  return (
    <>
     <div className="p-5 px-12 my-3 ">
                <div className="relative z-40 p-5 duration-200 border-t-2 border-r-2 rounded shadow-md shadow-cyan-100 bg-zinc-950 h-92 card w-92 bg-base-100 hover:scale-105 dark:text-white">
                    <figure className="flex justify-center mx-auto">
                        <img className="object-contain max-w-full max-h-full h-92 w-92 rounded-xl " src={item.image} alt="#" />
                    </figure>
                    <div className="absolute top-0 left-0 z-30 flex items-center justify-center w-full h-full max-h-full p-5 mx-auto uppercase duration-1000 rounded opacity-0 bg-slate-950 hover:opacity-100 ">
                        <h2 className="text-xl text-center text-green-700 md:text-5xl font-kalam card-title">
                           {item.name}
                        </h2>
                    </div>
                </div>
            </div></>
  )
}

export default Card
