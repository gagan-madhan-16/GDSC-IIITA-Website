// design 1 :-

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Headings, { HeadingNew } from "../../Components/Page_headings/index";
// import team_illustration from "../../Assets/Teams_page_illustration.svg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import "./carousel.css";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import TeamSpecialCard from "../../Components/TeamSpecialCard/TeamSpecialCard";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import WebMemberCard from "./WebMemberCard";
// import "./Team.css";
// import "bootstrap/dist/css/bootstrap.css";
// import FossWMember from "./FossWMemberCard";
// import AIMemberCard from "./AIMemberCard";
// import DesignMemberCard from "./designMemberCard";
// import CCMemberCard from "./ccWingMemberCard";
// import AppMemberCard from "./AppMemberCard";
// import CoLeadsCard from "../../Components/TeamSpecialCard/CoLeadsCard";
// import Box from '@mui/material/Box';

// function Team() {
// 	const [showField, setshowField] = useState("CoreTeam");
// 	const [admin, setAdmin] = useState(false);
// 	useEffect(() => {}, [showField]);

// 	const SamplePrevArrow = props => {
// 		const { className, onClick } = props;

// 		return (
// 			<div className={className} onClick={onClick}>
// 				<ChevronLeftIcon
// 					style={{
// 						color: "#fff",
// 						fontSize: "2rem",
// 					}}
// 				/>
// 			</div>
// 		);
// 	};

// 	const SampleNextArrow = props => {
// 		const { className, onClick } = props;
// 		return (
// 			<div className={className} onClick={onClick}>
// 				<ChevronRightIcon
// 					style={{
// 						color: "#fff",
// 						fontSize: "2rem",
// 					}}
// 				/>
// 			</div>
// 		);
// 	};
// 	const settings = {
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		centerMode: true,
// 		centerPadding: 0,
// 		nextArrow: <SampleNextArrow />,
// 		prevArrow: <SamplePrevArrow />,
// 	};
// 	return (
//     <div>
//       {/* <div>
//                 <Slider autoplay {...settings}>
//                     {
//                         slider_img.map((item, index) => (
//                             <div key={index} style={{
//                                 textAlign: 'center'
//                             }}>
//                                 <img style={{
//                                     width: '100%',
//                                     zINdex: -1
//                                 }} src={item} alt="img" />
//                             </div>
//                         ))
//                     }
//                 </Slider>
//                     <Swiper navigation={true} className="mySwiper">
//                     <SwiperSlide>Slide 1</SwiperSlide>
//                     <SwiperSlide>Slide 2</SwiperSlide>
//                     <SwiperSlide>Slide 3</SwiperSlide>
//                     <SwiperSlide>Slide 4</SwiperSlide>
//                     <SwiperSlide>Slide 5</SwiperSlide>
//                     <SwiperSlide>Slide 6</SwiperSlide>
//                     <SwiperSlide>Slide 7</SwiperSlide>
//                     <SwiperSlide>Slide 8</SwiperSlide>
//                     <SwiperSlide>Slide 9</SwiperSlide>
//                 </Swiper>
//             </div> */}
//       <section className="Team_section">
//         <Headings
//           LargeHeading="Our Team"
//           SmallHeading="The ones, who are making it happen..."
//           Text="Learning goes hand-in-hand with building new and cool stuff.
//                      With our incredible team we aim to solve numerous problems in day-to-day life, and explore new heights in Technology!"
//           PageIllustration={team_illustration}
//         />
//         {admin && (
//           <Fab
//             style={{ alignSelf: "flex-end", marginRight: "7vw" }}
//             color="primary"
//             aria-label="add"
//           >
//             <Link
//               to="../team/new_member"
//               style={{
//                 color: "white",
//                 height: "100%",
//                 width: "100%",
//                 margin: "0",
//                 display: "grid",
//                 placeItems: "center",
//               }}
//             >
//               <AddIcon />
//             </Link>
//           </Fab>
//         )}
//         <div>
//           <TeamSpecialCard />
//           <br></br>
//           <br></br>
//           <CoLeadsCard />
//           {/* insert new special card here */}
//         </div>
//       </section>
//       <div>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Box sx={{ padding: '0px', marginBottom: '16px' }}>
//               <HeadingNew LargeHeading="Foss Wing" />
//             </Box>

//           </AccordionSummary>
//           <AccordionDetails>
//             <FossWMember />
//           </AccordionDetails>
//         </Accordion>


//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Box sx={{ padding: '0px', marginBottom: '16px' }}>
//               <HeadingNew LargeHeading="CC Wing" />
//             </Box>
//           </AccordionSummary>
//           <AccordionDetails>
//            <CCMemberCard />
//           </AccordionDetails>
//         </Accordion>

        
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Box sx={{ padding: '0px', marginBottom: '16px' }}>
//               <HeadingNew LargeHeading="Design Wing" />
//             </Box>
//           </AccordionSummary>
//           <AccordionDetails>
//            <DesignMemberCard />
//           </AccordionDetails>
//         </Accordion>


