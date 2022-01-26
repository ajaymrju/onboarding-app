import { Box, Container, TextField, Typography } from '@mui/material';
import { Controller, useFormContext, } from "react-hook-form"
import styles from '../styles/styles.module.css'

function PersonalDetails() {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
            <Typography variant="h4" gutterBottom className={styles['step-headline']}>
                Welcome! First things first...
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom fontWeight={500} color={'#6f7988'} className={styles['step-caption']}>
                You can always change them later
            </Typography>
            <Box className={styles['form-wrapper']}>
                <Box>
                    <Typography variant='body1' color={'#42474e'}>Full Name</Typography>
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
                                margin="dense"
                                {...field}
                                error={Boolean(errors?.fullName)}
                                helperText={errors.fullName?.message}
                            />
                        )}
                    />
                </Box>
                <Box>
                    <Typography variant='body1' color={'#42474e'}   >Display Name</Typography>
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
                                margin="dense"
                                {...field}
                                error={Boolean(errors?.displayName)}
                                helperText={errors.displayName?.message}
                            />
                        )}
                    />
                </Box>

            </Box>
        </>
    )
}

export default PersonalDetails;