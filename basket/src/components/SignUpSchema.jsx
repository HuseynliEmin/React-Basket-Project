import * as Yup from 'yup';


export const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().min(2).max(10, "to long").required().matches(/^[A-Za-z]+$/,'only letters'),
    age: Yup.number().min(3).moreThan(18).lessThan(100).required(),
    password: Yup.string().required().min(2).max(10),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"),"yanlisdir"]),
    rule:Yup.boolean().required()
})