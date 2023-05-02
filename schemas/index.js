import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("Please input a valid email").required("required"),
    message: yup.string().required("required"),
})

export default formSchema