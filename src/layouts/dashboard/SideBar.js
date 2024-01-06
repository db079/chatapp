import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import useSetttings from "../../hooks/useSettings";
import AntSwitch from '../../components/AntSwitch';


const SideBar = () => {
    const theme = useTheme();
    const [selected, setSeleced] = useState(0);
    const { onToggleMode } = useSetttings();

    return (
        <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)", height: "100vh", width: 100 }}>
            <Stack direction="column" alignItems="center" justifyContent="space-between" sx={{ height: "100%" }} spacing={3}>
                <Stack spacing={4} alignItems={"center"}>


                    <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: 64,
                        width: 64,
                        borderRadius: 1.5
                    }}>
                        <img src={Logo} alt="Chatapp" />
                    </Box>
                    {/* for icon import array for data folder in which we have icon and its index */}
                    <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
                        {Nav_Buttons.map((e) => (
                            e.index === selected ?
                                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                    <IconButton onClick={() => setSeleced(e.index)} key={e.index} sx={{ width: "max-content", color: "#fff " }}>{e.icon}</IconButton>
                                </Box>
                                :
                                <IconButton onClick={() => setSeleced(e.index)} key={e.index} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>{e.icon}</IconButton>
                        ))}

                        <Divider sx={{ width: "48px" }} />
                        {selected === 3 ?
                            <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, color: "#fff" }}>
                                <IconButton sx={{ width: "max-content", color: "#fff " }}>
                                    <Gear />
                                </IconButton>
                            </Box>
                            :
                            <IconButton onClick={() => setSeleced(3)} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>
                                <Gear />
                            </IconButton>
                        }
                    </Stack>
                </Stack>

                <Stack spacing={4}>
                    <AntSwitch onChange={() => { onToggleMode(); }} defaultChecked />
                    <Avatar src={faker.image.avatar()} />
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar
