
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const ServicesData = [
  {
      image: process.env.PUBLIC_URL + "/Services/design.jpg",
      title: "E, EP, EPC, & EPCM",
      text: "Including Engineering, Procurement, Fabrication, Construction, and Construction Management, our full discipline project delivery team works hard for you with a project first mindset.  Designing for Construction is vital to maintaining safety and cost efficiency in most projects we undertake at Metricline Projects." 
  },
  {
      image: process.env.PUBLIC_URL + "/Services/3d.jpg",
      title: "Design & Simulation",
      text: "3D modelling and simulation is the most cost effective way to predict a finished design.  Our team of full discipline designers will work with you ensuring your design is fit for purpose, easily operable, and meets all your business needs.  Regular design reviews and model reviews with your input ensure you are always current on the latest progress and important design decisions."
  },
  {
      image: process.env.PUBLIC_URL + "/Services/design.jpg",
      title: "Construction",
      text: "Metricline Projects has years of experience and dozens of successful construction projects under our belt.  From engineering and design through construction, commissioning and start up, we'll put boots on the ground to manage your project from cradle to grave."
  },
  {
      image: process.env.PUBLIC_URL + "/Services/consulting.jpg",
      title: "Consulting",
      text: "Metricline Projects provides clients with an expert engineering team equipped with diverse skills to meet various challenges across industries. We leverage our knowledge and experience to reduce risk. We’re constantly looking for new advancements and technologies to find the smartest and most optimal solutions."
  },
]

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleExpand = (index) => {
    setHoveredIndex(index);
  };

  const handleCollapse = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '16px',
      marginTop: '0rem',
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', /* Added position relative */
    }}>
      {/* Background image overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%',
        backgroundImage: `url(./Services/Services-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1, /* Set below the content */
        opacity: 1, /* Adjust the opacity as needed */
        filter:'brightness(75%)'
      }}></div>

      <div className='Products-heading-container'>
        <Typography variant="h3" style={{ color: 'white', marginBottom: '2rem', fontWeight: "lighter",textShadow:'1px 1px 2px black' }}>
          Our Services
        </Typography>
      </div>

      <div className='Clients-grid-container'>
        <Grid container justifyContent="center" spacing={3} sx={{ alignItems: 'stretch' }}>
          {ServicesData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ height: hoveredIndex === index ? 'auto' : 'fit-content' }}>
              <Card
                sx={{
                  minHeight: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  transition: 'transform 0.3s',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'none',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                }}
                elevation={3}
                onMouseEnter={() => handleExpand(index)}
                onMouseLeave={handleCollapse}
              >
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="200px" // Adjusted height for the image
                  width="100%" // Added fixed width for the image
                  image={card.image}
                  sx={{ objectFit: 'cover' }} // Maintain aspect ratio
                />
                <CardContent
                  sx={{
                    flex: 1,
                    fontSize:'12px',
                    padding: '16px',
                    minHeight: hoveredIndex === index ? '200px' : '100px', // Adjusted minHeight for card content
                    transition: 'min-height 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', /* Background color for text content */
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hoveredIndex === index ? card.text : card.text.slice(0, 100) + '...'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;

