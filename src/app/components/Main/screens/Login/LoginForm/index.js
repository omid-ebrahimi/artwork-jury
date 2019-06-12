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

function LoginForm({onSubmit}) {
    return (
        <Formik initialValues={defaultInitialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                ({isSubmitting}) =>
                    <Form className='col-10'>
                        <Field name='username' label='نام کاربری' component={FormTextField}/>
                        <Field name='password' label='رمز عبور' type='password' component={FormTextField}/>
                        <Button type='submit' className='col-12 mt2' disabled={isSubmitting} raised>
                            ورود
                        </Button>
                    </Form>
            }
        </Formik>
    );
}

export default LoginForm;