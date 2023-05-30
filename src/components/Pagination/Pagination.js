import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Box} from "@mui/material";

export default function PaginationRounded({currentPage,setCurrentPage}) {




    return (
        <Box style={{position : "absolute" , bottom : "0"}} sx={{mb : "15px"}} >
            <Stack spacing={2}>
                <Pagination onChange={(_,index) => {setCurrentPage(index)}} page={currentPage} count={3} variant="outlined" shape="rounded" />
            </Stack>
        </Box>
    );
}