import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{minHeight:'100%'}} >
        <div className='container main_container d-flex justify-content-around flex-wrap'>
          <div className='left_container mt-5' style={{ width: 500 }}>
          <h2>Meet Kajol Singh</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}> 
              Hello! I'm a dedicated B.Sc. student at the Indian Institute of Technology Madras, majoring in Programming And Data Science. My academic journey has instilled a solid foundation in programming and data science, shaping my understanding of the evolving tech landscape.
              Professionally, I excel in Node.js for server-side development, MongoDB for database management, React for dynamic interfaces, and command JavaScript and Bootstrap for visually appealing web applications.
              Passionate about applying technology to real-world issues, I actively seek opportunities to expand my knowledge and stay updated on industry trends. With a focus on the convergence of programming and data science, I aim to contribute meaningfully to the tech world. Let's connect for shared interests or exciting collaboration prospects!
            </p>
          </div>
          <div className='right_container mt-3'>
            <img src="image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About