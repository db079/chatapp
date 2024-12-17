import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import { Search, SearchIconWrapper } from "../../components/Search";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { CallElement } from '../../components/CallLogElement';
import { MembersList } from '../../data';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
    return (
        <>
            <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{ p: 4 }} onClose={handleClose}>
                <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
                {/* content */}
                <DialogContent>
                    <Stack spacing={3}>
                    <Stack sx={{ maxHeight: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='search' />
                        </Search>
                    </Stack>
                    {MembersList.map((el) => <CallElement {...el} />)}
                    </Stack>
                   
                </DialogContent>
            </Dialog>
        </>
    )
}

export default StartCall
