"use client"

import { Box, Card, SxProps } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";
import TestDetailsForm from "./TestDetailsForm";
import TestSettingsForm from "./TestSettingsForm";
import PricingFormComponent from "./PricingFormComponent";
import PublishTestComponent from "./PublishTestComponent";

const styles:SxProps = {
  ".main":{
    width:"100%",
    height:"100%",
    display: "flex",
  },
  ".forms":{
    width: "100%",
    height:"100%",
    minHeight: "73vh",
  }
}

export default function Page(){

  const [index, setIndex] = useState<number>(0);

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