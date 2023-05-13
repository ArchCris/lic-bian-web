import React, { useState } from 'react'
import styles from '../styles/ContactForm.module.css'
import { useFormik } from 'formik'
import formSchema from '@/schemas';
import { sendContactForm } from '@/lib/api';
import ClipLoader from "react-spinners/ClipLoader";
import { motion as m } from "framer-motion"



const ContactForm = () => {

    const[messageStatus,setMessageStatus]=useState(false)

    const onSubmit = async (values, {resetForm} )=>{
        try{
            await sendContactForm(values)
            setMessageStatus(true)
            resetForm()
        }catch(err){
            console.log(err)
        }
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

      
  return (
    <m.div
    initial={{x:'150%',opacity:0}}
    animate={{x:'0%',opacity:1}}
    transition={{duration:0.75,ease:"easeOut",delay:0.75}}
    className={styles.ContactForm__conteiner}>
        <form onSubmit={handleSubmit} className={styles.ContactForm__form} autoComplete='off'>
            <label htmlFor="name">Nombre</label>
            <input               
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                className={ errors.name && touched.name  ? styles.input__error : styles.inputField}
            />
            {errors.name && touched.name  ? <p className={styles.input__errorText}>Colocar un nombre valido por favor.</p> : null}
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className={ errors.email && touched.email  ? styles.input__error : styles.inputField}
            />
            {errors.email && touched.email  ? <p className={styles.input__errorText}>Colocar un email valido por favor.</p> : null}
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
            {errors.message && touched.message ? <p className={styles.input__errorText}>Colocar un mensaje valido por favor.</p> : null}
            <button disabled={isSubmitting} type="submit">Enviar&nbsp; &nbsp; 
                <ClipLoader
                color={'white'}
                loading={isSubmitting}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </button>
            {messageStatus ? <p className={styles.button__succesText}>Gracias por tu mensaje</p> : null}
        </form>
    </m.div>
  )
}

export default ContactForm