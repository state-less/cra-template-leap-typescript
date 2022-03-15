import { Paper } from '@mui/material';
import { FunctionComponent, PropsWithChildren } from 'react';

export const DefaultLayout: FunctionComponent<
    PropsWithChildren<Record<string, unknown>>
> = ({ children }) => {
    return (
        <Paper className="main-container" sx={{ minHeight: '100vh' }}>
            {children}
        </Paper>
    );
};
