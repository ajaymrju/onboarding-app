import logo from './logo.svg';
import './App.css';
import { Stepper, Step, StepLabel, Button, TextField, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import { useForm, Controller, FormProvider, useFormContext, } from "react-hook-form"


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
  },
  {
    title: 'Congratulations',
    subtitle: "lets go",
    app: <StepFour />
  }
];
function App() {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (data) => {
    if (isLastStep()) {
      setActiveStep(activeStep)
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    console.log(data)
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const totalSteps = () => steps.length;

  const methods = useForm({
    defaultValues: {
      fullName: "",
      displayName: "",
      workspaceName: "",
      workspaceURL: "",
      subscription: "",
    },
  });

  return (
    <div className="App">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleNext)}>

          <Stepper activeStep={activeStep}>
            {steps.map((item, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}></StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <h3>{steps[activeStep].title}</h3>

          <p>{steps[activeStep].subtitle}</p>

          {steps[activeStep].app ? steps[activeStep].app : "Sorry! there's an issue here"}

          <Button variant="contained" type="submit" >
            {activeStep === totalSteps() - 1 ? 'Launch Workspace' : 'Create Workspace'}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

function StepOne() {
  const { control, formState: { errors } } = useFormContext();
  return (
    <>
      <label>Full Name</label>
      <Controller
        control={control}
        name="fullName"
        rules={{ required: "Full Name is required" }}
        render={({ field }) => (
          <TextField
            id="fullName"
            variant="outlined"
            placeholder="Steve Jobs"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.fullName)}
            helperText={errors.fullName?.message}
          />
        )}
      />
      <label>Display Name</label>
      <Controller
        control={control}
        name="displayName"
        rules={{ required: "Display Name is required" }}
        render={({ field }) => (
          <TextField
            id="displayName"
            variant="outlined"
            placeholder="Steve"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.displayName)}
            helperText={errors.displayName?.message}
          />
        )}
      />
    </>
  )
}

function StepTwo() {
  const { control, formState: { errors } } = useFormContext();

  return (
    <>
      <label>Workspace Name</label>
      <Controller
        control={control}
        name="workspaceName"
        rules={{ required: "Workspace Name is required" }}
        render={({ field }) => (
          <TextField
            id="workspaceName"
            variant="outlined"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.workspaceName)}
            helperText={errors.workspaceName?.message}
          />
        )}
      />
      <label>Workspace URL</label>
      <div>
        <span>www.eden.com/</span>
        <Controller
          control={control}
          name="workspaceURL"
          rules={{ required: "Workspace URL is required" }}
          render={({ field }) => (
            <TextField
              id="workspaceURL"
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.workspaceURL)}
              helperText={errors.workspaceURL?.message}
            />
          )}
        />
      </div>


    </>
  )
}

function StepThree() {
  const { control, formState: { errors } } = useFormContext();

  return (
    <>
      <Controller
        rules={{ required: true }}
        render={({ field }) => (
          <ToggleButtonGroup aria-label="gender" exclusive {...field}>
            <ToggleButton value="myself">

              <h4>For myself</h4>
              <p>Write Better. Think more clearly. Stay Organized.</p>
            </ToggleButton>
            <ToggleButton value="team">

              <h4>With my team</h4>
              <p>Write Better. Think more clearly. Stay Organized.</p>
            </ToggleButton>
          </ToggleButtonGroup>
        )}
        name="subscription"
        control={control}
      />
    </>
  )
}

function StepFour() {
  return (
    <>
      <h1>StepFour</h1>
    </>
  )
}


export default App;
