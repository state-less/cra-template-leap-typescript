import {
    PRIMARY_LIGHT,
    SECONDARY_LIGHT,
    INFO,
    SUCCESS,
    ERROR,
    WARNING,
} from './colors';
import defaultTheme from './theme';
// A custom theme for this app
const theme = {
    palette: {
        ...defaultTheme.palette,
        type: 'light',
        hover: {
            main: PRIMARY_LIGHT,
        },
        active: {
            main: SECONDARY_LIGHT,
        },
        background: {
            default: '#fff !important',
        },
    },
};

export default theme;
