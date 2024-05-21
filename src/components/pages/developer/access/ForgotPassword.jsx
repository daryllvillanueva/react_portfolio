import React from 'react'
import { Link } from 'react-router-dom/dist'
import Logo from '../../../partials/svg/Logo'
import { FaCheckCircle } from 'react-icons/fa'
import { StoreContext } from '../../../../store/StoreContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../helpers/queryData'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { InputText } from '../../../helpers/FormInputs'
import { setError, setMessage } from '../../../../store/StoreAction'
import SpinnerButton from '../../../partials/spinners/SpinnerButton'

const ForgotPassword = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const {verifySuccess, setVerifySuccess} = React.useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values) => queryData(`/v1/user/reset`, "post", values),
        onSuccess: (data) => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["user"] });
        // show error box
        if (!data.success) {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        } else {
            setVerifySuccess(true);
        }
        },
    });

    const initVal = { item : "" };
    const yupSchema = Yup.object({
        item: Yup.string()
        .required("Requred")
        .email("Invalid Email")
    });

  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className='px-4 py-8 bg-secondary max-w-[400px] w-full rounded-2xl'> 
            {verifySuccess ? (
                <div className='text-center'>
                    <FaCheckCircle className='block mx-auto text-accent text-3xl my-5'/>
                    <h3>Reset Email Send</h3>
                    <p className='text-balance'>Please check your email to the reset password instruction</p>
                </div>
            ) : (
                <>
                    <h2 className='text-3xl text-center'>Forgot password?</h2>
                    <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            mutation.mutate(values);
                        }}
                    >
                        {(props) => {
                        return (
                            <Form className="w-full mt-5">
                                <div className='input-wrap mb-7'>
                                    <InputText
                                        label="Email address"
                                        name="item"
                                        type="email"
                                    />
                                </div>

                                <button className='btn--accent w-full p-3 rounded-lg transition-colors justify-center text-xl' type="submit">{mutation.isPending ? <SpinnerButton/> : "Reset Password"}</button>
                                <div className='flex gap-2 items-center justify-center'>
                                    <p className='text-center mt-4 text-lg'>Remember your password?</p>
                                    <Link to='/login' className='text-accent hover:underline mt-2 text-lg'>Login here</Link>
                                </div>
                                 
                            </Form>
                        );
                        }}
                    </Formik>
                </>
            ) }
        </div>
        {store.error && <ModalError position='center'/>}
    </div>
  )
}

export default ForgotPassword