import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
function TextRep() {
  return (
    <div>
      
      <span className='font-bold text-green-400  font-kalam'>
        <Typewriter words={['Video Editer','Web Developer','Photo Editer','UI Designer','Frontend Developer']}
        loop={100}
        cursor />
      </span>
    </div>
  )
}

export default TextRep
