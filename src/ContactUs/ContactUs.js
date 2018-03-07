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

export default class ContactUs extends React.Component {
  state = {
    open: false,
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
        if (result && result.response.error) {
          this.setState({ emailError: true });
        } else {
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
                Email: PlayfulPetsColumbus@gmail.com
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
            {this.state.emailError && (
              <DialogContentText
                style={{ color: 'red', padding: 20, fontSize: '1.2em' }}
              >
                Looks like there was an error sending this email. Try emailing
                us directly at{' '}
                <a href="mailto:PlayfulPetsColumbus@gmail.com" target="_top">
                  PlayfulPetsColumbus@gmail.com
                </a>{' '}
                or calling 614-670-4866
              </DialogContentText>
            )}
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
      </div>
    );
  }
}
