import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import RHFAutocomplete from '../../components/hook-form/RHFAutocomplete';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MEMBERS = ["JANHAVI", "JIGGISHA", "ANKITA"];

const CreateGroupForm = ({ handleClose }) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is require"),
        members: Yup.array().min(2, "Must have atleast 2 memebers")
    });
    const defaultValue = {
        title: "",
        memebers: [],
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValue,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
    } = methods;

    const onSubmit = async (data) => {
        try {
            console.log("Data");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} >
                <RHFTextField  name={"title"} label={"Title"} />
                <RHFAutocomplete name="members" label="Members" multiple freeSolo options={MEMBERS.map((option) => option)} ChipProps={{ size: "medium" }} />
                <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"end"}>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type='submit' variant='contained'>
                        Create
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    )
}



const CreateGroup = ({ open, handleClose }) => {
    return (
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{ p: 4 }}>
            {/* title */}
            <DialogTitle sx={{mb:3}}>Create new Group</DialogTitle>
            {/* content */}
            <DialogContent>
                <CreateGroupForm  handleClose={handleClose}/>
            </DialogContent>
        </Dialog>
    );
}

export default CreateGroup;