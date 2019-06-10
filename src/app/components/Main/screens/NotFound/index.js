import React from 'react';
import {Grid, Row} from '@material/react-layout-grid/dist/index';
import CellCenter from "../../../../../components/CellCenter";

export default function NotFound() {
    return (
        <Grid>
            <Row>
                <CellCenter desktopColumns={10} tabletColumns={8} phoneColumns={4}>
                    <h2 className='color-error flex justify-center'>
                        صفحه‌ای که دنبال آن بودید پیدا نشد!
                    </h2>
                </CellCenter>
            </Row>
        </Grid>
    );
}
