import * as React from 'react';
import Norcan from "../Assets/Norcan.PNG";
import Mic from "../Assets/Mic.PNG"
import H from "../Assets/H.PNG"


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const workInfoData = [
    {
      image: process.env.PUBLIC_URL + "/Clients/Uofc.png",
      title: "University of Calgary",
      
    },
    {
      image:process.env.PUBLIC_URL + "/Clients/Mic.png",
      title: "Mic Energy",
     
    },
    {
      image: process.env.PUBLIC_URL + "/Clients/H.png",
      title: "Hoffer Construction",
    },
 {
      image: process.env.PUBLIC_URL + "/Clients/Procor.png",
      title: "Procor Limited",
      
    },
    {
      image:process.env.PUBLIC_URL + "/Clients/Norcan.png",
      title: "Norcan Fluid Power Ltd.",
     
    },
    {
      image: process.env.PUBLIC_URL + "/Clients/Nvision.png",
      title: "NVision",
    },
 {
      image: process.env.PUBLIC_URL + "/Clients/pd.png",
      title: "Pieridae Energy",
      
    },
    {
      image:process.env.PUBLIC_URL + "/Clients/brt.webp",
      title: "BRT Consulting Ltd.",
     
    },
    {
      image: process.env.PUBLIC_URL + "/Clients/Ncc.png",
      title: "Natural Capital Corporation",
    },]

 const Clients = () => {

 return (
  <div className="Clients-container" style={{minHeight: '100vh', padding: '16px',marginTop: '0rem',display: 'flex',flexDirection:"column", justifyContent: 'space-around', alignItems: 'center',backgroundImage: `url(${process.env.PUBLIC_URL}/Clients/Clients-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',filter: 'brightness(95%)',  }}>

    <div className='Clients-heading-container'>
        <Typography variant="h3" style={{ color: 'white', marginBottom: '2rem', fontWeight: "lighter",textShadow:'1px 1px 2px black' }}>
        Our Clients
      </Typography>
    </div>
    
     <div className='Clients-container-text'>
     <p className="primary-text">
     At Metricline, we don&#39;t just build structures; we build relationships. Our dedication to client satisfaction
and our track record of successful projects speak for themselves. Our dynamic teams blend capability,
care, and commitment to deliver ground-breaking programs and pioneering solutions. From driving
major initiatives to championing net-zero and digital innovations, we&#39;re rewriting the playbook for
success. With a global footprint spanning North America, Europe, Asia, Africa and beyond, our impact knows no bounds.
It’s how we’ve made the difference since 2021 – together, let&#39;s build a world that&#39;s green, inclusive, and
thriving!

        </p>
      
    </div>
    
    <div className='Clients-grid-container'>

    
    <Grid container justifyContent="center"  spacing={{ xs: 2, md: 3 }}
    >
      {workInfoData.map((card) => (
        <Grid item key={card.id} xs={6} sm={4} md={3} lg={2} >
        <Card  sx={{ height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                transition: 'background-color 0.1s, transform 0.2s',
                '&:hover': {
              
                  transform: 'scale(1.02)',
                }, }} elevation={3}>
          <CardMedia
            component="img"
            alt={card.title}
            height="140px"
            image={card.image}
          />
          <CardContent sx={{ flex: 1,color:"black", padding: '16px',backgroundColor: '#ebe3d8',
           position:'relative'}}>
            <Typography gutterBottom variant="h7" component="div">
              {card.title}
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

export default Clients;
