import React from 'react';
import {Grid, Row} from '@material/react-layout-grid';
import CellCenter from "../../../../../components/CellCenter";
import image from './image.svg';

export default function NotFound() {
    return (
        <Grid>
            <Row>
                <CellCenter desktopColumns={10} tabletColumns={8} phoneColumns={4}>
                    <h2 className='color-error center'>
                        صفحه‌ای که دنبال آن بودید پیدا نشد!
                    </h2>
                </CellCenter>
            </Row>
            <Row>
                <CellCenter desktopColumns={2} tabletColumns={4} phoneColumns={2}>
                    <img src={image} alt='404 - Not Found'/>
                </CellCenter>
            </Row>
        </Grid>
    );
}
