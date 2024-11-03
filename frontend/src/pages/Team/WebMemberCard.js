import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./memberCard.module.css";
import { makeStyles } from "@material-ui/core/styles";
/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
 */
//drive.google.com/file/d//view?usp=share_link
//
const memberObject = [
  {
<<<<<<< HEAD
    name: "Harshal Gainer",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Lavish Meena",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619456/gdsc%20members/Web%20Dev%20Wing/qby4spz9ol2twliuwr4e.jpg",
    title: "Coordinator"
  },
  {
    name: "Swaroop Dora",
    img: "",
    title: "Coordinator"
  },
  {
    name: "Shubham Gupta",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730631402/gdsc%20members/Web%20Dev%20Wing/v3rw1hjznfkvyyod7mv3.jpg",
    title: "Coordinator"
  },
  {
    name: "Pratham Jain",
    img: "",
    title: "Member"
  },
  {
    name: "Vardaan Pahwa",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619441/gdsc%20members/Web%20Dev%20Wing/ue4svshlfcn1dmiaaryo.jpg",
    title: "Member"
  },
  {
    name: "Parth Chavan",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619457/gdsc%20members/Web%20Dev%20Wing/bnu3hn6s9xw31kvs0snv.png",
    title: "Member"
  },
  {
    name: "Gagan Madhan",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619455/gdsc%20members/Web%20Dev%20Wing/jty6cyjzdwg9tsxvcuky.jpg",
    title: "Member"
  },
  {
    name: "Mokshe Jain",
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/v1730619695/gdsc%20members/Web%20Dev%20Wing/fs0lq7qt07dusacli4jm.jpg",
    title: "Member"
=======
    name: "Shaurya Jain",
    id: "1yRKOZcxruDMeRyXbweDu5PADh-TEbQm2",
    //https://drive.google.com/file/d//view?usp=drive_link
  },
  {
    name: "Lavish Meena",
    id: "1VbqR-bUDgPdUsls0aVP-0SHA5z-qSXuh",
  },
  {
    name: "Shubham Gupta",
    id: "1oQpz3JaJ6XBGKok0LfkOAJkeBApp0f5y",
  },
  {
    name: "Parimal Amrutkar",
    id: "19bcmE-7X7XVdT_1sZdOoCIQzWMznasxA",
  },
  {
    name: "Vasu Singla",
    id: "1OoE_kbLm9rS8MOiylPmRuM-wfA97xCH2",
  },
  {
    name: "Anmol Sinha",
    id: "1rSGBE8d8I5C6S6hSb3oiluTfk785TTJH",
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
  },
];
const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign:"center"
  },
  footer: {
    display:"flex",
    justifyContent:"center",
  }
}));
<<<<<<< HEAD
function MediaCard({name,img,title}) {
=======
function MediaCard(props) {
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
  const classes = useStyles();
  return (
    <Box className={styles.card} sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ borderRadius: 15 }}>
        <CardContent>
<<<<<<< HEAD
          <div className={styles.container}>
            <div className={styles.img}>
              <Avatar
              src={img}
              // src={`https://drive.google.com/uc?export=view&id=${props.id}`}
=======
          {/* for centering content - className={classes.footer} */}
          <div className={styles.container}>
            <div className={styles.img}>
              <Avatar
              src={`https://drive.google.com/uc?export=view&id=${props.id}`}
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
<<<<<<< HEAD
                }}
=======
                }} /*  margin: "auto" for centering avatar */
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
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
<<<<<<< HEAD
                {name}
=======
                {props.name}
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
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
<<<<<<< HEAD
                {title}
=======
                Member
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function WebMemberCard() {
  return (
    <Box sx={{ flexGrow: 1 , width:1035,m:15,mt:-8,mb:6}}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {memberObject.map((person, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
<<<<<<< HEAD
            <MediaCard name={person.name} img={person.img} title={person.title}></MediaCard>
=======
            <MediaCard name={person.name} id={person.id}></MediaCard>
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
