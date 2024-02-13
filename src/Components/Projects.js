// import * as React from 'react';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Grid } from '@mui/material';

// const workInfoData = [

//   {
//     image: process.env.PUBLIC_URL + "/Projects/project1.jpeg",
//     title: "Railcar Maintenance Facility (Edmonton,AB)",
//     text: "With years of  designing custom modular packaged skids, our team will work hard to design the most practical skid for your project. Combined with our other products and services, our custom modular packaged skids are a great cost-effective way to get your project off the ground quickly, cost-effectively, and with high operating efficiencies.",
//   },
  
//   {
//     image: process.env.PUBLIC_URL + "/Projects/project2.jpeg",
//     title: "Green Field Fuel Terminal",
//     text: "Leveraging our strategic relationships uniquely positioned around the world, our fabrication partners provide the highest quality fabrication for your project, meeting all industry integrity standards. Wherever your project is located, our fabrication partners can provide cost-effective fabrication services for your needs.",
//   },
 

// ];

// const Projects = () => {
//   const [hoveredIndex, setHoveredIndex] = React.useState(null);

//   const handleExpand = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleCollapse = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       padding: '16px',
//       marginTop: '0rem',
//       display: 'flex',
//       flexDirection: "column",
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative', /* Added position relative */
//     }}>
//       {/* Background image overlay */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '50%',
//         backgroundImage: `url(./Services/Services-bg.jpg)`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         zIndex: -1, /* Set below the content */
//         opacity: 1, /* Adjust the opacity as needed */
//         filter:'brightness(75%)'
//       }}></div>

//       <div className='Products-heading-container'>
//         <Typography variant="h3" style={{ color: 'white', marginBottom: '2rem', fontWeight: "lighter" }}>
//           Our Projects
//         </Typography>
//       </div>

//       <div className='Clients-grid-container'>
//         <Grid container justifyContent="center" spacing={3} sx={{ alignItems: 'stretch' }}>
//           {workInfoData.map((card, index) => (
//             <Grid item key={index} xs={12} sm={12} md={6} lg={6} sx={{ height: hoveredIndex === index ? 'auto' : 'fit-content' }}>
//               <Card
//                 sx={{
//                   height: '100%',

//                   display: 'flex',
//                   flexDirection: 'column',
//                   borderRadius: '16px',
//                   transition: 'transform 1s ease',
//                   transform: hoveredIndex === index ? 'scale(1.05)' : 'none',
//                   boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
//                 }}
//                 elevation={3}
//                 onMouseEnter={() => handleExpand(index)}
//                 onMouseLeave={handleCollapse}
//               >
//                 <CardMedia
//                   component="img"
//                   alt={card.title}
//                   height="240px"
//                   image={card.image}
//                 />
//                 <CardContent
//                   sx={{
//                     flex: 1,
//                     padding: '16px',
//                     maxHeight: hoveredIndex === index ? '100%' : '160px',
//                     overflow: 'hidden',
//                     transition: 'max-height 1s ease',
//                     backgroundColor: 'rgba(255, 255, 255, 0.9)', /* Background color for text content */
//                   }}
//                 >
//                   <Typography gutterBottom variant="h5" component="div">
//                     {card.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {hoveredIndex === index ? card.text : card.text.slice(0, 100) + '...'}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Projects;




import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const workInfoData = [
  {
    image: process.env.PUBLIC_URL + "/Projects/project1.jpeg",
    title: "Railcar Maintenance Facility",
    text: "Transformed visions into reality! We successfully executed detailed engineering and construction for a railcar maintenance facility. From comprehensive site surveys to innovative rail designs and seamless infrastructure integration, our team delivered excellence. With meticulous planning and strategic engagement, we ensured minimal disruption to existing operations. Trust us for engineering marvels and impeccable deliverables. Your success, our commitment!",
  },
  {
    image: process.env.PUBLIC_URL + "/Projects/Cylinder.png",
    title: "Custom Designed Cylinder Guards",
    text: "Unlocking safety excellence! Our team spearheaded detailed engineering, design, and fabrication of a custom-designed cylinder guard, ensuring utmost safety every step of the way. From guarding against ingoing nip points to managing flying sparks, our meticulously engineered solutions set the safety standard. With comprehensive checklists and support documents, we empowered seamless operations. Choose us for safety-driven solutions that redefine industry standards!",
  },
];

const Projects = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '16px', marginTop: '0rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${process.env.PUBLIC_URL}/Services/Services-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  
      <div className='Products-heading-container'>
        <Typography variant="h3" style={{ marginBottom: '2rem', fontWeight: "lighter" ,color:"white",textShadow:'1px 1px 2px black'}}>
          Our Projects
        </Typography>
      </div>
      <div className='Clients-grid-container'>
        <Grid container justifyContent="center" spacing={3}>
          {workInfoData.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ height: '100%',borderRadius:"3%" }}>
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="240px"
                  image={card.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.text}
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

export default Projects;
