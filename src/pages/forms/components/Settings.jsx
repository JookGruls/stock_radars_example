import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Card, CardContent, Divider, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import { register } from '../../../redux/actions/registerActions';

const phoneRegExp =
   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Settings = () => {
   const dispatch = useDispatch();
   const [search] = useSearchParams();
   const [params, setParams] = useState({
      first_name: '',
      last_name: '',
      tel: '',
      email: '',
      ref: ''
   });

   const handleRegisterSubmit = async () => {
      setTimeout(() => {
         dispatch(register(params));
      }, 1500);
      setParams({});
   };

   const handleOnChange = (e) => {
      const { name, value } = e.target;
      setParams((pState) => ({ ...pState, [name]: value }));
   };

   useEffect(() => {
      (() => {
         Object.keys(params).map((key) => {
            const getParams = search.get(key);
            setParams((pState) => ({ ...pState, [key]: getParams }));
         });
      })();
   }, []);

   return (
      <Formik
         dirty
         enableReinitialize
         initialValues={{
            first_name: params.first_name || '',
            last_name: params.last_name || '',
            tel: params.tel || '',
            email: params.email || '',
            ref: params.ref || ''
         }}
         validationSchema={Yup.object().shape({
            first_name: Yup.string().required('FirstName is required'),
            last_name: Yup.string().required('LastName is required'),
            tel: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Tel is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            ref: Yup.string().required('Ref is required')
         })}
         onSubmit={handleRegisterSubmit}
      >
         {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
               <fieldset style={{ border: '1px solid transparent' }}>
                  <Card style={{ padding: 16 }}>
                     <CardContent>
                        <Typography variant="h3">Register</Typography>
                        <Grid container spacing={1} mt={1}>
                           <Grid item xs={12} md={6}>
                              <TextField
                                 name="first_name"
                                 value={values.first_name}
                                 onBlur={handleBlur}
                                 onChange={handleOnChange}
                                 label="First Name"
                                 margin="dense"
                                 size="small"
                                 error={Boolean(touched.first_name && errors.first_name)}
                                 helperText={touched.first_name && errors.first_name}
                                 fullWidth
                              />
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <TextField
                                 name="last_name"
                                 value={values.last_name}
                                 onBlur={handleBlur}
                                 onChange={handleOnChange}
                                 label="Last Name"
                                 margin="dense"
                                 size="small"
                                 error={Boolean(touched.last_name && errors.last_name)}
                                 helperText={touched.last_name && errors.last_name}
                                 fullWidth
                              />
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <TextField
                                 name="tel"
                                 value={values.tel}
                                 onBlur={handleBlur}
                                 onChange={handleOnChange}
                                 label="Tel"
                                 margin="dense"
                                 size="small"
                                 error={Boolean(touched.tel && errors.tel)}
                                 helperText={touched.tel && errors.tel}
                                 fullWidth
                              />
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <TextField
                                 name="email"
                                 value={values.email}
                                 onBlur={handleBlur}
                                 onChange={handleOnChange}
                                 label="E-Mail"
                                 margin="dense"
                                 size="small"
                                 error={Boolean(touched.email && errors.email)}
                                 helperText={touched.email && errors.email}
                                 fullWidth
                              />
                           </Grid>
                           <Grid item xs={12} md={6}>
                              <TextField
                                 name="ref"
                                 value={values.ref}
                                 onBlur={handleBlur}
                                 onChange={handleOnChange}
                                 label="Ref"
                                 margin="dense"
                                 size="small"
                                 error={Boolean(touched.ref && errors.ref)}
                                 helperText={touched.ref && errors.ref}
                                 fullWidth
                              />
                           </Grid>
                        </Grid>
                        {errors.submit && (
                           <Box mt={3}>
                              <FormHelperText error>{errors.submit}</FormHelperText>
                           </Box>
                        )}
                     </CardContent>
                     <Divider />
                     <Box p={2} display="flex" justifyContent="flex-end">
                        <Button type="submit" disabled={isSubmitting} variant="contained" color="primary" fullWidth>
                           submit
                        </Button>
                     </Box>
                  </Card>
               </fieldset>
            </form>
         )}
      </Formik>
   );
};

export default Settings;
