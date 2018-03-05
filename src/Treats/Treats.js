import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import treatspicture from '../treatspicture.webp';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import classnames from 'classnames';

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: 20,
    marginBottom: 50,
  },
  media: {
    height: 300,
  },
  email: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

const Treats = class extends React.Component {
  state = {
    showStock: false,
  };

  clickShow = () => {
    this.setState(prevState => ({
      showStock: !prevState.showStock,
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={treatspicture}
            title="Treats"
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              Treats
            </Typography>
            <Typography paragraph>
              Playful Pets is excited to partner with Three Dog Bakery, located
              right here in Columbus, to sell all-natural, fresh-baked treats
              for dogs! Stop in today to get your Playful Pet some tasty treats.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={this.clickShow}>
              {this.state.showStock ? 'Hide Stock' : 'Show Stock'}
            </Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.showStock,
              })}
              onClick={this.clickShow}
              aria-expanded={this.state.showStock}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.showStock} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2">$7.95</Typography>
              <Typography>Caramel Swirl "Ice Cream"</Typography>
              <Typography>Classic Wafers with Peanut</Typography>
              <Typography>Classic Cremes with Vanilla</Typography>
              <Typography>Classic Wafers with Sweet Potatoes</Typography>
              <Typography>Classic Wafers with Vanilla</Typography>
              <Typography paragraph>
                Mini Classic Wafers with Carob, Peanut, and Vanilla
              </Typography>
              <Typography variant="body2">$9.95</Typography>
              <Typography>Pup-kin Spiced Lattes</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
};

Treats.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Treats);
