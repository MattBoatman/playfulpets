import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40,
    marginTop: theme.spacing.unit * 3,
    width: '80%',
  }),
  body1: {
    lineHeight: '2.1em'
  }
});

const ContentBlock = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="headline" component="h3">
        {props.header}
      </Typography>
      <Typography className={classes.body1} component="div">
        {props.body}
      </Typography>
    </Paper>
  );
};

ContentBlock.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
};

export default withStyles(styles)(ContentBlock);
