import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').min(2, 'Min 2 symbols').max(10, 'Max 10 symbols'),
    lastName: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
    phone: Yup.string().min(5, 'Too short').max(20, 'Too long').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    avatar: Yup.string().required('Required'),
    gender: Yup.string().oneOf(['men', 'women'], 'Invalid gender').required('Required'),
    status: Yup.string().oneOf(['work', 'family', 'friends', 'others'], 'Invalid status').required('Required'),
    favorite: Yup.boolean()
})