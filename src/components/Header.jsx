import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { Breadcrumbs, Typography, Link, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const useStyles = makeStyles(() => ({
   root: {}
}));

function Header({ className, beadcrumbs = [], title, ...rest }) {
   const classes = useStyles();
   const { pathname } = useLocation();

   return (
      <div className={clsx(classes.root, className)} {...rest}>
         <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {beadcrumbs.map((beadCrumb, i) =>
               beadCrumb.link ? (
                  <Link key={i} color="inherit" to={beadCrumb.link} component={RouterLink}>
                     {beadCrumb.text}
                  </Link>
               ) : (
                  <Typography key={i} color="textPrimary">
                     {beadCrumb.text}
                  </Typography>
               )
            )}
         </Breadcrumbs>
         {title ? (
            <Box my={2}>
               <Typography variant="h3" color="textPrimary">
                  {title || beadcrumbs.slice(-1)[0]?.text || pathname.split('/').slice(-1)[0] || ''}
               </Typography>
            </Box>
         ) : null}
      </div>
   );
}

export default Header;
