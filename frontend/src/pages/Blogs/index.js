import React, { useEffect, useContext } from "react";
import apiContext from "../../ContextApi/ApiContext";
import { Link } from "react-router-dom";
import DSBlogCard from "../../Components/DSBlogCard";
import Headings from "../../Components/Page_headings";
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


const postsdata = [
  {
    title: "Learn Microinteraction",
    body: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ornare pretium placerat ut platea. Purus blandit integer sagittis massa vel est hac.",
    date: "April 20 , 2023",
    name: "John Doe",
    profileImage: "https://i.pravatar.cc/202",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Learn Microinteraction",
    body: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ornare pretium placerat ut platea. Purus blandit integer sagittis massa vel est hac.",
    date: "Jan 20 , 2023",
    name: "Jane Doe",
    profileImage: "https://i.pravatar.cc/200",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Learn Microinteraction",
    body: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ornare pretium placerat ut platea. Purus blandit integer sagittis massa vel est hac.",
    date: "May 2 , 2023",
    name: "Walter white",
    profileImage: "https://i.pravatar.cc/201",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Learn Microinteraction",
    body: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ornare pretium placerat ut platea. Purus blandit integer sagittis massa vel est hac.",
    date: "December 4 , 2023",
    name: "Walter white",
    profileImage: "https://i.pravatar.cc/203",
    image: "https://picsum.photos/200/300",
  },
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



function Blogs() {
	const context = useContext(apiContext);
	const { data, getAllData, getAttribute, blogs, getAllBlogData, addBlogCard, parameter } = context;
	let attribute = "blogs";
	useEffect(() => {
		//getAllData(attribute);
		getAllBlogData();
		getAttribute(null);
	}, [parameter]);
	console.log(parameter);
	const [admin, setAdmin] = useState(true);
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
            All Blogs
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
            <div>
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
      </section>
    </>
  );
}

export default Blogs;
