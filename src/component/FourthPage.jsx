import React from 'react'
import Certificate from './Certificate'
import cerlist from '../../public/cerlist.json'
function FourthPAge() {
  return (
    <div>
      <div>
      <div className='grid grid-cols-1 pt-12 space-x-2 bg-black md:grid-cols-3'>
      {
          cerlist.map((certificates) => (
            <Certificate item={certificates} key={certificates.id} className=" w-52" />
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default FourthPAge
