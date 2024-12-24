import React, { useEffect, useContext } from "react";
import apiContext from "../../ContextApi/ApiContext";
import { Link } from "react-router-dom";
import DSBlogCard from "../../Components/DSBlogCard";
import Headings from "../../Components/Page_headings";
import HeadingButton from "../../Components/Heading_button";
import { Grid } from "@material-ui/core";
import "./Blogs.css";
import blog_illustration from "../../Assets/Blogs_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "./BlogCard";
import imag from "./thankyou.jpg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./BlogCard.module.css";
import image1 from "../../Assets/Images/img1.png";
import { useState } from "react";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import CardMedia from "@mui/material/CardMedia";
import MustReadCard from "../../Components/mustReadCard";
import "./index.css";
import FormBtnBg from "../../Assets/Form_btns_bg.png";

const postsdata = [
  {
    title: "Adobe GenSolve Hackathon ",
    body: "Discover how Team FrYdAy from IIIT Allahabad created 'Curve Topia,' a groundbreaking tool that won Adobe GenSolve Hackathon 2024! Click to Read more",
    date: "Nov 1 , 2024",
    name: "Shubham Gupta",
    profileImage: "https://res.cloudinary.com/duf0inrg6/image/upload/v1734965061/gdsc%20members/Web%20Dev%20Wing/hrurcz6totjdnysu3epl.jpg",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ty8XflJrNULShAbDXSMFCg.png",
    blog:"https://medium.com/nybles/adobe-gensolve-hackathon-fryday-all-india-winners-d426124ebf45",
  },
  {
    title: "Why Jetpack DataStore over SharedPreferences?",
    body: "Discover why Jetpack DataStore is a superior, safer, and more efficient alternative to SharedPreferences for Android storage. Click to Read more",
    date: "Apr 5 , 2022",
    name: "Tanushree",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHuJ2gSBM7DRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718797834720?e=1740614400&v=beta&t=RNfjpSAsLRHr7LW6ejyiVR4peoSPm3kSfWV_Rr5OQ0w",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*R_k6t_0vTBc9ayPT",
    blog:"https://medium.com/developer-student-clubs-iiit-allahabad/why-jetpack-datastore-over-sharedpreferences-aefdb2c25cf6",
  },
  {
    title: "GSC'24 EcoBloom (Global Top 100)",
    body: "Discover how Team EcoBloom from IIIT Allahabad, comprising Nijval, Rishika, Rishi, and Vatsal, secured a spot in the global top 100 of the Google Solution Challenge 2024 with their innovative project!  Click to Read more",
    date: "Oct 15 , 2024",
    name: "Vatsal Bhuva",
    profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQGCg-bQLK2x6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704564779020?e=2147483647&v=beta&t=-K1jtn1OzaxmEPMP6a4P1dSt-kFBYwZ9ciN5CSwC-t0",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*UEGMYX3qyYBo__Q8Mz8sbg.jpeg",
    blog:"https://medium.com/nybles/google-solution-challenge-2024-ecobloom-global-top-100-d2365f5de060",
  },
  {
    title: "Understanding the React Hooks",
    body:"Explore how React Hooks enable functional components to manage state and lifecycle features, simplifying code and enhancing reusability. Click to Read more" , 
    date: "Mar 24 , 2022",
    name: "Mohsin Razae",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQFUVo0tH6MZcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697466390332?e=1740614400&v=beta&t=w2izLFZDsz0HeXaRS_oYMffZYp2d_1RB_9ff_60USZE",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*ZX5BZ5qWC44gGdOK.png",
    blog:"https://medium.com/developer-student-clubs-iiit-allahabad/understanding-the-react-hooks-aaa79be9c929",
  },
  {
    title: "Hands On Expandable List Views",
    body:"Learn how to implement Expandable List Views in Android to display hierarchical data efficiently, enhancing user interaction.  Click to Read more" ,
    date: "Nov 4 , 2020",
    name: "Pranshu Tripathi",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHL2R1Z1UyWXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719578925844?e=1740614400&v=beta&t=gI9GWlDBv68_PqD_24hbSu_V4NRR6gFokxK_31nUW-g",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sHjIvcJwFQyPZrx3E43Lqg.png",
    blog:"https://medium.com/developer-student-clubs-iiit-allahabad/hands-on-expandable-list-views-1f9cdecc187b",
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 960, min: 680 },
    items: 2,
  },
  LargeMobile: {
    breakpoint: { max: 680, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


function handleSubmit(url){
  window.location.href=url
}


function Blogs() {
	const context = useContext(apiContext);
	const { data, getAllData, getAttribute, blogs, getAllBlogData, addBlogCard, parameter } = context;
	let attribute = "blogs";

	useEffect(() => {
		getAllBlogData();
		getAttribute(null);
	}, [parameter]);
	console.log(parameter);
  
	const [admin, setAdmin] = useState(true);

  const buttonStyle = {
    backgroundColor: '#0A001E',
    border: '3px solid #A000F0',
    color: '#FFFFFF',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'inline-block',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

	return (
    <>
      <section
        className="Blogs_section"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10vh",
          paddingTop: "10.88vh",
          paddingBottom: "6vh",
          background: "#ffffff",
          alignText: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Headings
          className="Heading"
          LargeHeading="Blogs"
          SmallHeading="Read our latest blogs"
          Text="Our inspiring young developers and learners have a piece of knowledge to share with you. 
				A collection of blogs based on varied domains including Flutter and Kotlin Development, Blockchain, 
				Web Development and NFT's. ... Do give a it a read!"
          PageIllustration={blog_illustration}
        />

        {/* <div container style={{ width: '90%', height: '22rem', backgroundColor: '#f7f4f2', marginBottom: '4rem', display: 'flex', direction: 'row', justifyContent: 'center', alignContent: 'center' }}>

				<div style={{ display: 'flex', width: '35%' }}><img src={imag} style={{ width: '45rem', height: '22rem', cursor: 'not-allowed' }} /></div>
				<div style={{ display: 'flex', width:'75%',height:'20rem'}}>
					<Box className={styles.cardM} sx={{ minWidth: 275 }}>
						<Card variant="outlined">
							<CardContent>
								<div style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
									<br></br>
									Inclusivo Builds Job for Job Seekers

								</div>
								<br></br>
								<div className={styles.text}>
									<Typography variant="body2" sx={{ margin: 0 }}>
										"Inclusivo is an online platform that makes it easier for people from underprivileged communities
										to find and get relevant jobs in their respective fields"
									</Typography>
								</div>

								<div className={styles.container} style={{ marginTop: '2rem' }}>
									<div className={styles.img} style={{ marginBottom: '-0.5rem' }}>
										<Avatar src={image1} sx={{ width: 28, height: 28 }} />
									</div>
									<div className={styles.name}>
										<Typography
											sx={{ fontSize: 14, margin: "0" }}
											color="text.primary"
											gutterBottom
										>
											Elemento
										</Typography>
										<Typography sx={{ fontSize: 10, margin: "0" }} color="text.secondary" gutterBottom>
											jan 28 . 8 min read
										</Typography>
									</div>
								</div>
							</CardContent>



							<CardActions className={styles.buttons}>

								<Link to="" style={{ textDecoration: "none" }}>
									<Button
										className={styles.btnP}
										width='20rem'

										variant="contained"
										disableElevation
										style={{ backgroundColor: "#08ad5d" }}
									>
										<ViewProject className={styles.svg} />
										Read on Medium
									</Button>
								</Link>
							</CardActions>
							{admin && (
								<CardActions className={styles.buttonsAdmin}>
									<Link to="" style={{ textDecoration: "none" }}>
										<Button
											className={styles.btn}
											size="small"
											variant="contained"
											disableElevation
											style={{ backgroundColor: "#EA4335" }}
										>
											Delete
										</Button>
									</Link>
									<Link to="" style={{ textDecoration: "none" }}>
										<Button
											className={styles.btn}
											size="small"
											variant="outlined"
											disableElevation
											style={{ color: "#08ad5d", borderColor: "#08ad5d" }}
										>
											Edit
										</Button>
									</Link>
								</CardActions>
							)}
						</Card>
					</Box>
				</div>

			</div> */}

        <div className="heading_plusBtn">
          <h2
            style={{
              fontWeight: "600",
              fontFamily: "Open Sans,Poppins,sans-serif",
              color: "#1b2733",
              marginTop: "-10vh",
            }}
            className="heading"
          >
            Must Read
          </h2>
        </div>
        <MustReadCard />

        <div className="heading_plusBtn">
          <h2
            style={{
              fontWeight: "600",
              fontFamily: "Open Sans,Poppins,sans-serif",
              color: "#1b2733",
              marginTop: "2vh",
            }}
            className="heading"
          >
            Most Viewed Blogs by GDSC Members :-
          </h2>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          className="car"
          renderButtonGroupOutside={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          responsive={responsive}
          transitionDuration={500}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
        >
          {postsdata.map((news, index) => (
            <div  onClick={() => handleSubmit(news.blog)}>
              <Card
                sx={{
                  maxWidth: 300,
                  borderRadius: 3,
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                <CardMedia
                  sx={{
                    height: 140,
                    borderRadius: 2,
                    margin: 2,
                    objectFit: "cover",
                  }}
                  image={news.image}
                  title="news thumbnail"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    marginTop={-2.5}
                    fontWeight={"bold"}
                    fontSize={16}
                    sx={{
                      color: "#3E3232",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {news.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    fontSize={12}
                    sx={{
                      color: "#3E3232",
                      opacity: 0.75,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {news.body}
                  </Typography>
                </CardContent>
                <Card
                  sx={{
                    maxWidth: 340,
                    marginTop: 0,
                    marginLeft: 2,
                    marginRight: 2,
                    marginBottom: 2,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F5F5F5",
                    boxShadow: "none",
                  }}
                >
                  <Avatar
                    src={news.profileImage}
                    sx={{ margin: 1, borderRadius: 3 }}
                  />

                  <div style={{}}>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        marginBottom: 0.1,
                        fontSize: 14,
                        fontWeight: 550,
                        color: "#3E3232",
                      }}
                    >
                      {news.name}
                    </Typography>
                    <Typography
                      fontSize={11}
                      color={"#3E3232"}
                      sx={{ opacity: 0.75 }}
                    >
                      {news.date}
                    </Typography>
                  </div>
                </Card>
              </Card>
            </div>
          ))}
          
        </Carousel>
            <HeadingButton
            LargeHeading="Want to read all Blogs written by gdsc members?"
            btnText="Click Here"
            bg={FormBtnBg}
            formLink="https://medium.com/developer-student-clubs-iiit-allahabad"
            />
            <HeadingButton
            LargeHeading="Want to get your Blog featured under us?"
            SmallHeading="Just drop us your Blog Details."
            btnText="Submit Blog"
            bg={FormBtnBg}
            formLink="https://docs.google.com/"
            />
      </section>
    </>
  );
}

export default Blogs;
