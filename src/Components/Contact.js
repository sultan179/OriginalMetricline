import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Typography from '@mui/material/Typography';




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const templateParams = {
      to_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send('service_vtxmf4a', 'template_9erelvv', templateParams, 'Ts7OycfcKG6MjCUXw')
      .then((response) => {
        console.log('Email sent:', response);
        alert('Email sent successfully!');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className='contact-page' style={{
      display:'flex',
      justifyContent:'start',
      alignItems:'flex-start',
    
      background: `url(${process.env.PUBLIC_URL}/Contact/Contact-bg.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     
    
     
    }}>





      {/* <div className="contact-page-about-founder-container" >

        <div className='img-container'>
        <div className="contact-page-profile-picture-container">
        <img className="contact-page-profile-picture" src={profilePictureUrl } alt="Profile" />
       
      </div>
      
        <div className='founder-text'>
        <h2 >Stewart Newman,P.Eng (Founder & Ceo)</h2>
        </div>
        </div>
      <div className="contact-page-about-us-text">
        <div className="left-section">
        <h2 >Our Mission</h2>
        <p>
        <span style={{color:'orange',}}>Quality</span>- Only the highest quality work gets approved for client submission. 
        </p>
        <p>
        <span style={{color:'orange',}}>Integrity</span>– We win together. We thrive off client satisfaction and our teams are

         
        </p>
        <p><span style={{color:'orange',}}>Efficiency</span> – Utilizing our home-grown engineered processes to execute our
projects</p>


        </div>
        <div className="right-section">
        <h2 ><span style={{color:'orange',}}>Our Values</span></h2>
        <p>
        Quality – Only the highest quality work gets approved for client submission. Our
Quality Management System (QMS) is enforced at every step of the project.
        </p>
        <p>
        Integrity – We win together. We thrive off client satisfaction and our teams are
rewarded for upholding our key values
         
        </p>
        <p>Efficiency – Utilizing our home-grown engineered processes to execute our
projects, our execution efficiencies are something to be proud of.</p>
        </div>
        </div>
    </div>
 */}







    
    <div className="contact-form-container">
    <Typography variant="h3" style={{ marginBottom: '2rem', fontWeight: "lighter" ,color:"white",textShadow:'1px 1px 2px black'}}>
          Contact Us
        </Typography>

    <div>

      <p style={{fontSize:'16px'}}>
      Ready to take your industrial project to the next level or want to work for us? Contact us today, and let's engineer a brighter future together! 
     
      </p>

      <p style={{fontSize:'16px',marginTop:"1rem"}}> You can contact us by phone, email, or chat.</p>
      
    </div>
    <div>

      <p>
      Address: 520, 715 5th Ave. SW, Calgary, Alberta, Canada, T2P 2X6
      </p>
    </div>
    <div>

      <p >
      Email: info@metricline.ca  
      </p>
    </div>
    <div>

      <p>
      Phone: 403-861-6076
      </p>
      
      <p style={{fontSize:'16px',marginTop:"1rem"}}> You can also simple fill up the form below and we will get back to you shortly!</p>
    </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input className="input-field" type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
      <input className="input-field" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
      <textarea className="input-field" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
      <button className="secondary-button" type="submit">Send</button>
    </form>

    </div>

    </div>
  );
};

export default ContactForm;
