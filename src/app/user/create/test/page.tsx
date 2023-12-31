"use client"

import { Box, Card, SxProps } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";
import TestDetailsForm from "./TestDetailsForm";
import TestSettingsForm from "./TestSettingsForm";
import PricingFormComponent from "./PricingFormComponent";
import PublishTestComponent from "./PublishTestComponent";
import useCreateTest from "@/hooks/useCreateTest";

const styles:SxProps = {
  " > *":{
    margin: "10px",
  },
  ".main":{
    width:"100%",
    height:"100%",
    display: "flex",
  },
  ".forms":{
    m: "0 10px",
    width: "100%",
    height:"100%",
    minHeight: "73vh",
  // padding:" 20px 100px 10px 40px",
  boxShadow:"none",

  }
}

export default function Page(){

  const {index, setIndex} = useCreateTest();

  return (
    <Box sx={styles}>
      <Header index={index} />
      <Box className="main">
        <SideBar index={index} setIndex={setIndex} />
        <Card className="forms">
          {index === 0 && <TestDetailsForm />}
          {index === 1 && <TestSettingsForm />}
          {index === 2 && <PricingFormComponent />}
          {index === 3 && <PublishTestComponent />}
        </Card>
      </Box>
    </Box>
  );
}