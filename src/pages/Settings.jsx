import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from '../components/Navbar'
import Lists from "../settings/Lists";

export default function Settings() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Lists/>
        </Box>
      </Box>
    </>
  );
}
