import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { alpha } from '@mui/material';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative'
   },
   thead: {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      '& .MuiTableCell-head': {
         color: theme.palette.primary.main,
         fontWeight: 600,
         borderBottom: 'unset'
      }
   }
}));

const UserTable = ({ className, ...rest }) => {
   const classes = useStyles();
   const user = useSelector((state) => state.result.result);

   return (
      <div className={clsx(classes.root, className)} {...rest}>
         <Box mt={2}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table>
                  <TableHead classes={{ root: classes.thead }}>
                     <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Tel</TableCell>
                        <TableCell align="center">Ref</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {user?.map((result) => (
                        <TableRow key={result.first_name + result.ref} hover>
                           <TableCell>{result.first_name}</TableCell>
                           <TableCell>{result.last_name}</TableCell>
                           <TableCell align="center">{result.email}</TableCell>
                           <TableCell align="center">{result.tel}</TableCell>
                           <TableCell align="center">{result.ref}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
      </div>
   );
};

export default UserTable;
