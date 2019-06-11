import React from 'react';
import {Grid, Row} from '@material/react-layout-grid';
import {Input} from "@material/react-text-field";
import Button from '@material/react-button';
import {Headline5} from '@material/react-typography';
import CellCenter from "../../../../../components/CellCenter";
import LoginTextField from './components/LoginTextField';
import image from "../../../../../logo.svg";
import './component.css';

function Login() {
    return (
        <Grid>
            <Row className='main-row'>
                <CellCenter dir='rtl' desktopColumns={4} tabletColumns={6} phoneColumns={4}
                            className='flex flex-column justify-center items-center'>
                    <Headline5 className='col-10'>ورود به پنل داوری</Headline5>
                    <LoginTextField label='نام کاربری'>
                        <Input/>
                    </LoginTextField>
                    <LoginTextField label='رمز عبور'>
                        <Input/>
                    </LoginTextField>
                    <Button className='col-10 mt2' raised>
                        ورود
                    </Button>
                    <img src={image} className='mt2' width='30%' alt='404 - Not Found'/>
                </CellCenter>
            </Row>
        </Grid>
    )
}

export default Login;
