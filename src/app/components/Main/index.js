import React from "react";
import {Switch, Route} from "react-router-dom";
import NotFound from "./screens/NotFound";


function Main() {
    return (
        <main>
            <Switch>
                <Route component={NotFound}/>
            </Switch>
        </main>
    );
}

export default Main;