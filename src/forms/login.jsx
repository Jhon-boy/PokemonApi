
import React, {useState} from 'react';
import { Usuarios } from '../models/usuarios.class';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form , ErrorMessage} from 'formik'; 
import app from '../server/firebase';

import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Formato de Emial inválido')
        .required('Email es obligatorio'),
        password: Yup.string().required('Contraseña es obligatorio')
    }
)
 const CredencialesInicial = { 
        email: '',
        password: ''
        } 
   

const Login = (props) => {


    const  iniciarSesion =  (e) => {
        e.preventDefault();
         const emailRef = e.target.email.value;
         const contraseñaRef = e.target.password.value;
         app.auth().createUserWithEmailAndPassword(emailRef, contraseñaRef).then((usuario)=>{
            console.log('usuario creado', usuario);
            props.setUsuario(usuario);
         })
        
     }
    return (
        <div>
        <Formik
         initialValues= { CredencialesInicial } 
           //Yup Validaciones esquemas
        validationSchema= {loginSchema}
        onSubmit={
            async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                   // alert(JSON.stringify(values, null, 2));
                    }   
            
                }             
        >   
        {  
            ( 
                { 
                    errors, 
                    touched , 
                    isSubmitting 
                }
                ) =>(
                 <Form onSubmit={iniciarSesion} >
                <center>
                    <div className='Ingreso'>
                        <div className="mb-3">
                            <label className="form-label">Correo</label>
                            <Field
                                className="form-control"
                                type="email"
                                id='email'
                                name='email'
                                placeholder='example@gmail.com'
                               
                            />
                            {
                                errors.email && touched.email &&
                                (
                                    
                                        <ErrorMessage name = 'email' className='Errores' component='div'></ErrorMessage>
                                    
                                )
                            }

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <Field className="form-control"
                                type="password"
                                id='password'
                                name='password'
                             
                            />
                            {
                                errors.password && touched.password &&
                                (
                                    ( //Mostramos el error en caso de ser invalido con un DIV
                                   
                                        <ErrorMessage className='Errores' name = 'password'></ErrorMessage>
                                   
                                    )
                                )
                            }

                        </div>
                        <button type='submit' className='btn btn-primary mb-3'>Ingresar</button>
                        {isSubmitting ? (<p>Sending....</p> ): null}
                    </div>
                </center>


            </Form>
        )
        }
           
        </Formik>
            
        </div>
    );
}

export default Login;
