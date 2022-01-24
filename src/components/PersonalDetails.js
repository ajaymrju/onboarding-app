import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext, } from "react-hook-form"

function PersonalDetails() {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                Welcome! First things first...
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                you can always change them later
            </Typography>
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

export default PersonalDetails;