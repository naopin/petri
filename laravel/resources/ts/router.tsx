import React, { useEffect } from "react";
import { BrowserRouter, Link, Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { useAuth } from "./hooks/AuthContext";
import NotFoundPage from "./pages/error";
import HelpPage from "./pages/help";
import LoginPage from "./pages/login";
import PrefecturePage from "./pages/prefecture";
import ProfilePage from "./pages/profile";
import RegisterPage from "./pages/register";
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
        console.log(authUser);
        if (isAuth) return <Redirect to="/" />;
        return <Route {...props} />;
    };

    const RegisterRoute = (props: RouteProps) => {
        if (isAuth) return <Redirect to="/register" />;
        return <Route {...props} />;
    };

    const PrefectureRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/prefecture" />;
        return <Route {...props} />;
    };

    const ProfileRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/profile" />;
        return <Route {...props} />;
    };

    const navigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li> <Link to="/profile">プロフィール</Link></li>
                <li><Link to="/help">ヘルプ</Link></li>
                <li onClick={() => logout.mutate()}><span>サインアウト</span></li>
            </ul>
        </header>
    );

    const loginNavigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/help">ヘルプ</Link></li>
                <li> <Link to="/login">サインイン</Link></li>
                <li> <Link to="/register">サインアップ</Link></li>
            </ul>
        </header>
    );

    return (
        <BrowserRouter>
            {isAuth ? navigation : loginNavigation}
            <Switch>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <LoginRoute path="/login">
                    <LoginPage />
                </LoginRoute>
                <RegisterRoute path="/register">
                    <RegisterPage />
                </RegisterRoute>
                <GuardRoute exact path="/">
                    <TaskPage />
                </GuardRoute>
                <PrefectureRoute exact path="/prefecture">
                    <PrefecturePage />
                </PrefectureRoute>
                <ProfileRoute exact path="/profile">
                    <ProfilePage />
                </ProfileRoute>

                {/* <PrivateRoute path="/" exact>  <TaskPage /></PrivateRoute> */}
                <Route component={NotFoundPage}></Route>
            </Switch>

        </BrowserRouter >
    );
};

export default Router;
