import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { sendEmail } from '../Email/Email';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

export default class ContactUs extends React.Component {
  state = {
    open: false,
    showSnackBar: false,
    messageNotification: '',
    name: '',
    email: '',
    subject: '',
    phone: '',
    error: false,
    emailError: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      name: '',
      email: '',
      subject: '',
      phone: '',
      error: false,
      emailError: false,
    });
  };

  dismissSnackBar = () => {
    this.setState({ showSnackBar: false, messageNotification: '' });
  };

  handleTextFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.email === '' && this.state.phone === '') {
      this.setState({ error: true });
    } else {
      return sendEmail(
        this.state.name,
        this.state.email,
        this.state.subject,
        this.state.phone,
      ).then(result => {
        if (!result) {
          this.setState({
            showSnackBar: true,
            messageNotification: (
              <span>
                Looks like there was an error sending this email. Try emailing
                us directly at{' '}
                <a style={{color: '#fff'}} href="mailto:PlayfulPetsColumbus@gmail.com" target="_top">
                  PlayfulPetsColumbus@gmail.com
                </a>{' '}
                or calling 614-670-4866
              </span>
            ),
          });
        } else {
          this.setState({
            showSnackBar: true,
            messageNotification: (
              <span id="message-id">
                Email sent! We will contact you shortly.
              </span>
            ),
          });
          this.handleClose();
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Button variant="raised" color="primary" onClick={this.handleClickOpen}>
          Email us
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">How can we help you?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can fill out the form below or email us directly and we will
              get back you ASAP{' '}
              <a href="mailto:PlayfulPetsColumbus@gmail.com" target="_top">
                email: PlayfulPetsColumbus@gmail.com
              </a>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleTextFieldChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Email"
              fullWidth
              name="email"
              required
              error={this.state.error}
              value={this.state.email}
              onChange={this.handleTextFieldChange}
            />
            <TextField
              margin="dense"
              label="Phone"
              fullWidth
              name="phone"
              required
              error={this.state.error}
              value={this.state.phone}
              onChange={this.handleTextFieldChange}
            />
            <TextField
              margin="dense"
              label="Subject"
              multiline
              fullWidth
              name="subject"
              value={this.state.subject}
              onChange={this.handleTextFieldChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.showSnackBar}
          autoHideDuration={6000}
          onClose={this.dismissSnackBar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={this.state.messageNotification}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.dismissSnackBar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
