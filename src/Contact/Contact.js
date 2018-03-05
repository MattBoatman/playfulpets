import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import contact from '../contact.jpg';


const styles = {
  card: {
    // maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 300,
  },
  email: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  paragraph: {
    lineHeight: '2em'
  }
};

const Contact = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={contact} title="Contact" />
        <CardContent>
          <Typography variant="headline" component="h2">
            Contact
          </Typography>
          <Typography paragraph>
            We are located at 13 North Green Street, Columbus, OH 43222.
          </Typography>
          <Typography paragraph>
            You can reach us at 614-670-4866
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a style={styles.email} href="mailto:someone@example.com?Subject=Hello%20again" target="_top">PlayfulPetsColumbus@gmail.com</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
