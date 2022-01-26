import { Typography } from '@mui/material';
import { useFormContext, } from "react-hook-form"
import styles from '../styles/styles.module.css'
import completeIcon from '../icons/completeIcon.png'

function FormCompletion() {
    const { getValues } = useFormContext();

    return (
        <>
            <img src={completeIcon} alt="done!" className={styles['complete-status']} />
            <Typography variant="h4" gutterBottom component="div" className={styles['text-trans--capitalize']}>
                Congratulations, {getValues('displayName')}!
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom fontWeight={500} color={'#6f7988'} className={styles['step-caption']}>
                We'll streamline your setup experience accordingly
            </Typography>
        </>
    )
}

export default FormCompletion;
