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
            <div className='px-20 text-white bg-black '>
                <div>
                    <h1 className='pt-10 pb-5 text-4xl text-center font-kalam'>Education</h1>
                    <div className='flex flex-wrap justify-between space-y-5'>
                        <div className='p-5 border-2 border-white rounded font-poppins'>
                            <h2>Dr. Rammanohar Lohia Avadh University, Ayodhya</h2>
                            <p>B.C.A</p>
                            <span>[August 2021- August 2024]</span>
                        </div>
                        <div className='p-5 border-2 border-white rounded'>
                            <h2>Chandra Bhan Singh Inter College</h2>
                            <p>Intermediate</p>
                            <span>UP Board</span>
                        </div>
                        <div className='p-5 border-2 border-white rounded'>
                            <h2>Chandra Bhan Singh Inter College</h2>
                            <p>High School</p>
                            <span>UP Board</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='pt-10 pb-5 text-4xl text-center font-kalam'>Technical Skills</h1>
                    <div className='flex flex-wrap items-center justify-between space-y-5 md:space-x-8 '>
                        {skill.map((i) => (
                            <div key={i} className='p-5 border-2 border-white rounded-md' style={c(i.id)}>
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
