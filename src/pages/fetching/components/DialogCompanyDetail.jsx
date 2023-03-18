import React from 'react';

import {
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Grid,
   IconButton,
   TextField,
   Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
   title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   }
}));

const DialogCompanyDetail = ({ open = false, content, onClose }) => {
   const classes = useStyles();
   return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth={'lg'}>
         <DialogTitle className={classes.title}>
            <Typography variant="h4" gutterBottom>
               Company Detail
            </Typography>
            <IconButton onClick={onClose}>
               <CloseIcon />
            </IconButton>
         </DialogTitle>
         <DialogContent>
            <Box mb={1}>
               <Typography>{content?.N_fullname || ''}</Typography>
               <Box display="flex" alignItems="center">
                  <Typography>MARKETCAP : </Typography>
                  <Box mx={0.5} />
                  <Typography color="primary" style={{ fontWeight: 'bold' }}>
                     {content?.marketcap || 0}
                  </Typography>
               </Box>
            </Box>
            <Grid container spacing={1}>
               <Grid item xs={12} md={6} p={1}>
                  <TextField
                     label="Company Name (EN)"
                     value={content?.N_COMPANY_E || ''}
                     margin="dense"
                     size="small"
                     fullWidth
                     InputProps={{ readOnly: true }}
                  />
               </Grid>
               <Grid item xs={12} md={6} p={1}>
                  <TextField
                     label="Company Name (TH)"
                     value={content?.N_COMPANY_T || ''}
                     margin="dense"
                     size="small"
                     fullWidth
                     InputProps={{ readOnly: true }}
                  />
               </Grid>
               <Grid item xs={12} p={1}>
                  <TextField
                     label="Company Description (EN)"
                     value={content?.N_BUSINESS_TYPE_E || ''}
                     margin="dense"
                     size="small"
                     fullWidth
                     InputProps={{ readOnly: true }}
                     multiline
                  />
               </Grid>
               <Grid item xs={12} p={1}>
                  <TextField
                     label="Company Description (TH)"
                     value={content?.N_BUSINESS_TYPE_T || ''}
                     margin="dense"
                     size="small"
                     fullWidth
                     InputProps={{ readOnly: true }}
                     multiline
                  />
               </Grid>
            </Grid>
         </DialogContent>
         <DialogActions style={{ justifyContent: 'center' }}>
            <Button variant="contained" onClick={onClose} color="primary" style={{ width: 240 }}>
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default DialogCompanyDetail;
