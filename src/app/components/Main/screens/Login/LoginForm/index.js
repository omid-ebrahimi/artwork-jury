import React from 'react';
import {Formik, Form} from "formik";
import {object, string} from "yup";
import {Input} from "@material/react-text-field";
import Button from "@material/react-button";
import LoginTextField from "./LoginTextField";

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
        <Formik
            initialValues={defaultInitialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                ({
                     handleChange,
                     values,
                     isSubmitting
                 }) => (
                    <Form className='col-10'>
                        <LoginTextField label='نام کاربری'>
                            <Input id='username' value={values.username} onChange={handleChange}/>
                        </LoginTextField>
                        <LoginTextField label='رمز عبور'>
                            <Input id='password' type='password' value={values.password} onChange={handleChange}/>
                        </LoginTextField>
                        <Button type='submit' className='col-12 mt2' disabled={isSubmitting} raised>
                            ورود
                        </Button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default LoginForm;