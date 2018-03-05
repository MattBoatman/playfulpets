import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import hours from '../hours.jpg';


const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 300,
  },
};

const Hours = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={hours} title="Hours" />
        <CardContent>
          <Typography variant="headline" component="h2">
            Hours
          </Typography>
          <Typography paragraph>
            Playful Pets is open from 7 a.m. to 7 p.m. Monday through Friday.
          </Typography>
          <Typography paragraph>
            Weekends are by appointment for overnight boarding pickup and
            dropoff only.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Hours.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hours);
