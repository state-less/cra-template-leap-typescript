import { Poll } from '@state-less/leap';
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    Link,
    Typography,
} from '@mui/material';
import { PollView } from '@state-less/leap/dist/components/serverside/Poll';
import { SettingsMenuButton } from './SettingsPage';

export const RootPage = () => {
    return (
        <div className="flex row sa">
            <div className="flex col sa" style={{ height: '100vh' }}>
                <Container maxWidth="lg">
                    <Card>
                        <CardHeader
                            title="Welcome to leap"
                            subheader="Thanks for trying out. Edit 'src/pages/Root.tsx' to get started."
                            action={<SettingsMenuButton />}
                        />
                        <CardContent>
                            <Typography>
                                To see what you can build with leap; please
                                refer to the{' '}
                                <Link href="https://state-less.cloud">
                                    documentation
                                </Link>
                            </Typography>
                            <h3>Hosted Component</h3>
                            <Poll
                                name="demo-poll"
                                Component={PollView}
                                host="stateless"
                            />
                            <h3>Local Component</h3>
                            <Poll
                                name="demo-poll"
                                Component={PollView}
                                host="localhost"
                            />
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </div>
    );
};
