import React from 'react';
import {Grid, Row} from '@material/react-layout-grid';
import Button from '@material/react-button';
import CellCenter from "../../../../../components/CellCenter";
import PersianTextField from "../../../../../components/PersianTextField";
import PersianInput from "../../../../../components/PersianInput";
import './component.css';

function Login() {
    return (
        <Grid>
            <Row className='main-row'>
                <CellCenter dir='rtl' desktopColumns={4} tabletColumns={6} phoneColumns={4} className='flex flex-column justify-center items-center'>
                    <h2 className='col-10'>ورود به پنل داوری</h2>
                    <hr className='col-10'/>
                    <PersianTextField label='نام کاربری' className='col-10 mt2' outlined>
                        <PersianInput/>
                    </PersianTextField>
                    <PersianTextField label='رمز عبور' className='col-10 mt2' outlined>
                        <PersianInput/>
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
