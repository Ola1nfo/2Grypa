import './AddContact.css'
import { validationSchema } from '../../validation'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'


export default function AddContact ({ addNewContact }) {
    const navigate = useNavigate()

    const initialValues = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '',
        status: '',
        favorite: ''
    }


    const handleSubmit = (values) => {
        console.log(values);
        addNewContact(values)
        navigate('/')
    }

    return (
        <>
            <div className="container">
                <div className="modal-content addPage rounded shadow">
                    <div className="modal-header">
                        <h1 className='text-center'>Add new contact</h1>
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({isSubmitting}) => (
                            <Form>
                                <div className='mb-4'>
                                    <label htmlFor="firstName">First name</label>
                                    <Field type='text' name='firstName' id='firstName'/>
                                    <ErrorMessage name='firstName' component='p' className='text-danger position-absolute'/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last name</label>
                                    <Field type='text' name='lastName' id='lastName'/>
                                    <ErrorMessage name='lastName'/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <Field type='text' name='phone' id='phone'/>
                                    <ErrorMessage name='phone'/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field type='text' name='email' id='email'/>
                                    <ErrorMessage name='email'/>
                                </div>
                                <div>
                                    <label htmlFor="avatar">Avatar</label>
                                    <Field type='number' max={99} min={0} name='avatar' id='avatar'/>
                                    <ErrorMessage name='avatar'/>
                                </div>
                                <div>
                                    <label htmlFor="gender">Gender</label>
                                    <Field as='select' name='gender'>
                                        <option value="">Choose gender</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                    </Field>
                                    <ErrorMessage name='gender'/>
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <Field as='select' name='status'>
                                        <option value="">Choose status</option>
                                        <option value="work">Work</option>
                                        <option value="family">Family</option>
                                        <option value="friends">Friends</option>
                                        <option value="others">Others</option>
                                    </Field>
                                    <ErrorMessage name='status'/>
                                </div>
                                <div>
                                    <label htmlFor="favorite">Favorite</label>
                                    <Field type='checkbox' name='favorite' id='favorite'/>
                                    <ErrorMessage name='favorite'/>
                                </div>
                                <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>Add</button> 
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </>
    )
}