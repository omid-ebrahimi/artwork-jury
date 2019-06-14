import React from 'react';
import {Grid, Row} from "@material/react-layout-grid";
import {Headline5} from "@material/react-typography";
import {Snackbar} from '@material/react-snackbar';
import MainCell from "./MainCell";
import LoginForm from "./LoginForm";
import image from "../../../../../logo.svg";

function Login({isTokenLoading, loginErrorMessage, handleLogin}) {
    return (
        <Grid>
            <Row>
                <MainCell>
                    {
                        loginErrorMessage &&
                        <Snackbar message="احراز هویت با مشکل مواجه شد!"
                                  actionText="باشه"/>
                    }
                    <Headline5 className='col-10'>ورود به پنل داوری</Headline5>
                    <LoginForm isTokenLoading={isTokenLoading} handleLogin={handleLogin}/>
                    <img src={image} className='mt2' width='30%' alt='404 - Not Found'/>
                </MainCell>
            </Row>
        </Grid>
    )
}

export default Login;
