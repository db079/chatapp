import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Search, SearchIconWrapper } from "../../components/Search";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
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
                            <Typography variant="h5">Groups</Typography>
                        </Stack>

                        <Stack sx={{ maxHeight: "100%" }}>
                            <Search>
                                <SearchIconWrapper>
                                    <MagnifyingGlass color='blue' />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder='search' />
                            </Search>
                        </Stack>

                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant="subtitle2" component={Link}>
                                Create New Group
                            </Typography>
                            <IconButton onClick={()=>{setOpenDialog(true);}}>
                                <Plus style={{ color: theme.palette.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        {/* <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }} > */}
                        <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%", '::-webkit-scrollbar': { width: '1px' }, '::-webkit-scrollbar-thumb': { backgroundColor: '#888' } }}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack spacing={2.5}>
                                    {/* Typography */}
                                    <Typography variant="subtitle2" sx={{color:"#676667"}}>Pinned</Typography>
                                    {/* chat list */}
                                    {ChatList.filter((e) => e.pinned).map((e) => {
                                        return <ChatElement  {...e} />
                                    })}

                                    {/* Typography */}
                                    <Typography variant="subtitle2" sx={{color:"#676667"}}>All Group</Typography>
                                    {/* chat list */}
                                    {ChatList.filter((e) => !e.pinned).map((e) => {
                                        return <ChatElement  {...e} />
                                    })}
                                </Stack>
                            </SimpleBarStyle>
                        </Stack>
                    </Stack>
                </Box>
                {/* right side */}
                
            </Stack>
            {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>}
        </>
    )
}

export default Group;