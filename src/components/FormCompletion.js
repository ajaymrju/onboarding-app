import { Typography } from '@mui/material';
import { useFormContext, } from "react-hook-form"
import styles from '../styles/styles.module.css'
import completeIcon from '../icons/completeIcon.png'

function FormCompletion() {
    const { getValues } = useFormContext();

    return (
        <>
            <img src={completeIcon} alt="done!" className={styles['complete-status--img']} />
            <Typography variant="h4" gutterBottom component="div" className={styles['step-headline']} >
                Congratulations, {getValues('displayName')}!
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom fontWeight={500} color={'#6f7988'} className={styles['step-caption']}>
                You have completed onboarding, you can start using the Eden!
            </Typography>
        </>
    )
}

export default FormCompletion;
