import React from 'react';
import {Grid, Row} from '@material/react-layout-grid';
import {Input} from "@material/react-text-field";
import Button from '@material/react-button';
import {Headline5} from '@material/react-typography';
import CellCenter from "../../../../../components/CellCenter";
import PersianTextField from "../../../../../components/PersianTextField";
import './component.css';

function Login() {
    return (
        <Grid>
            <Row className='main-row'>
                <CellCenter dir='rtl' desktopColumns={4} tabletColumns={6} phoneColumns={4}
                            className='flex flex-column justify-center items-center'>
                    <Headline5 className='col-10'>ورود به پنل داوری</Headline5>
                    <PersianTextField label='نام کاربری' className='col-10 mt2' outlined>
                        <Input/>
                    </PersianTextField>
                    <PersianTextField label='رمز عبور' className='col-10 mt2' outlined>
                        <Input/>
                    </PersianTextField>
                    <Button className='col-10 mt2' raised>
                        ورود
                    </Button>
                </CellCenter>
            </Row>
        </Grid>
    )
}

export default Login;
