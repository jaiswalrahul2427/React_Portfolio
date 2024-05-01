// Certificate.jsx
import React from 'react';
import cerlist from "../../public/cerlist.json";

function Certificate() {
  const CerStyle = (id) => {
    switch (id) {
      case 1:
        return {
          marginTop: "50px",
          marginLeft: "50px"
        };
      default:
        return {};
    }
  };
  
return (
  <>
    <div className='pt-10 text-center text-white bg-black '>
      <h1 className='text-3xl font-kalam'>Certifications</h1>
      <p className='text-2xl font-poppins'>Another way of showcasing skills</p>
    </div>
    <div className='grid justify-center grid-cols-1 px-12 pt-10 space-x-12 space-y-12 text-white bg-black md:grid-cols-3'>

      {cerlist.map((certificate) => (
        <div key={certificate.id} style={CerStyle(certificate.id)} className='justify-center p-5 text-center border-t-2 border-r-2 rounded shadow-md h-92 card w-92 bg-base-100 bg-zinc-950 shadow-cyan-100' >
          <figure className='bg-cover h-42'>
            <img className='container object-contain rounded-xl'  src={certificate.img} alt="img" />
          </figure>
          <h1 className='pt-3 text-xl font-bold font-poppins'>{certificate.tittle}</h1>
          <p>{certificate.dis}</p>
          <button className='px-5 py-1 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-6 shadow-cyan-500/50'  ><a className='text-xl font-kalam' href={certificate.link}>Link</a></button>
        </div>
      ))}
    </div>
  </>
);
}

export default Certificate;
