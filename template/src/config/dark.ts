import { SECONDARY_DARK_LIGHT, PRIMARY_DARK, SECONDARY_DARK } from './colors';

// A custom theme for this app
const theme = {
    overrides: {
        MuiTableRow: {
            root: {
                // backgroundColor: SECONDARY_DARK_LIGHT,
                '&:hover': {},
            },
        },
        DayScaleEmptyCell: {
            emptyCell: {
                // backgroundColor: SECONDARY_DARK_LIGHT,
            },
        },
    },
    palette: {
        type: 'dark',
        background: {
            // default: "#1E1F27 !important",
            // paper: "#1E1F27",
        },
    },
};

export default theme;
