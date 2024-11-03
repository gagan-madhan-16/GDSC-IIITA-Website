import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./TeamSpecialCard.module.css";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
import person from "../../Assets/Images/person.png";
import { ReactComponent as Twitter } from "../../Assets/twitter-filled.svg";
import { ReactComponent as Github } from "../../Assets/github-filled.svg";
import { ReactComponent as Linkedin } from "../../Assets/linkedin-filled.svg";

export default function CoLeadsCard() {
  const [admin, setAdmin] = useState(true);
  return (
    <div className={styles.cards_container}>
      <Box className={styles.card} sx={{ minWidth: 275 }}>
        <Card variant="outlined" style={{ borderRadius: 15 }}>
          <CardContent>
            <div className={styles.container}>
              <div className={styles.img}>
                <Avatar
                  src="https://drive.google.com/uc?export=view&id=1QCrYrLg6zGR40otAssTpE2qlg6tQjzC6"
                  sx={{ width: 140, height: 140 }}
                />
              </div>
              <div className={styles.name}>
                <Typography
                  sx={{
                    lineHeight: "110%",
                    margin: "0",
                    marginBottom: "0.4vh",
                    fontSize: 20,
                    fontFamily: "Open Sans,sans-serif",
                    fontWeight: "600",
                  }}
                  color="#1B2733"
                  gutterBottom
                >
<<<<<<< HEAD
                  Mukul Singhal
=======
                  Ritesh Kumar Gupta
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    margin: "0",
                    marginBottom: "1vh",
                    fontFamily: "Open Sans,sans-serif",
                  }}
                  color="#637282"
                  gutterBottom
                >
                  GDSC IIITA Co-Lead
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    margin: "0",
                    paddingTop: "10px",
                    fontFamily: "Open Sans,sans-serif",
                  }}
                  color="#637282"
                  gutterTop
                ></Typography>
              </div>
              <div className={styles.social_icons}>
<<<<<<< HEAD
              <a href="https://www.twitter.com">
                  <Twitter width="25px" />
                </a>
                <a href="https://www.github.com">
                  <Github width="25px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mukul-singhal-16b164219/"
=======
                <a href="https://" target="_blank" rel="noreferrer">
                  <Twitter width="25px" />
                </a>
                {/* <a href="" className="fa fa-facebook" aria-hidden="true" target="_blank" width="px"></a> */}
                <a href="https://" target="_blank" rel="noreferrer">
                  <Github width="25px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-k-g/"
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin width="25px" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>

      <Box className={styles.card} sx={{ minWidth: 275 }}>
        <Card variant="outlined" style={{ borderRadius: 15 }}>
          <CardContent>
            <div className={styles.container}>
              <div className={styles.img}>
                <Avatar
                  src="https://drive.google.com/uc?export=view&id=1J6A2A5rKNcIhpJt5zRAVIxk2-iWLPYJp"
                  sx={{ width: 140, height: 140 }}
                />
              </div>
              <div className={styles.name}>
                <Typography
                  sx={{
                    lineHeight: "110%",
                    margin: "0",
                    marginBottom: "0.4vh",
                    fontSize: 20,
                    fontFamily: "Open Sans,sans-serif",
                    fontWeight: "600",
                  }}
                  color="#1B2733"
                  gutterBottom
                >
<<<<<<< HEAD
                  Prakhar Sukla
=======
                  Tushar Kumar
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    margin: "0",
                    marginBottom: "1vh",
                    fontFamily: "Open Sans,sans-serif",
                  }}
                  color="#637282"
                  gutterBottom
                >
                  GDSC IIITA Co-Lead
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    margin: "0",
                    paddingTop: "10px",
                    fontFamily: "Open Sans,sans-serif",
                  }}
                  color="#637282"
                  gutterTop
                ></Typography>
              </div>
              <div className={styles.social_icons}>
<<<<<<< HEAD
                <a href="https://www.twitter.com">
                  <Twitter width="25px" />
                </a>
                <a href="https://www.github.com">
                  <Github width="25px" />
                </a>
                <a href="https://www.linkedin.com/in/prakhar-shukla-py/">
=======
                <a href="www.twitter.com">
                  <Twitter width="25px" />
                </a>
                <a href="www.github.com">
                  <Github width="25px" />
                </a>
                <a href="https://www.linkedin.com/in/tushar-kumar-4522ba236/">
>>>>>>> d8dd41aaa23ea09e68f90121616e16431fb59ddc
                  <Linkedin width="25px" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
