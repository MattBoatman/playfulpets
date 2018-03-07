import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class ContactUs extends React.Component {
  state = {
    open: false,
    name: '',
    email: '',
    subject: '',
    phone: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTextFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
    this.handleClose();
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
              value={this.state.email}
              onChange={this.handleTextFieldChange}
            />
            <TextField
              margin="dense"
              label="Phone"
              fullWidth
              name="phone"
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
      </div>
    );
  }
}
