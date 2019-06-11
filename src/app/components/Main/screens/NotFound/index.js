import React from 'react';
import {Grid, Row} from '@material/react-layout-grid';
import {Headline5} from '@material/react-typography';
import CellCenter from "../../../../../components/CellCenter";
import image from './image.svg';

export default function NotFound() {
    return (
        <Grid>
            <Row>
                <CellCenter desktopColumns={10} tabletColumns={8} phoneColumns={4}>
                    <Headline5 className='theme-color-error center'>
                        صفحه‌ای که دنبال آن بودید پیدا نشد!
                    </Headline5>
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
