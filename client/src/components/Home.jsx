import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container home_container" >
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Kajol Singh</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>A Passionate Node.js and React developer with expertise in building dynamic web applications. Specialized in scalable solutions, from server-side logic to responsive front-end interfaces, and skilled in MongoDB integration. Explore my portfolio for a glimpse of impactful projects and technical prowess.</p>
            <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>Projects</Button>
              <Button onClick={()=>window.open("https://www.linkedin.com/in/kajolsinghme/", "_blank")} variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}>LinkedIn</Button>
            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home