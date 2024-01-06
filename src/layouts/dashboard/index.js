import React from "react";
import { Outlet } from "react-router-dom";
import {  Stack } from "@mui/material";
import SlidBar from "./SideBar"



const DashboardLayout = () => {
  return (
    <>
    <Stack direction="row">
      {/* side bar */}
      <SlidBar/>
      <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;

