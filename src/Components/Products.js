import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useState } from 'react';

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleExpand = (index) => {
    setHoveredIndex(index);
  };

  const handleCollapse = () => {
    setHoveredIndex(null);
  };

  const workInfoData = [
    {
      video: process.env.PUBLIC_URL + "",
      title: "Fabrication",
      text: "Leveraging our strategic relationships uniquely positioned around the world, our fabrication partners provide the highest quality fabrication for your project, meeting all industry integrity standards. Wherever your project is located, our fabrication partners can provide cost-effective fabrication services for your needs.",
    },
    {
      video: process.env.PUBLIC_URL + "",
      title: "Equipment Supply",
      text: "By tapping into our global network of high-quality, cost-effective manufacturers, our team prides itself on being able to source off-the-shelf equipment in a highly constrained and limited supply chain environment. Whether you need equipment supplied on short notice or to a specific spec, our team works hard for you to find the equipment you need for your project.",
    },
    {
      video: process.env.PUBLIC_URL + "",
      title: "Custom Modular Skids",
      text: "With years of experience designing custom modular packaged skids, our team will work hard to design the most practical skid for your project. Combined with our other products and services, our custom modular packaged skids are a great cost-effective way to get your project off the ground quickly, cost-effectively, and with high operating efficiencies.",
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '16px',
        background: ` url(${process.env.PUBLIC_URL}/Products/factory-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
    >
      <div className='Products-heading-container'>
        <Typography variant="h3" style={{ color: 'white', marginBottom: '6rem', fontWeight: "lighter",textShadow:'1px 1px 2px black' }}>
          Our Products
        </Typography>
      </div>

      <div className='Clients-grid-container' style={{ width: '100%', maxWidth: '1300px' }}>
        <Grid container justifyContent="center" spacing={4} sx={{ alignItems: 'stretch' }}>
          {workInfoData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4} sx={{ height: hoveredIndex === index ? 'auto' : 'fit-content' }}>
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  transition: 'transform 0.5s ease',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'none',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                  margin: '0',
                }}
                elevation={3}
                onMouseEnter={() => handleExpand(index)}
                onMouseLeave={handleCollapse}
              >
                <CardMedia
                  component="video"
                  controls
                  autoPlay={true}
                  loop
                  muted
                  alt={card.title}
                  height="250"
                  width="100%"
                  style={{ objectFit: 'cover' }}
                  src={card.video}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    padding: '16px',
                    height: hoveredIndex === index ? '200px' : '160px', // Fixed height for the card content
                    overflow: 'hidden',
                    transition: 'height 0.5s ease', // Transition the height property
                    background: "rgba(173, 185, 214, 0.483)"
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

export default Products;
