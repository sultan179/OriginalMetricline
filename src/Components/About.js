import React from "react";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="video-background">
        <video autoPlay loop muted>
            <source src="/About/AboutUs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  
      
      <div className="about-section-text-container">
        <div><p className="primary-subheading" style={{color:'white',fontWeight:'lighter',textShadow:'1px 1px 2px black'}}>About Us</p></div>
        
       
        <p className="primary-text">
        Welcome to Metricline Projects, where project execution is an art form and customer satisfaction is our
masterpiece. Our approach seamlessly integrates contracting and engineering expertise under one roof,
ensuring efficiency and quality from start to finish.

        </p>
        <p className="primary-text">
        Our approach seamlessly integrates contracting and engineering expertise, ensuring efficiency and
quality from start to finish. From concept development to Pre-FEED, FEED, Detailed Engineering and
Procurement, through Fabrication and Equipment Supply, Construction, Commissioning, and Start-up,
ww're with you every step of the way.
        </p>


        <div className="right-section">
        <h2 ><span style={{color:'orange',}}>Our Values</span></h2>
        <p>
        <span style={{color:'orange',}}>Quality</span> – Only the highest quality work gets approved for client submission. Our
Quality Management System (QMS) is enforced at every step of the project.
        </p>
        <p>
        <span style={{color:'orange',}}>Integrity</span>  – We win together, thrive off client satisfaction and our team are
rewarded for upholding our key values
         
        </p>
        <p> <span style={{color:'orange',}}>Efficiency</span>  – Utilizing our home-grown engineered processes to execute our
projects, our execution efficiencies are something to be proud of.</p>
        
<p> <span style={{color:'orange',}}>Safety</span>  –We cultivate strategies that drive efficiency while fostering a safe and flourishing environment for all.</p>
        
        </div>

        


        <p className="primary-text">
        At Metricline, we engineer success stories, turning your vision into reality. Join us in bringing your
industrial visions to life. When you win, we win.
        </p>
        
      
      </div>
    </div>
  );
};

export default About;
