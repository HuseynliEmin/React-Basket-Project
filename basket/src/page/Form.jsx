import React from 'react'
import { useFormik } from 'formik'
import { SignUpSchema } from '../components/SignUpSchema';
import './Form.css'
function Form() {
    const { values, handleChange, errors, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
            rule: false
        },
        onSubmit: values => {
          //  alert(JSON.stringify(values, null, 2))
          console.log(values);
        },
        validationSchema:SignUpSchema
    })
        ;
    return (<>
        <form onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                <label htmlFor="name">Ad</label><br />
                <input className='input' type="text" id='name' placeholder='adin' value={values.name} onChange={handleChange} />
                {errors.name && <div className='error'>{errors.name}</div>}
            </div>
            <div className='input-wrapper'>
                <label htmlFor="email">email</label><br />
                <input className='input' type="email" id='email' placeholder='email' value={values.email} onChange={handleChange} />
                {errors.name && <div className='error'>{errors.email}</div>}
            </div>
            <div className='input-wrapper'>
                <label htmlFor="age">age</label><br />
                <input className='input' type="number" id='age' placeholder='age' value={values.age} onChange={handleChange} />
                {errors.name && <div className='error'>{errors.age}</div>}
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password">kod</label><br />
                <input className='input' type="password" id='password' placeholder='kod' value={values.password} onChange={handleChange} />
                {errors.name && <div className='error'>{errors.password}</div>}
            </div>
            <div className='input-wrapper'>
                <label htmlFor="confirmPassword">tekrar kod</label><br />
                <input className='input' type="password" id='confirmPassword' placeholder='kod' value={values.confirmPassword} onChange={handleChange}/>
                {errors.name && <div className='error'>{errors.confirmPassword}</div>}
            </div>
            <div className='input-wrapper'>
                <label htmlFor="rule">Rule</label>
                <input className='checkbox' type="checkbox" id='rule'  value={values.confirmPassword} onChange={handleChange}/>
                {errors.name && <div className='error'>{errors.rule}</div>}
            </div>
            <button type='submit'>Registr</button>
        </form>

    </>

    )
}

export default Form