import { Box, Stack } from '@mui/material';
import { MediaMsg, ReplyMsg, TextMsg, Timeline, LinkMsg, DocMsg } from "./MessageType";
import { Chat_History } from "../../data/index";
import React from 'react';

const Message = () => {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((e) => {
                    switch (e.type) {
                        case "divider":
                            // timeline
                            return <Timeline e={e} />;
                        case "msg":
                            switch (e.subtype) {
                                case "img":
                                    // image
                                    return <MediaMsg e={e} />;
                                case "doc":
                                    // document
                                    return <DocMsg e={e} />;
                                case "link":
                                    // link
                                    return <LinkMsg e={e} />;
                                case "reply":
                                    // reply msg
                                   return <ReplyMsg e={e} />;
                                default:
                                    // text message
                                    return <TextMsg e={e} />;
                            }
                            // Add a default return for the "msg" case
                            return null;
                        default:
                            return <></>;
                    }
                })}
            </Stack>
        </Box>
    );
}

export default Message;
