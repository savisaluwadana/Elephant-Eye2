import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import BookIcon from '@mui/icons-material/Book';
import DashboardScreen from '../dashboard/Dashboard.jsx';
import Book from '../menu/Book.jsx';
import Offer from "../menu/Offer.jsx";

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/dashboard',
    },
    {
        segment: 'book',
        title: 'Book',
        icon: <BookIcon />,
        link: '/book',
    },
    {
        segment: 'offer',
        title: 'Add Offers',
        icon: <DescriptionIcon />,
        link: '/offer',
    },
];

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    return React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(path),
        };
    }, [pathname]);
}

const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function DashboardLayoutBasic(props) {
    const { window } = props;
    const router = useDemoRouter('/dashboard');
    const demoWindow = window ? window() : undefined;
    const navigate = useNavigate();

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <PageContainer>
                    {router.pathname === '/dashboard' ? (
                        <DashboardScreen />
                    ) : router.pathname === '/book' ? (
                            <Book />
                        ) :
                        router.pathname === '/offer' ? (
                                <Offer/>
                            ) :
                            (
                                <Grid container spacing={1} style={{ width: '100%', margin: 0 }}>
                                    <Grid item xs={12} sm={5} />
                                    <Grid item xs={12}>
                                        <Skeleton height={14} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Skeleton height={14} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Skeleton height={100} />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Skeleton height={100} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Skeleton height={150} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Skeleton height={14} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Skeleton height={100} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Skeleton height={100} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Skeleton height={100} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Skeleton height={100} />
                                    </Grid>
                                </Grid>
                            )}
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutBasic.propTypes = {
    window: PropTypes.func,
};