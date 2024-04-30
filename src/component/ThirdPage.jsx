import React from 'react'
import Card from './Card.jsx'
import list from '../../public/list.json'
function ThirdPage() {
  return (
    <div>
      <h1 className='pt-10 text-5xl font-bold text-center text-white bg-black font-kalam '  >What is do for you?</h1>

      <div className='grid grid-cols-1 pt-12 space-x-2 bg-black md:grid-cols-3 '>
        {
          list.map((item) => (
            <Card item={item} key={item.id} className=" w-52" />
          ))
        }
      </div>
    </div>
  )
}

export default ThirdPage
