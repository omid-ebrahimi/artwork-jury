import React from 'react';
import {Grid, Row} from "@material/react-layout-grid/dist/index";
import MainCell from "./MainCell";

function LoginGrid({children}) {
    return (
        <Grid>
            <Row>
                <MainCell>
                    {children}
                </MainCell>
            </Row>
        </Grid>
    );
}

export default LoginGrid;