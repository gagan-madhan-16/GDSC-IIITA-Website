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
    img: "https://res.cloudinary.com/duf0inrg6/image/upload/t_crop2/gdsc%20members/Web%20Dev%20Wing/bnu3hn6s9xw31kvs0snv.jpg",
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
function MediaCard({name,img,title}) {
  const classes = useStyles();
  return (
    <Box className={styles.card} sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ borderRadius: 15 }}>
        <CardContent>
          <div className={styles.container}>
            <div className={styles.img}>
              <Avatar
              src={img}
              // src={`https://drive.google.com/uc?export=view&id=${props.id}`}
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                }}
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

export default function WebMemberCard() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', m: 0, mt: -8, mb: 6, pl:5, overflow: 'hidden' }}>
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

