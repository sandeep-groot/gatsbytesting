import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../ProTip";
import Link from "../Link";
import Copyright from "../Copyright";

const HomePage = (props) => {
  console.log("Home props :>> ", props);
  return (
    <Container maxWidth="sm" {...props}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby example
        </Typography>
        <Link to="/about" color="secondary" state={{ modal: true }}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default HomePage;
