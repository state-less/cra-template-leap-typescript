const {
    REACT_APP_REACT_SERVER,
    REACT_APP_REACT_SERVER_LOCAL,
    REACT_APP_GOOGLE_ANALYTICS,
} = process.env;

if (!REACT_APP_REACT_SERVER)
    throw new Error('Expected .env to contain an url for the react-server');

// if (!REACT_APP_GOOGLE_ANALYTICS)
//     throw new Error('Expected .env file to contain a ga tracking id');

const DEFAULT_REACT_SERVER = 'ws://backend.state-less.cloud';
const DEFAULT_REACT_SERVER_LOCAL = 'ws://localhost:8080';

export const REACT_SERVER = REACT_APP_REACT_SERVER || DEFAULT_REACT_SERVER;
export const REACT_SERVER_LOCAL =
    REACT_APP_REACT_SERVER_LOCAL || DEFAULT_REACT_SERVER_LOCAL;
export const GOOGLE_ANALYTICS = REACT_APP_GOOGLE_ANALYTICS || '';
