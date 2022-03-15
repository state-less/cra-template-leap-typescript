import { RootPage } from '../../pages/Root';
import { RenderableDescription, RouteDescription } from './types/description';

/**
 * Contains descriptions for all the routes in your app.
 */
export const pageDefinitions: RenderableDescription<RouteDescription>[] = [
    {
        title: 'Root Page',
        path: '/',
        Component: RootPage,
    },
];
