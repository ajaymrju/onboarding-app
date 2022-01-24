import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { Controller, useFormContext, } from "react-hook-form"

function SubscriptionDetails() {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                How are you planning to use Eden?
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                We'll streamline your setup experience accordingly
            </Typography>
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

export default SubscriptionDetails;