//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Box sx={{ padding: '0px', marginBottom: '16px' }}>
//               <HeadingNew LargeHeading="WebD Wing" />
//             </Box>
//           </AccordionSummary>
//           <AccordionDetails>
//             <WebMemberCard />
//           </AccordionDetails>
//         </Accordion>


//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Box sx={{ padding: '0px', marginBottom: '16px' }}>
//               <HeadingNew LargeHeading="AI/ML Wing" />
//             </Box>
//           </AccordionSummary>
//           <AccordionDetails>
//             <AIMemberCard />
//           </AccordionDetails>
//         </Accordion>


//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Box sx={{ padding: '0px', marginBottom: '16px' }}>
//               <HeadingNew LargeHeading="AppD Wing" />
//             </Box>
//           </AccordionSummary>
//           <AccordionDetails>
//             <AppMemberCard />
//           </AccordionDetails>
//         </Accordion>


//         {/* <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <HeadingNew LargeHeading="DevOps And Cloud Computing" />
//           </AccordionSummary>
//           <AccordionDetails>
//             <DevopsMemberCard />
//           </AccordionDetails>
//         </Accordion> */}
//       </div>
//     </div>
//   );
// }

// export default Team;



// design 2 :-


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headings from "../../Components/Page_headings/index";  // Heading component for page title and description
import team_illustration from "../../Assets/Teams_page_illustration.svg";  // Team page illustration image
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./carousel.css";  // Custom carousel styles
import Typography from "@mui/material/Typography";
import TeamSpecialCard from "../../Components/TeamSpecialCard/TeamSpecialCard";  // Special team cards
import Fab from "@mui/material/Fab";  // Floating action button
import AddIcon from "@mui/icons-material/Add";  
import WebMemberCard from "./WebMemberCard"; 
import FossWMember from "./FossWMemberCard";
import AIMemberCard from "./AIMemberCard";  
import DesignMemberCard from "./designMemberCard";  
import CCMemberCard from "./ccWingMemberCard";  
import AppMemberCard from "./AppMemberCard";  
import CoLeadsCard from "../../Components/TeamSpecialCard/CoLeadsCard"; 
import Box from '@mui/material/Box';  // Box component for layout
import { MenuItem, Select, Paper } from "@mui/material";  // Select and Paper components

