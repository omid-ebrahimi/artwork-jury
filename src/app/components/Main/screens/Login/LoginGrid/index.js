import React from 'react';
import {Grid, Row} from "@material/react-layout-grid/dist/index";
import MainCell from "./MainCell";
import './index.css';

function LoginGrid({children}) {
    return (
        <Grid>
            <Row className='main-row'>
                <MainCell>
                    {children}
                </MainCell>
            </Row>
        </Grid>
    );
}

export default LoginGrid;