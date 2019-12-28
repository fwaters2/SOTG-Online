import React from "react";
import Logo from "../Assets/Logos/SOTG_Icon.svg";
import { Button, Box, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function HomeNoUser() {
  return (
    <Container maxWidth="xs">
      <Box
        minHeight="calc(75vh - 50px)"
        //position="fixed"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box m={"3em"} mt={0}>
          <img src={Logo} alt="logo" />
        </Box>
        <Box>
          <Link
            to="/createevent"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              fullWidth
              variant="contained"
              style={{ background: "#0C61E1", color: "white" }}
            >
              Create Event
            </Button>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button fullWidth style={{ color: "#0C61E1" }} variant="outlined">
              About
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
