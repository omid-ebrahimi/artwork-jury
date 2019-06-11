import React from 'react';
import PersianTextField from "../../../../../../components/PersianTextField";

function LoginTextField({children, ...props}) {
    return (
        <PersianTextField {...props} className='col-10 mt2' outlined>
            {children}
        </PersianTextField>
    );
}

export default LoginTextField;