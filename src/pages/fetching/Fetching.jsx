import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

import Lcenter from '../../layout/Lcenter';
import Header from '../../components/Header';
import { makeStyles } from '@mui/styles';
import { Box, Container, Paper } from '@mui/material';
import Content from './components/Content';
import DialogCompanyDetail from './components/DialogCompanyDetail';
import { isEmpty } from 'lodash';

const useStyles = makeStyles((theme) => ({
   root: {
      // display: 'flex',
      // alignItems: 'center',
      // flexDirection: 'column',
      backgroundColor: theme.palette.background.dark,
      // height: '100%',
      width: '100vw',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(5)
   },
   content: {
      padding: 16
   }
}));

const Fetching = () => {
   const classes = useStyles();

   const [data, setData] = useState([]);
   const [target, setTarget] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const getExample = useCallback(async () => {
      setIsLoading(true);
      const linkGet = `https://stockradars.co/assignment/data.php`;
      try {
         const res = await axios.get(linkGet);
         setData(res.data);
         setIsLoading(false);
      } catch (error) {
         setIsLoading(false);
      }
   }, []);

   useEffect(() => {
      getExample();
   }, [getExample]);

   return (
      <div className={classes.root}>
         <Box mx={3} mb={3}>
            <Header beadcrumbs={[{ text: 'Home', link: '/' }, { text: 'Fetching' }]} />
         </Box>
         <Container maxWidth="xl">
            <Box display="flex" alignItems="center" justifyContent="center">
               <Paper className={classes.content}>
                  <Content data={data} handleTarget={setTarget} />
               </Paper>
            </Box>
         </Container>
         <DialogCompanyDetail open={!isEmpty(target)} content={target} onClose={() => setTarget(null)} />
      </div>
   );
};

export default Fetching;
