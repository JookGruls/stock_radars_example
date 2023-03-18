import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Hidden } from '@mui/material';
import Header from '../../components/Header';
import Settings from './components/Settings';
import UserTable from './components/UserTable';
import Page from '../../components/Page';
import Registration from './components/Registration';

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      width: '100vw',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
   },
   content: {
      padding: 16
   }
}));

const InputForms = () => {
   const classes = useStyles();

   return (
      <Page className={classes.root} title="Register Forms">
         <Container maxWidth="lg">
            <Header beadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Register Forms' }]} />
            <Box mt={2}>
               <Settings />
               <Hidden smDown>
                  <UserTable />
               </Hidden>
               <Hidden smUp>
                  <Registration />
               </Hidden>
            </Box>
         </Container>
      </Page>
   );
};

export default InputForms;
