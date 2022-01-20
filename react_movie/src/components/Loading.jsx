import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = ({isLoading}) => {

    return (
        <Backdrop open={isLoading}>
            <CircularProgress />
        </Backdrop>
    )
}

export default Loading;