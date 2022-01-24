import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext, } from "react-hook-form"

function WorkspaceDetails() {
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                let's setup a home for all your work
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                you can always create a new workspace later
            </Typography>
            <label>Workspace Name</label>
            <Controller
                control={control}
                name="workspaceName"
                rules={{ required: "Workspace Name is required" }}
                render={({ field }) => (
                    <TextField
                        id="workspaceName"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.workspaceName)}
                        helperText={errors.workspaceName?.message}
                    />
                )}
            />
            <label>Workspace URL</label>
            <div>
                <span>www.eden.com/</span>
                <Controller
                    control={control}
                    name="workspaceURL"
                    rules={{ required: "Workspace URL is required" }}
                    render={({ field }) => (
                        <TextField
                            id="workspaceURL"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.workspaceURL)}
                            helperText={errors.workspaceURL?.message}
                        />
                    )}
                />
            </div>

        </>
    )
}

export default WorkspaceDetails;