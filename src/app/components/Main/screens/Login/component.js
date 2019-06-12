import React from 'react';
import {Grid, Row} from "@material/react-layout-grid";
import MainCell from "./MainCell";
import LoginForm from "./LoginForm";
import image from "../../../../../logo.svg";
import {Headline5} from "@material/react-typography";

function Login() {
    function onSubmit(values, {setSubmitting}) {
        setTimeout(() => {
            // this.handleSave(values);
            setSubmitting(false);
        }, 400);
    }

    return (
        <Grid>
            <Row>
                <MainCell>
                    <Headline5 className='col-10'>ورود به پنل داوری</Headline5>
                    <LoginForm onSubmit={onSubmit}/>
                    <img src={image} className='mt2' width='30%' alt='404 - Not Found'/>
                </MainCell>
            </Row>
        </Grid>
    )
}

export default Login;
