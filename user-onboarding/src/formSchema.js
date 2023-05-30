import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(4, 'must have a mininmum of 4 characters'),
    email: yup
    .string()
    .trim()
    .required('Email is required'),
    password: yup
    .string()
    .trim()
    .required('password is required'),
    tos: yup
    .boolean()
    .oneOf([true], 'must accept the tos')
})


export default schema;