import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { UserAuthorization } from '../http/API';
import { useAppDispatch } from '../utils/hooks';
import { setUserData } from '../redux/userReducer';

export default function Authorization() {
   const dispatch = useAppDispatch();
   const [responseError, setResponseError]=useState();
   const navigate = useNavigate();
   const validationSchema = yup.object().shape({
      email: yup.string().email('Невалидный имейл').required('Обязательно'),
      password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
   });
   return (

      <>
         <Formik
            initialValues={{
               email: '',
               password: '',
            }}
            validationSchema={validationSchema}
            validateOnBlur
            onSubmit={(values) => {
               UserAuthorization(values)
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
               {responseError && <p className="formError">{responseError}</p>}
               <button type="submit"
                  disabled={!isValid && !dirty}
                  onClick={() => handleSubmit()}>войти</button>
            </div>
         )}
      </Formik>
      </>

   );
}