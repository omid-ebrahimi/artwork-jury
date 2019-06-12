import React from 'react';
import TextField from '@material/react-text-field';
import styles from './index.module.css';

function PersianTextField({children, ...props}) {
    return (
        <TextField {...props} floatingLabelClassName={styles.label}>
            {children}
        </TextField>
    );
}

export default PersianTextField;