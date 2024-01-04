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
function MediaCard(props) {
  const classes = useStyles();
  return (
    <Box className={styles.card} sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ borderRadius: 15 }}>
        <CardContent>
          {/* for centering content - className={classes.footer} */}
          <div className={styles.container}>
            <div className={styles.img}>
              <Avatar
              src={`https://drive.google.com/uc?export=view&id=${props.id}`}
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
                {props.name}
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
                Member
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
            <MediaCard name={person.name} id={person.id}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
