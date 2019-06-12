import React from 'react';
import {Input, HelperText} from "@material/react-text-field";
import PersianTextField from "../../../../../../../components/PersianTextField";
import {getErrorMessage} from "../../../../../../../utils/formik";

function FormTextField({field, form: {errors, touched}, type, ...props}) {

    const errorMessage = getErrorMessage(errors, touched, field.name);

    return (
        <PersianTextField {...props} className='col-12 mt1' outlined
                          helperText={<HelperText validation={!!errorMessage}>{errorMessage}</HelperText>}>
            <Input {...field} type={type} isValid={!errorMessage}/>
        </PersianTextField>
    );
}

export default FormTextField;