function Team() {
  const [showField, setShowField] = useState("CoreTeam");
  const [admin, setAdmin] = useState(false);  // State to manage admin access
  const [selectedWing, setSelectedWing] = useState("Foss Wing");  // State to manage selected team wing

  useEffect(() => {}, [showField]);

  // Custom arrows for carousel navigation
  const SamplePrevArrow = props => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronLeftIcon style={{ color: "#fff", fontSize: "2rem" }} />
      </div>
    );
  };

  const SampleNextArrow = props => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronRightIcon style={{ color: "#fff", fontSize: "2rem" }} />
      </div>
    );
  };

  // Configuration for carousel (not in use but can be added later if needed)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Mapping for dynamic rendering of team components based on selected wing
  const teamComponents = {
    "Foss Wing": <FossWMember />,
    "CC Wing": <CCMemberCard />,
    "Design Wing": <DesignMemberCard />,
    "WebD Wing": <WebMemberCard />,
    "AI/ML Wing": <AIMemberCard />,
    "AppD Wing": <AppMemberCard />,
  };

  return (
    <div>
      <section className="Team_section">
        <Headings
          LargeHeading="Our Team"
          SmallHeading="The ones, who are making it happen..."
          Text="Learning goes hand-in-hand with building new and cool stuff. With our incredible team we aim to solve numerous problems in day-to-day life, and explore new heights in Technology!"
          PageIllustration={team_illustration}
        />
        
        {/* Admin button for adding new members */}
        {admin && (
          <Fab
            style={{ alignSelf: "flex-end", marginRight: "7vw" }}
            color="primary"
            aria-label="add"
          >
            <Link
              to="../team/new_member"
              style={{
                color: "white",
                height: "100%",
                width: "100%",
                margin: "0",
                display: "grid",
                placeItems: "center",
              }}
            >
              <AddIcon />
            </Link>
          </Fab>
        )}

        {/* Special team cards (Core and Co-leads) */}
        <div>
          <TeamSpecialCard />
          <br />
          <br />
          <CoLeadsCard />
        </div>
      </section>

      {/* Dropdown for selecting team wing */}
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h3" sx={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
          Our Experts
        </Typography>

        {/* Wing selection dropdown */}
        <Box sx={{ marginBottom: "2rem" }}>
          <Select
            value={selectedWing}
            onChange={(e) => setSelectedWing(e.target.value)}
            displayEmpty
            sx={{
              width: "250px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <MenuItem value="Foss Wing">Foss Wing</MenuItem>
            <MenuItem value="CC Wing">CC Wing</MenuItem>
            <MenuItem value="Design Wing">Design Wing</MenuItem>
            <MenuItem value="WebD Wing">WebD Wing</MenuItem>
            <MenuItem value="AI/ML Wing">AI/ML Wing</MenuItem>
            <MenuItem value="AppD Wing">AppD Wing</MenuItem>
          </Select>
        </Box>

        {/* Render the selected team's members */}
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
            // display:"flex",
            // justifyContent:"space-around"
            // flexWrap:"wrap"
          }}
        >
          {/* Inline Flexbox Layout */}
          <div
            style={{
              // display: "flex",
              // flexWrap: "wrap",
              // justifyContent: "space-evenly",
              // gap: "200px",
            }}
          >
            {/* Map through the team components and render the cards */}
            {teamComponents[selectedWing]}
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default Team;





// design 3 :-





// import React, { useState } from 'react';
// import { AppBar, Tab, Tabs, Box, Paper, Typography } from '@mui/material';
// import { Link } from "react-router-dom";
// import Headings from "../../Components/Page_headings/index";  // Heading component for page title and description
// import team_illustration from "../../Assets/Teams_page_illustration.svg";  // Team page illustration image
// import TeamSpecialCard from "../../Components/TeamSpecialCard/TeamSpecialCard";  // Special team cards
// import Fab from "@mui/material/Fab";  // Floating action button
// import AddIcon from "@mui/icons-material/Add";  
// import WebMemberCard from "./WebMemberCard"; 
// import FossWMember from "./FossWMemberCard";
// import AIMemberCard from "./AIMemberCard";  
// import DesignMemberCard from "./designMemberCard";  
// import CCMemberCard from "./ccWingMemberCard";  
// import AppMemberCard from "./AppMemberCard";  
// import CoLeadsCard from "../../Components/TeamSpecialCard/CoLeadsCard"; 

// const wings = [
//   { name: "Foss Wing", memberCard: <FossWMember /> },
//   { name: "CC Wing", memberCard: <CCMemberCard /> },
//   { name: "Design Wing", memberCard: <DesignMemberCard /> },
//   { name: "WebD Wing", memberCard: <WebMemberCard /> },
//   { name: "AI/ML Wing", memberCard: <AIMemberCard /> },
//   { name: "AppD Wing", memberCard: <AppMemberCard /> },
//   // Add more wings as needed
// ];




// export default function MenuBar() {
//   const [selectedWing, setSelectedWing] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setSelectedWing(newValue);
//   };

//   return (
//        <div>
//       <section className="Team_section">
//        <Headings
//           LargeHeading="Our Team"
//           SmallHeading="The ones, who are making it happen..."
//           Text="Learning goes hand-in-hand with building new and cool stuff. With our incredible team we aim to solve numerous problems in day-to-day life, and explore new heights in Technology!"
//           PageIllustration={team_illustration}
//         />
        
//         {/* Admin button for adding new members */}
//         {0 && (
//           <Fab
//             style={{ alignSelf: "flex-end", marginRight: "7vw" }}
//             color="primary"
//             aria-label="add"
//           >
//             <Link
//               to="../team/new_member"
//               style={{
//                 color: "white",
//                 height: "100%",
//                 width: "100%",
//                 margin: "0",
//                 display: "grid",
//                 placeItems: "center",
//               }}
//             >
//               <AddIcon />
//             </Link>
//           </Fab>
//         )}

//         {/* Special team cards (Core and Co-leads) */}
//         <div>
//           <TeamSpecialCard />
//           <br />
//           <br />
//           <CoLeadsCard />
//         </div>
//       </section>
//       {/* Menu Bar */}
//       <AppBar position="static" sx={{ backgroundColor: '#111' }}>
//         <Tabs
//           value={selectedWing}
//           onChange={handleTabChange}
//           textColor="inherit"
//           indicatorColor="primary"
//           centered
//         >
//           {wings.map((wing, index) => (
//             <Tab key={index} label={wing.name} />
//           ))}
//         </Tabs>
//       </AppBar>

//       {/* Wing Details */}
//       <Box sx={{ padding: '2rem' }}>
//         <Paper elevation={3} sx={{ padding: '1rem', borderRadius: '8px' }}>
//           <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
//             {wings[selectedWing].name}
//           </Typography>
//           <Typography>{wings[selectedWing].memberCard}</Typography>
//         </Paper>
//       </Box>
//     </div>
//   );
// }
