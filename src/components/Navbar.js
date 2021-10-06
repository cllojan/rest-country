import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 4, bgcolor: "#fff" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#000",
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: "25px",
              flexGrow: 1,
              textAlign: "start",
              pl: 5,
            }}
          >
            Where in the world?
          </Typography>           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
