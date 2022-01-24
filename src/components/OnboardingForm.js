import { Stepper, Step, StepLabel, Button, } from '@mui/material';
import { useState } from 'react';
import { useForm, FormProvider, } from "react-hook-form"
import PersonalDetails from "./PersonalDetails"
import WorkspaceDetails from "./WorkspaceDetails"
import SubscriptionDetails from "./SubscriptionDetails"
import FormCompletion from "./FormCompletion"


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
            workspaceURL: "",
            subscription: "myself",
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

                    {steps[activeStep].app ? steps[activeStep].app : "Sorry! there's an issue here"}

                    <Button variant="contained" type="submit" >
                        {activeStep === totalSteps() - 1 ? 'Launch Workspace' : 'Create Workspace'}
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
}

export default OnboardingForm;