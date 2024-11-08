import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headings, { HeadingNew } from "../../Components/Page_headings/index";
import team_illustration from "../../Assets/Teams_page_illustration.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./carousel.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TeamSpecialCard from "../../Components/TeamSpecialCard/TeamSpecialCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import WebMemberCard from "./WebMemberCard";
import "./Team.css";
import "bootstrap/dist/css/bootstrap.css";
import FossWMember from "./FossWMemberCard";
import AIMemberCard from "./AIMemberCard";
import DesignMemberCard from "./designMemberCard";
import CCMemberCard from "./ccWingMemberCard";
import AppMemberCard from "./AppMemberCard";
import CoLeadsCard from "../../Components/TeamSpecialCard/CoLeadsCard";
import Box from '@mui/material/Box';

function Team() {
	const [showField, setshowField] = useState("CoreTeam");
	const [admin, setAdmin] = useState(false);
	useEffect(() => {}, [showField]);

	const SamplePrevArrow = props => {
		const { className, onClick } = props;

		return (
			<div className={className} onClick={onClick}>
				<ChevronLeftIcon
					style={{
						color: "#fff",
						fontSize: "2rem",
					}}
				/>
			</div>
		);
	};

	const SampleNextArrow = props => {
		const { className, onClick } = props;
		return (
			<div className={className} onClick={onClick}>
				<ChevronRightIcon
					style={{
						color: "#fff",
						fontSize: "2rem",
					}}
				/>
			</div>
		);
	};
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
    <div>
      {/* <div>
                <Slider autoplay {...settings}>
                    {
                        slider_img.map((item, index) => (
                            <div key={index} style={{
                                textAlign: 'center'
                            }}>
                                <img style={{
                                    width: '100%',
                                    zINdex: -1
                                }} src={item} alt="img" />
                            </div>
                        ))
                    }
                </Slider>
                    <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div> */}
      <section className="Team_section">
        <Headings
          LargeHeading="Our Team"
          SmallHeading="The ones, who are making it happen..."
          Text="Learning goes hand-in-hand with building new and cool stuff.
                     With our incredible team we aim to solve numerous problems in day-to-day life, and explore new heights in Technology!"
          PageIllustration={team_illustration}
        />
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
        <div>
          <TeamSpecialCard />
          <br></br>
          <br></br>
          <CoLeadsCard />
          {/* insert new special card here */}
        </div>
      </section>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box sx={{ padding: '0px', marginBottom: '16px' }}>
              <HeadingNew LargeHeading="Foss Wing" />
            </Box>

          </AccordionSummary>
          <AccordionDetails>
            <FossWMember />
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box sx={{ padding: '0px', marginBottom: '16px' }}>
              <HeadingNew LargeHeading="CC Wing" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
           <CCMemberCard />
          </AccordionDetails>
        </Accordion>

        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box sx={{ padding: '0px', marginBottom: '16px' }}>
              <HeadingNew LargeHeading="Design Wing" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
           <DesignMemberCard />
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{ padding: '0px', marginBottom: '16px' }}>
              <HeadingNew LargeHeading="WebD Wing" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <WebMemberCard />
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box sx={{ padding: '0px', marginBottom: '16px' }}>
              <HeadingNew LargeHeading="AI/ML Wing" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <AIMemberCard />
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box sx={{ padding: '0px', marginBottom: '16px' }}>
              <HeadingNew LargeHeading="AppD Wing" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <AppMemberCard />
          </AccordionDetails>
        </Accordion>


        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <HeadingNew LargeHeading="DevOps And Cloud Computing" />
          </AccordionSummary>
          <AccordionDetails>
            <DevopsMemberCard />
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}

export default Team;
