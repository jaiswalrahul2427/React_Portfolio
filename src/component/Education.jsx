import React from 'react'
import skill from "../../public/skill.json"

function Education() {
    const c = (id) => {
        switch (id) {
            case 1:
                return {
                    marginTop: "20px",
                };
            default:
                return {};
        }
    };

    return (
        <>
            <div className='px-20 pb-8 text-white bg-black '>
                <div  className=' font-poppins'>
                    <h1 className='pb-5 text-4xl text-center pt-14 font-kalam'>Education</h1>
                    <div className='flex flex-wrap items-center justify-between space-y-5'>
                        <div className='p-6 mt-4 border-2 border-white rounded shadow-md shadow-white font-poppins'>
                            <h2>Dr. Rammanohar Lohia Avadh University, Ayodhya</h2>
                            <p>B.C.A</p>
                            <span>[August 2021- August 2024]</span>
                        </div>
                        <div className='p-6 border-2 border-white rounded shadow-md shadow-white font-poppins'>
                            <h2>Chandra Bhan Singh Inter College</h2>
                            <p>Intermediate</p>
                            <span>UP Board</span>
                            {/* <p>2021</p> */}
                        </div>
                        <div className='p-6 border-2 border-white rounded shadow-md shadow-white '>
                            <h2>Chandra Bhan Singh Inter College</h2>
                            <p>High School</p>
                            <span>UP Board</span>
                            {/* <p>2019</p> */}
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='pt-12 pb-5 text-4xl text-center font-kalam'>Technical Skills</h1>
                    <div className='flex flex-wrap items-center justify-between pb-5 space-y-5 md:space-x-8 '>
                        {skill.map((i) => (
                            <div key={i} className='p-5 border-2 border-white rounded-md shadow shadow-white' style={c(i.id)}>
                                <button className='text-white rounded boder-2 border-x-blue-400 border-y-white' >{i.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
