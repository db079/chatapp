import React, { useState } from "react";
import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search, SearchIconWrapper } from "../../components/Search";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogs, ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import { CallElement, CallLogElement } from "../../components/CallLogElement";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog=()=>{
        setOpenDialog(false);
    }
    return (
        <>
            <Stack direction={"row"} sx={{ width: "100" }}>
                {/* left side */}
                <Box sx={{ height: "100vh", backgroundColor: (theme) => theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, width: 320, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
                    <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                        <Stack>
                            <Typography variant="h5">Call Logs</Typography>
                        </Stack>

                        <Stack sx={{ maxHeight: "100%" }}>
                            <Search>
                                <SearchIconWrapper>
                                    <MagnifyingGlass color='#709CE6' />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder='search' />
                            </Search>
                        </Stack>

                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant="subtitle2" component={Link}>
                                Start new Conversation
                            </Typography>
                            <IconButton onClick={() => { 
                                    setOpenDialog(true); 
                                }}>
                                <Plus style={{ color: (theme) => theme.palette.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        {/* <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }} > */}
                        <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%", '::-webkit-scrollbar': { width: '1px' }, '::-webkit-scrollbar-thumb': { backgroundColor: '#888' } }}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack spacing={2.5}>
                                    {/* call logs */}
                                    {CallLogs.map((el)=>
                                        <CallLogElement {...el}/>
                                    )}
                                </Stack>
                            </SimpleBarStyle>
                        </Stack>
                    </Stack>
                </Box>
                {/* right side */}

            </Stack>
            {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
        </>
    );
}

export default Call;