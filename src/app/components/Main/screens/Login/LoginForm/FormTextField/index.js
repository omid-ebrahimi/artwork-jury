import React from 'react';
import {Input} from "@material/react-text-field";
import PersianTextField from "../../../../../../../components/PersianTextField";

function FormTextField({field, form, type, ...props}) {
    return (
        <PersianTextField {...props} className='col-12 mt2' outlined>
            <Input {...field} type={type}/>
        </PersianTextField>
    );
}

export default FormTextField;