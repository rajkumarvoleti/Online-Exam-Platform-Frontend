import { Box, Card, Step, StepConnector, StepIconProps, StepLabel, Stepper, SxProps } from "@mui/material";
import TestIcon from "@/assets/icons/TestIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import PublishQuestionIcon from "@/assets/icons/PublishQuestionIcon";
import AddQuestionIcon from "@/assets/icons/AddQuestionIcon";

const styles:SxProps = {
  padding: "20px 40px",
  ".MuiStep-root":{
    padding: 0
  },
  ".MuiStepLabel-iconContainer":{
    padding: 0,
  },
  ".MuiStepConnector-root":{
    height: "4px",
  },
  ".MuiStepConnector-root.Mui-active":{
    background: "#C2E830",
  },
  ".MuiStepConnector-root.Mui-completed":{
    background: "#C2E830",
  },
  ".MuiStepConnector-root.Mui-disabled":{
    background: "#B3B3B3",
  },
};

const stepperIconStyles = (active:boolean|undefined) =>{
  const blueFilter = "brightness(0) saturate(100%) invert(18%) sepia(32%) saturate(4248%) hue-rotate(239deg) brightness(97%) contrast(154%)";
  const grayFilter = "brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(0%) hue-rotate(167deg) brightness(88%) contrast(81%)";
  const filter = active ? blueFilter : grayFilter;
  const color = active ? "#C2E830" : "#B3B3B3"
  return {
    border:`10px solid ${color}`,
    borderRadius: "50%",
    padding: "10px",
    ".icon":{
      width: "30px",
      height: "30px",
      filter: filter,
    }
  }
} 

const icons: { [index: string]: React.ReactElement } = {
  1: <TestIcon className="icon" />,
  2: <SettingsIcon className="icon" />,
  3: <AddQuestionIcon className="icon" />,
  4: <PublishQuestionIcon className="icon" />
};

const StepperIcon = (props:StepIconProps) => {
  return (
    <Box className="center" sx={stepperIconStyles(props.active || props.completed)}>
      {icons[String(props.icon)]}
    </Box>
  )
}

export default function Header({index}:{index:number}) {
  return (
    <Card sx={styles}>
      <Stepper connector={<StepConnector />} activeStep={index}>
        {[...Array(4)].map((val,i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={StepperIcon} />
          </Step>
        ))}
      </Stepper>
    </Card>
  )
}