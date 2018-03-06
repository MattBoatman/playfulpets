import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LocalHospital from 'material-ui-icons/LocalHospital'
import { vaccines } from '../Prices/Prices';

const VaccinationPolicy = props => {
  return (
    <div>
      <Dialog
        fullScreen={props.fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Vaccination Policy'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            On or before your dog’s first visit to Playful Pets, we ask that you
            provide proof of the following current vaccinations:
          </DialogContentText>
          <List>
            {vaccines.map(object => {
              return (
                <ListItem key={object}>
                  <ListItemIcon>
                    <LocalHospital />
                  </ListItemIcon>
                  <ListItemText secondary={object} />
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

VaccinationPolicy.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withMobileDialog()(VaccinationPolicy);
