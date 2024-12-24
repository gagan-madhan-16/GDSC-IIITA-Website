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
    name: "Kushal Bansal",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1734966541/gdsc%20members/Foss%20Wing/ikezdtyqunf8cpigylec.jpg",
    title: "Coordinator"
  },
  {
    name: "Sugam Sareen",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1734966687/gdsc%20members/Foss%20Wing/bk7su1lxcpdwla452neg.jpg",
    title: "Coordinator"
  },
  // {
  //   name: "Harshit Tatwedi",
  //   img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619452/gdsc%20members/Foss%20Wing/wm9hfhodm4ii2qxn5iv9.jpg",
  //   title: "Member"
  // },
  // {
  //   name: "Kanishk Sakarwar",
  //   img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619447/gdsc%20members/Foss%20Wing/p4mbglbdccgowrdnpeml.jpg",
  //   title: "Member"
  // },
  // {
  //   name: "Sneha Rastogi",
  //   img: "https://res.cloudinary.com/duf0inrg6/image/upload/t_crop1/gdsc%20members/Foss%20Wing/rxgm11clhlbzqsturvcz.jpg",
  //   title: "Member"
  // },
  // {
  //   name: "Swarup Narkhede",
  //   img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619452/gdsc%20members/Foss%20Wing/o9piiahifb3yuxxmkhjf.jpg",
  //   title: "Member"
  // }
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

export default function FossWMember() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', m: 0, mt: -8, mb: 6, pl: 5, overflow: 'hidden' }}>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ display: 'flex', justifyContent: 'space-around' }} // Add flexbox styling here
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