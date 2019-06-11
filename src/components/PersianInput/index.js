import React from 'react';
import {Input} from "@material/react-text-field";
import './index.css';

const PersianInput = ({...props}) => {
    return (
        <Input {...props} className='input'/>
    );
};

export default PersianInput;