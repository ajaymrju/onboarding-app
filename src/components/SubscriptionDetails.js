import { ToggleButtonGroup, ToggleButton, Typography, Box } from '@mui/material';
import { Controller, useFormContext, } from "react-hook-form"
import styles from '../styles/styles.module.css'
import personIcon from '../icons/personIcon.svg'
import peopleIcon from '../icons/peopleIcon.svg'


function SubscriptionDetails() {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                How are you planning to use Eden?
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom fontWeight={500} color={'#6f7988'} className={styles['step-caption']}>
                We'll streamline your setup experience accordingly
            </Typography>
            <Box className={styles['form-wrapper']}>
                <Controller
                    rules={{ required: true }}
                    render={({ field }) => (
                        <ToggleButtonGroup aria-label="gender" exclusive {...field} className={styles['customInput-wrapper']}>
                            <ToggleButton value="myself" className={styles['customInput-button']}>
                                <Box className={styles['toggle-select']}>
                                    <img src={personIcon} className={styles['icon-item']} />
                                    <Typography variant='body1' className={styles['subscription-label']} gutterBottom>For myself</Typography>
                                    <Typography variant='subtitle2' className={styles['subscription-caption']} >Write Better. Think more clearly. Stay Organized</Typography>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="team" className={styles['customInput-button']}>
                                <Box className={styles['toggle-select']}>
                                    <img src={peopleIcon} className={styles['icon-item']} />
                                    <Typography variant='body1' className={styles['subscription-label']} gutterBottom>With my team</Typography>
                                    <Typography variant='subtitle2' className={styles['subscription-caption']} >Wikis, docs, tasks & projects, all in one place.</Typography>
                                </Box>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    )}
                    name="subscription"
                    control={control}
                />
            </Box>
        </>
    )
}

export default SubscriptionDetails;
