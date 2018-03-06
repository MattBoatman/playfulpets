import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    margin: 20,
    maxWidth: 345,
    height: 495,
  },
  media: {
    height: 300,
  },

};

const CardWrapper = props => {
  const { classes, imageSrc, title, paragraph1, paragraph2, cardActions } = props;
  return (
    <div>
      <Card className={classes.card}>
        {imageSrc && <CardMedia className={classes.media} image={imageSrc} />}
        <CardContent>
          {title && (
            <Typography variant="headline" component="h2">
              {title}
            </Typography>
          )}
          {paragraph1 && <Typography paragraph>{paragraph1}</Typography>}
          {paragraph2 && <Typography>{paragraph2}</Typography>}
        </CardContent>
        {cardActions && <CardActions>{cardActions}</CardActions>}
      </Card>
    </div>
  );
};

CardWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  cardActions: PropTypes.node,
};

export default withStyles(styles)(CardWrapper);
