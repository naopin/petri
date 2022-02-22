import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import HelpPage from "./pages/help"
import LoginPage from "./pages/login"
import TaskPage from "./pages/tasks"

export const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <header className="global-head">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/help">Help</Link></li>
                        <li> <Link to="/login">Login</Link></li>
                    </ul>
                </header>

                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <TaskPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
