import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from './store/provider'
import Main from "./components/Main";

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
