import React from 'react';
import {Input} from "@material/react-text-field";
import Button from '@material/react-button';
import {Headline5} from '@material/react-typography';
import LoginGrid from "./LoginGrid";
import LoginTextField from './LoginTextField';
import image from "../../../../../logo.svg";

function Login() {
    return (
        <LoginGrid>
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
        </LoginGrid>
    )
}

export default Login;
