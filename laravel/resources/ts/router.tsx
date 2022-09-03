import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useEffect } from "react";
import { BrowserRouter, Link, Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { useAuth } from "./hooks/AuthContext";
import NotFoundPage from './pages/error';
import HelpPage from './pages/help';
import LoginPage from './pages/login';
import PrefecturePage from './pages/prefecture';
import ProfilePage from './pages/profile';
import Register from './pages/register';
import SearchPage from './pages/search';
import { useLogout, useUser } from "./queries/AuthQuery";

export const Router = () => {
    const logout = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();

    const settings = [
        {
            id: 1,
            pass: 'profile',
            name: 'プロフィール'
        },
        {
            id: 2,
            pass: 'logout',
            name: 'ログアウト'
        }
    ];

    const getMenuBar = (isAuth: boolean) => {
        const loginBar = [
            {
                id: 1,
                pass: 'help',
                name: 'ヘルプ'
            },
            {
                id: 2,
                pass: 'search',
                name: '検索'
            }
        ];
        if (!isAuth) {
            const logoutBar = [
                {
                    id: 1,
                    pass: 'login',
                    name: 'ログイン'
                },
                {
                    id: 2,
                    pass: 'register',
                    name: '登録'
                },
                {
                    id: 3,
                    pass: 'search',
                    name: '検索'
                }
            ];
            return logoutBar;
        }
        return loginBar;
    };

    useEffect(() => {
        if (authUser) {
            setIsAuth(true);
        }
    }, [authUser]);

    const ProfileRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/profile" />;
        return <Route {...props} />;
    };

    const GuardRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/search" />;
        return <Route {...props} />;
    };

    const LoginRoute = (props: RouteProps) => {
        console.log(authUser);
        if (isAuth) return <Redirect to="/search" />;
        return <Route {...props} />;
    };

    const RegisterRoute = (props: RouteProps) => {
        if (isAuth) return <Redirect to="/register" />;
        return <Route {...props} />;
    };

    const PrefecturRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/prefecture" />;
        return <Route {...props} />;
    };

    const SearchRoute = (props: RouteProps) => {
        if (isAuth) return <Redirect to="/search" />;
        return <Route {...props} />;
    };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <BrowserRouter>
            <AppBar position="static" color="default">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/search"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PETRI
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {getMenuBar(isAuth).map((bar) => (
                                    <MenuItem key={bar.id} component={Link} to={bar.pass}>
                                        {bar.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PETRI
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {getMenuBar(isAuth).map((bar) => (
                                <MenuItem key={bar.id} component={Link} to={bar.pass}>
                                    {bar.name}
                                </MenuItem>
                            ))}
                        </Box>

                        {isAuth &&
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        setting.id === 2
                                            ? <MenuItem key={setting.id} onClick={() => logout.mutate()} >
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </MenuItem>
                                            : <MenuItem key={setting.id} onClick={handleCloseUserMenu} component={Link} to={setting.pass}>
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
            <Switch>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <SearchRoute path="/search">
                    <SearchPage />
                </SearchRoute>
                <LoginRoute path="/login">
                    <LoginPage />
                </LoginRoute>
                <RegisterRoute path="/register">
                    <Register />
                </RegisterRoute>
                {/* <GuardRoute exact path="/">
                    <TaskPage />
                </GuardRoute> */}
                <PrefecturRoute exact path="/prefecture">
                    <PrefecturePage />
                </PrefecturRoute>
                <ProfileRoute path="/profile">
                    <ProfilePage />
                </ProfileRoute>

                {/* <PrivateRoute path="/" exact>  <TaskPage /></PrivateRoute> */}
                <Route component={NotFoundPage}></Route>
            </Switch>

        </BrowserRouter >
    );
};

export default Router;
