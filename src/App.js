import logo from './logo.svg';
import './App.css';
import { Stepper } from '@mui/material';
import { Step } from '@mui/material';
import { StepLabel } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const steps = [
    {
      title: 'Welcome! First things first...',
      subtitle: 'you can always change them later',
      app: <StepOne />
    },
    {
      title: "let's setup a home for all your work",
      subtitle: "you can always create a new workspace later",
      app: <StepTwo />
    },
    {
      title: 'How are you planning to use Eden?',
      subtitle: "We'll streamline your setup experience accordingly",
      app: <StepThree />
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (isLastStep()) {
      setActiveStep(activeStep)
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const totalSteps = () => steps.length;

  return (
    <div className="App">
      <Stepper activeStep={activeStep}>
        {steps.map((item, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={item} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <h3>{steps[activeStep].title}</h3>

      <p>{steps[activeStep].subtitle}</p>

      {steps[activeStep].app ? steps[activeStep].app : "Sorry! there's an issue here"}

      <Button variant="contained" onClick={handleNext}>
        {activeStep === totalSteps() - 1 ? 'Launch Workspace' : 'Create Workspace'}
      </Button>
    </div>
  );
}

function StepOne() {
  return (
    <>
      <h1>StepOne</h1>
    </>
  )
}

function StepTwo() {
  return (
    <>
      <h1>StepTwo</h1>
    </>
  )
}

function StepThree() {
  return (
    <>
      <h1>StepThree</h1>
    </>
  )
}

export default App;
