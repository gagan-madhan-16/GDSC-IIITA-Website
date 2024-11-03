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
    name: "Thota Siddhartha",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Shalini Chongdar",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730644546/gdsc%20members/Design%20Wing/heqohzkqdc1j5lwfopzi.jpg",
    title: "Coordinator"
  },
  {
    name: "Satyam Naman",
    img: "",
    title: "Member"
  },
  {
    name: "Mukund Narayan Jha",
    img: "",
    title: "Member"
  },
  {
    name: "Sree Navya",
    img: "",
    title: "Member"
  },
  {
    name: "Priyanshi Maheshwari",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619444/gdsc%20members/Design%20Wing/wj8scohytrshoilf1rjl.jpg",
    title: "Member"
  },
  {
    name: "Krishika Mehta",
    img: "",
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

export default function FossWMember() {
  return (
    <Box sx={{ flexGrow: 1, width: 1035, m: 15,mt:-8,mb:6}}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {memberObject.map((person, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <MediaCard name={person.name} img={person.img} title = {person.title}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
