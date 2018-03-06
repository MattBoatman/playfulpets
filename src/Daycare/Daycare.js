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
    lineHeight: '2.1em',
  },
});

const Daycare = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="headline" component="h3">
        Doggie Daycare
      </Typography>
      <Typography className={classes.body1} paragraph>
        We've transformed a 6,000 square foot maintenance garage into a huge
        indoor dog park where your playful pets can exercise and socialize
        non-stop during their visit. Outdoors, we have 10,000 square feet of
        completely fenced-in running space.
      </Typography>
      <Typography className={classes.body1} paragraph>
        Our play space is sectioned off for large dogs and small dogs so your
        playful pet can socialize with other dogs of similar sizes.
      </Typography>
    </Paper>
  );
};

Daycare.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
};

export default withStyles(styles)(Daycare);
