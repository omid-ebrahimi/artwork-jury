import React from 'react';
import CellCenter from "../../../../../../../components/CellCenter";

function MainCell({children}) {
    return (
        <CellCenter dir='rtl' desktopColumns={4} tabletColumns={6} phoneColumns={4}
                    className='flex flex-column justify-center items-center'>
            {children}
        </CellCenter>
    );
}

export default MainCell;