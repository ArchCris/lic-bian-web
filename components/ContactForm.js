import React from 'react'
import styles from '../styles/ContactForm.module.css'
import { useFormik } from 'formik'
import formSchema from '@/schemas';

const ContactForm = () => {

    const onSubmit = (values, actions)=>{
        console.log(values, actions)
        actions.resetForm()
    }

    const {values,errors, touched,handleBlur,isSubmitting, handleChange, handleSubmit} = useFormik({
        initialValues: {
          name: '',
          email: '',
          message:''
        },
        validationSchema: formSchema,
        onSubmit,
      });

      console.log(touched.name)
      
  return (
    <div className={styles.ContactForm__conteiner}>
        <form onSubmit={handleSubmit} className={styles.ContactForm__form} autoComplete='off'>
            <label htmlFor="name">Nombre</label>
            <input               
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                className={ errors.name && touched.name  ? `${styles.input__error}` : null}
            />
            {errors.name && touched.name  ? <p>Colocar un nombre valido por favor.</p> : null}
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className={ errors.email && touched.email  ? `${styles.input__error}` : null}
            />
            {errors.email && touched.email  ? <p>Colocar un email valido por favor.</p> : null}
            <label htmlFor="email">Mensaje</label>
            <textarea
                id="message"
                name="message"
                type="text"
                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
                className={ errors.message && touched.message  ? `${styles.input__error}` : null}
            />
            {errors.message && touched.message ? <p>Colocar un mensaje valido por favor.</p> : null}
            <button disabled={isSubmitting} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm