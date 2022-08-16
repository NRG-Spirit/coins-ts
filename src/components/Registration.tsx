import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { UserRegistration } from '../http/API';
import { useAppDispatch } from '../utils/hooks';
import { setUserData } from '../redux/userReducer';

export default function Registration() {
   const dispatch = useAppDispatch();
   const [responseError, setResponseError]=useState();
   const navigate = useNavigate();
   const validationSchema = yup.object().shape({
      name:yup.string().typeError('Должно быть строкой').required('Обязательно'),
      email:yup.string().email('Невалидный имейл').required('Обязательно'),
      password:yup.string().typeError('Должно быть строкой').required('Обязательно'),
      confirmationPassword:yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательно'),
   });
   return (
      <>
         <Formik
            initialValues={{
               name: '',
               email: '',
               password: '',
               confirmationPassword: '',
            }}
            validationSchema={validationSchema}
            validateOnBlur
            onSubmit={(values) => { UserRegistration(values)
               .then(response => {
                  localStorage.setItem('user',JSON.stringify(response.data.user));
                  dispatch(setUserData(response.data.user));
                  navigate('/');
               },
            )
               .catch(error => setResponseError(error.response.data)); 
               }}
         >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
               <div className="form">
                  <input type="text"
                     name="name"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.name}
                     placeholder="введите имя пользователя" />
                  {touched.name && errors.name && <p className="formError">{errors.name}</p>}
                  <input type="email"
                     name="email"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                     placeholder="введите email" />
                  {touched.email && errors.email && <p className="formError">{errors.email}</p>}
                  <input type="password"
                     name="password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                     placeholder="введите пароль" />
                  {touched.password && errors.password && <p className="formError">{errors.password}</p>}
                  <input type="password"
                     name="confirmationPassword"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.confirmationPassword}
                     placeholder="повторите пароль" />
                     {touched.confirmationPassword && errors.confirmationPassword && 
                     <p className="formError">{errors.confirmationPassword}</p>}
                     {responseError && <p className="formError">{responseError}</p>}                  
                  <button type="submit"
                     disabled={!isValid && !dirty}
                     onClick={() => handleSubmit()}>зарегистрироваться</button>
               </div>
            )}
         </Formik>
      </>

   );
}