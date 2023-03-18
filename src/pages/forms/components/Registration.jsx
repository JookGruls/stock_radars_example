import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';

const data = [
   {
      firstName: 'Jook',
      lastName: 'Gruls',
      tel: '022222222',
      email: 'ss@gg.com',
      ref: 'stock holder'
   },
   {
      firstName: 'J',
      lastName: 'K',
      tel: '0984567886',
      email: 'aa@bb.com',
      ref: 'the flash'
   }
];

const Labels = [
   { title: 'First Name', value: 'first_name' },
   { title: 'Last Name', value: 'last_name' },
   { title: 'Tel', value: 'tel' },
   { title: 'E-Mail', value: 'email' },
   { title: 'Ref', value: 'ref' }
];

const useStyles = makeStyles((theme) => ({
   card: {
      marginBottom: 16
   }
}));

const Registration = () => {
   const classes = useStyles();
   const result = useSelector((state) => state.result.result);

   return (
      <Box mt={2}>
         <Grid container>
            <Grid item xs={12}>
               {result?.map((customer) => (
                  <Card className={classes.card} key={customer.first_name + customer.email}>
                     <CardContent>
                        {Labels.map((label) => (
                           <Box
                              key={label.value}
                              mb={1.5}
                              py={1}
                              px={2}
                              display="flex"
                              alignItems="center"
                              width="100%"
                              bgcolor="primary.pallid"
                              borderRadius="4px"
                           >
                              <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
                                 {label.title}
                              </Typography>
                              <Box mx={1} />
                              <Typography>{customer[label.value]}</Typography>
                           </Box>
                        ))}
                     </CardContent>
                  </Card>
               ))}
            </Grid>
         </Grid>
      </Box>
   );
};

export default Registration;
