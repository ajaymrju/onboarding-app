import { Typography } from '@mui/material';
import { useFormContext, } from "react-hook-form"

function FormCompletion() {
    const { getValues } = useFormContext();

    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                Congratulations {getValues('displayName')}
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                We'll streamline your setup experience accordingly
            </Typography>
        </>
    )
}

export default FormCompletion;
