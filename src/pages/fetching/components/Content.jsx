import React from 'react';
import { makeStyles } from '@mui/styles';

import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import NewTabIcon from '@mui/icons-material/OpenInNew';

const stringAvatar = (string) => {
   if (!string.length) return 'X';
   return string[0];
};

const useStyles = makeStyles((theme) => ({
   grid: {
      height: 80,
      border: '1px solid #dedede',
      borderRadius: 8,
      [theme.breakpoints.down(1000)]: {
         height: 120
      },
      [theme.breakpoints.down('sm')]: {
         height: 80
      },
      [theme.breakpoints.down(400)]: {
         height: 120
      },
      '&:hover': {
         border: `1px solid ${theme.palette.primary.main}`,
         cursor: 'pointer'
      }
   }
}));

const Content = ({ data = [], handleTarget }) => {
   const classes = useStyles();

   const handleNewTab = (link) => () => {
      const newWindow = window.open(link, '_blank', 'noreferrer');
      if (newWindow) newWindow.opener = null;
   };

   return (
      <Grid container spacing={2}>
         {data.map((detail) => (
            <Grid key={detail.N_fullname + detail.N_name} item xs={12} sm={6} md={4}>
               <Box
                  p={2}
                  display="flex"
                  alignItems="center"
                  className={classes.grid}
                  onClick={() => handleTarget(detail)}
               >
                  <Avatar alt={detail.N_COMPANY_E}>{stringAvatar(detail.N_name)}</Avatar>
                  <Box mr={1} />
                  <Typography>{detail.N_fullname ?? ''}</Typography>
                  <Box flexGrow={1} />
                  <IconButton onClick={handleNewTab(detail.N_URL)}>
                     <NewTabIcon color="primary" />
                  </IconButton>
               </Box>
            </Grid>
         ))}
      </Grid>
   );
};

export default Content;
