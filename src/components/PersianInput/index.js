import React from 'react';
import {Input} from "@material/react-text-field";
import './index.css';

function PersianInput({...props}) {
    return (
        <Input {...props} className='input'/>
    );
}

export default PersianInput;