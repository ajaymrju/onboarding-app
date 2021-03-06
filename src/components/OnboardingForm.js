import { Stepper, Step, StepLabel, Button, Container, styled } from '@mui/material';
import { useState } from 'react';
import { useForm, FormProvider, } from "react-hook-form"
import PersonalDetails from "./PersonalDetails"
import WorkspaceDetails from "./WorkspaceDetails"
import SubscriptionDetails from "./SubscriptionDetails"
import FormCompletion from "./FormCompletion"
import styles from '../styles/styles.module.css'
import { Box } from '@mui/system';
import StepConnector, {
    stepConnectorClasses
} from "@mui/material/StepConnector";

const steps = [
    {
        title: 'Welcome! First things first...',
        subtitle: 'you can always change them later',
        app: <PersonalDetails />
    },
    {
        title: "let's setup a home for all your work",
        subtitle: "you can always create a new workspace later",
        app: <WorkspaceDetails />
    },
    {
        title: 'How are you planning to use Eden?',
        subtitle: "We'll streamline your setup experience accordingly",
        app: <SubscriptionDetails />
    },
    {
        title: 'Congratulations',
        subtitle: "lets go",
        app: <FormCompletion />
    }
];
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: 'rgb(102,77,229)',
        }
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: 'rgb(102,77,229)',
        }
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1
    }
}));
function OnboardingForm() {
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
            workspaceURL: "www.eden.com/",
            workspaceDirectory: "",
            subscription: "myself",

        },
    });

    return (
        <div className="form-container">
            <Stepper activeStep={activeStep} className={styles['stepper-wrapper']} connector={<ColorlibConnector />}>
                {steps.map((item, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={index} {...stepProps} className={styles['step-item']}>
                            <StepLabel {...labelProps}></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Container maxWidth="sm">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleNext)}>
                        {steps[activeStep].app ? steps[activeStep].app : "Sorry! there's an issue here"}
                        <Box maxWidth={390} margin={"auto"} marginTop={'24px'}>
                            <Button variant="contained" type="submit" fullWidth >
                                {activeStep === totalSteps() - 1 ? 'Launch Workspace' : 'Create Workspace'}
                            </Button>
                        </Box>
                    </form>
                </FormProvider>
            </Container>
        </div >
    );
}

export default OnboardingForm;