import React from "react";
import {Switch, Route} from "react-router-dom";
import NotFound from "./screens/NotFound";
import Login from "./screens/Login/container";

function Main() {
    return (
        <main>
            <Switch>
                <Route path="/login" component={Login} exact/>
                <Route component={NotFound}/>
            </Switch>
        </main>
    );
}

export default Main;