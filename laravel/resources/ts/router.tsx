import React, { useEffect } from "react";
import { BrowserRouter, Link, Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { useAuth } from "./hooks/AuthContext";
import NotFoundPage from "./pages/error";
import HelpPage from "./pages/help";
import LoginPage from "./pages/login";
import TaskPage from "./pages/tasks";
import { useLogout, useUser } from "./queries/AuthQuery";

export const Router = () => {
    const logout = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();
    useEffect(() => {
        if (authUser) {
            setIsAuth(true);
        }
    }, [authUser]);

    const GuardRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/login" />;
        return <Route {...props} />;
    };

    const LoginRoute = (props: RouteProps) => {
        if (isAuth) return <Redirect to="/" />;
        return <Route {...props} />;
    };

    const navigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li onClick={() => logout.mutate()}><span>Logout</span></li>
            </ul>
        </header>
    );

    const loginNavigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/help">Help</Link></li>
                <li> <Link to="/login">Login</Link></li>
            </ul>
        </header>
    );

    if (isLoading) return <div className="loader"></div>;
    return (
        <BrowserRouter>
            <div>
                {isAuth ? navigation : loginNavigation}
                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <LoginRoute path="/login">
                        <LoginPage />
                    </LoginRoute>
                    <GuardRoute exact path="/">
                        <TaskPage />
                    </GuardRoute>
                    <Route component={NotFoundPage}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
