import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./memberCard.module.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const memberObject = [
  {
    name: "Maharshi Shailesh Bhesania",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Sahitya Malay Ranjeetbhai",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Prajjawal Agrahari",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Siddharth Bhikamchand Joshi",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Aaryan Kuntal",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619445/gdsc%20members/CC%20Wing/hraeuwyg6swdompqvo76.jpg",
    title: "Member"
  },
  {
    name: "Pranav Singh",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619447/gdsc%20members/CC%20Wing/mciyiabjh1rjsxehn7nf.jpg",
    title: "Member"
  },
  {
    name: "Ritesh Narayan Das",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619442/gdsc%20members/CC%20Wing/wid6kp5f5ocipoh1cf6p.jpg",
    title: "Member"
  }
];
function MediaCard({name,img,title}) {
  const classes = useStyles();
  return (
    <Box className={styles.card} sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ borderRadius: 15 }}>
        <CardContent>
          {/* for centering content - className={classes.footer} */}
          <div className={styles.container}>
            <div className={styles.img}>
              <Avatar
                src={img}
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                }} /*  margin: "auto" for centering avatar */
              />
            </div>
            <div className={styles.name}>
              <Typography
                sx={{
                  lineHeight: "110%",
                  marginBottom: "0.4vh",
                  fontSize: 20,
                  fontFamily: "Open Sans,sans-serif",
                  fontWeight: "600",
                  mt: 3,
                  ml: 1.5,
                }}
                color="#1B2733"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  marginBottom: "1vh",
                  fontFamily: "Open Sans,sans-serif",
                  ml: 1.5,
                }}
                color="#637282"
                gutterBottom
              >
                {title}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function CCMemberCard() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', m: 0, mt: -8, mb: 6, pl: 5, overflow: 'hidden' }}>
      <Grid
        container
        spacing={2}
      >
        {memberObject.map((person, index) => (
          <Grid 
            item 
            xs={12}   // 1 box per row on extra-small screens
            sm={6}    // 2 boxes per row on small screens
            md={4}    // 3 boxes per row on medium screens
            lg={3}    // 4 boxes per row on large screens
            key={index}
          > 
            <MediaCard name={person.name} img={person.img} title={person.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}