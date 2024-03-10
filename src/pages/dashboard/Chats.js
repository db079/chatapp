import React from 'react';
import { Box, IconButton, Stack, Typography, Button, Divider} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass, SimCard } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { ChatList } from "../../data/index";
import {SimpleBarStyle} from "../../components/Scrollbar"
import { Search, SearchIconWrapper } from '../../components/Search';
import StyledInputBase from '../../components/Search/StyledInputBase';
import ChatElement from '../../components/ChatElement';









const Chats = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                width: 320,
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF":theme.palette.background.default,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
            }}>
            <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='h5' >Chats</Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: '100%' }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color='blue' />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='search' />
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems={"center"} spacing={1.5}>
                        <ArchiveBox size={24} />
                        <Button>Archive</Button>
                    </Stack>
                    <Divider />
                </Stack>
                <Stack direction={"column"} spacing={2} sx={{ height: "100%", flexGrow: 1, overflowY: "scroll" }}>
                    <SimpleBarStyle timeout={500} clickOnTrack={false}>
                        <Stack spacing={2.4}>
                            <Typography variant='subtitle2' sx={{ color: "#676767" }}>Pinned</Typography>
                            {ChatList.filter((e) => e.pinned).map((e) => {
                                return <ChatElement  {...e} />
                            })}
                        </Stack>
                        <Stack spacing={2.4}>
                            <Typography variant='subtitle2' sx={{ color: "#676767" }}>All Chats</Typography>
                            {ChatList.filter((e) => !e.pinned).map((e) => {
                                return <ChatElement  {...e} />
                            })}
                        </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
        </Box>
    )
}
export default Chats;

