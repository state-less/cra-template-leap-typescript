import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from '@state-less/react-client';
import { FunctionComponent, PropsWithChildren } from 'react';
import { DefaultLayout } from './container/layout';
import { AnalyticsRoutes } from './container/Routes';
import { pageDefinitions } from './lib/static';
import { GOOGLE_ANALYTICS, REACT_SERVER, REACT_SERVER_LOCAL } from './config';
import { ThemeProvider } from './provider/ThemeProvider';

/**
 * Renders all providers used in this app.
 * @returns
 */
const AppProvider: FunctionComponent<
    PropsWithChildren<Record<string, any>>
> = ({ children }) => {
    return (
        <Provider
            hosts={{
                localhost: REACT_SERVER_LOCAL,
                stateless: REACT_SERVER,
            }}
        >
            {children}
        </Provider>
    );
};

const App = () => {
    return (
        <div>
            <ThemeProvider darkModeDefault={false} osDefault>
                <Router>
                    <AppProvider>
                        <DefaultLayout>
                            <AnalyticsRoutes
                                routes={pageDefinitions}
                                trackingId={GOOGLE_ANALYTICS}
                            />
                        </DefaultLayout>
                    </AppProvider>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
