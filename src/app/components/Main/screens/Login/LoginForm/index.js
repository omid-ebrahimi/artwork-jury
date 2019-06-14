import React from 'react';
import {Formik, Form, Field} from "formik";
import {object, string} from "yup";
import Button from "@material/react-button";
import FormTextField from "./FormTextField";

const validationSchema = object().shape({
    username: string().trim().max(32, 'طول نام کاربری بیش از حد مجاز است').required('وارد کردن نام کاربری الزامی است'),
    password: string().trim().max(32, 'طول رمز عبور بیش از حد مجاز است').required('وارد کردن رمز عبور الزامی است')
});

const defaultInitialValues = {
    username: '',
    password: ''
};

function LoginForm({isTokenLoading, handleLogin}) {

    function onSubmit({username, password}) {
        handleLogin(username, password);
    }

    return (
        <Formik initialValues={defaultInitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                () =>
                    <Form className='col-10'>
                        <Field name='username' label='نام کاربری' component={FormTextField}/>
                        <Field name='password' label='رمز عبور' type='password' component={FormTextField}/>
                        <Button type='submit' className='col-12 mt1' disabled={isTokenLoading} raised>
                            ورود
                        </Button>
                    </Form>
            }
        </Formik>
    );
}

export default LoginForm;