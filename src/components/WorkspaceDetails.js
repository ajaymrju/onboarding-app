import { TextField, Typography, Box } from '@mui/material';
import { Controller, useFormContext, } from "react-hook-form"
import styles from '../styles/styles.module.css'

function WorkspaceDetails() {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                Let's set up a home for all your work
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom fontWeight={500} color={'#6f7988'} className={styles['step-caption']}>
                You can always create a new workspace later
            </Typography>
            <Box className={styles['form-wrapper']}>
                <Box>
                    <Typography variant='body1'>Workspace Name</Typography>
                    <Controller
                        control={control}
                        name="workspaceName"
                        rules={{ required: "Workspace Name is required" }}
                        render={({ field }) => (
                            <TextField
                                id="workspaceName"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                placeholder='Eden'
                                {...field}
                                error={Boolean(errors?.workspaceName)}
                                helperText={errors.workspaceName?.message}
                            />
                        )}
                    />
                </Box>
                <Box>
                    <Typography variant='body1'>Workspace URL</Typography>
                    <Box display={'flex'} alignItems={'center'}>
                        <Box component="span" className={styles['input-tag']}>www.eden.com/</Box>
                        <Controller
                            control={control}
                            name="workspaceDirectory"
                            render={({ field }) => (
                                <TextField
                                    className={styles['custom-input--tagged']}
                                    id="workspaceDirectory"
                                    variant="outlined"
                                    fullWidth
                                    margin='dense'
                                    placeholder='Example'
                                    sx={{
                                        borderBottomLeftRadius: 0,
                                        borderTopLeftRadius: 0,
                                    }}
                                    {...field}
                                    error={Boolean(errors?.workspaceURL)}
                                    helperText={errors.workspaceURL?.message}
                                    InputProps={{
                                        classes: {
                                            input: styles['custom-input--tagged']

                                        },
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default WorkspaceDetails;