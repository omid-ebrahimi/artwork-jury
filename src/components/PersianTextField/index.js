import React from 'react';
import TextField from '@material/react-text-field';
import './index.css';

function PersianTextField({children, ...props}) {
    return (
        <TextField {...props} floatingLabelClassName='label'>
            {children}
        </TextField>
    );
}

export default PersianTextField;