/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * This is the container managing all your routes.
 *
 * This file is meant to be left untouched. All the configuration happens
 * in the file '../static/routes.ts'.
 *
 * Routes are seperated to be able to enricht them with metadata
 * which can be used in different places. e.g. a search field.
 *
 */
import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
    RenderableDescription,
    RouteDescription,
} from '../lib/static/types/description';

/** Package has no typescript support */
const Analytics = require('react-router-ga').default;

console.log('ANA', Analytics);
type RoutesProps = {
    routes: RenderableDescription<RouteDescription>[];
};

/**
 * Renders a switch with all your routes.
 * @see - The file '../static/routes.ts' contains your routes.
 * @param trackingId - The google analytics tracking id. e.g. UA-AWEJF21
 * @param routes - The pages to render
 * @returns
 */
export const Routes: FunctionComponent<RoutesProps> = ({ routes }) => {
    return (
        <Switch>
            {routes.map((props, i) => {
                const { Component, path } = props;
                return <Route path={path}>{Component && <Component />}</Route>;
            })}
        </Switch>
    );
};

type AnalyticsRoutesProps = RoutesProps & {
    trackingId: string;
};

/**
 * Contains a google analytics wrapper around your routes.
 * @param trackingId - The google analytics tracking id. e.g. UA-AWEJF21
 * @param routes - The pages to render
 * @returns
 */
export const AnalyticsRoutes: FunctionComponent<AnalyticsRoutesProps> = ({
    trackingId,
    routes,
}) => {
    return (
        <Analytics id={trackingId} debug>
            <Routes routes={routes} />
        </Analytics>
    );
};
