import React from 'react'
import pic2 from '../assets/pic2.png'
function SecondPage() {
  return (
    <div className='min-h-screen '>
        <div>
            <img src={pic2} alt="Photo" />
        </div>
        <div>
            <h1>MY BIOGRAPHY</h1>
            <h2>Aspiring Computer Science Student and Software Engineer.</h2>
            <p>Currently, I am immersed in my Bachelor of Computer Applications journey at Dr. Ram Manohar Lohia Avadh University. Throughout my academic pursuits, I have delved into a diverse array of programming languages and technologies, refining my skills in C, C++, Python, JAVA, JAVASCRIPT, TAILWIND CSS, SQL, CSS, HTML, React, Node JS, Express, Mongodb, Redux  and Data Structures and Algorithms</p>
        <p><span>Name:</span>Rahul Jaiswal</p>
        <p><span>Email:</span>jaiswalrahul2427@gmail.com</p>
        <p><span>From:</span>U.P,India</p>
        <p><span>Follow Me On</span> <a href="https://www.linkedin.com/in/rahul-jaiswal-278079204"><i id="linkedin" className="fa fa-linkedin"></i></a>
                        <a href="https://instagram.com/jaiswalrahul2427?igshid=MzRlODBiNWFlZA=="> <i id="instagram" className="fa fa-instagram"></i></a>
                        <a href="https://github.com/jaiswalrahul2427"><i id="github" className="fa fa-github"></i></a></p>
        </div>
      
    </div>
  )
}

export default SecondPage
