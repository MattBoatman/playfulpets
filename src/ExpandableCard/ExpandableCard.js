import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import classnames from 'classnames';
import PricingTable from '../PricingTable/PricingTable';

const styles = theme => ({
  card: {
    width: 350,
    margin: '5px 15px',
    minHeight: 602,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 300,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    textAlign: 'justify',
    lineHeight: '1.7em',
  },
  action: {
      marginTop: 'auto',
  },
});

const ExpandableCard = class extends React.Component {
  state = {
    showPricingTable: false,
  };

  clickShow = () => {
    this.setState(prevState => ({
      showPricingTable: !prevState.showPricingTable,
    }));
  };

  render() {
    const {
      classes,
      paragraph1,
      paragraph2,
      imageSrc,
      tableData,
      avatar,
      avatarTitle,
      avatarSubheader,
      disclaimer,
      complexItem,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={avatar}
            title={avatarTitle}
            subheader={avatarSubheader}
          />
          <CardMedia className={classes.media} image={imageSrc} />
          <CardContent>
            {paragraph1 && (
              <Typography className={classes.root}>
                {paragraph1}
              </Typography>
            )}
            {paragraph2 && (
              <Typography className={classes.root}>{paragraph2}</Typography>
            )}
          </CardContent>
          <CardActions className={classes.action}>
            <Button size="small" color="primary" onClick={this.clickShow}>
              {this.state.showPricingTable ? 'Hide Prices' : 'Show Prices'}
            </Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.showPricingTable,
              })}
              onClick={this.clickShow}
              aria-expanded={this.state.showPricingTable}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
            in={this.state.showPricingTable}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
            {complexItem && (
              <div>{complexItem}</div>
            )}
              <PricingTable data={tableData} />
              {disclaimer &&
                <span>{disclaimer}</span>
              }
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
};

ExpandableCard.propTypes = {
  classes: PropTypes.object.isRequired,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  avatarTitle: PropTypes.string,
  disclaimer: PropTypes.node,
  complexItem: PropTypes.node,
  avatarSubheader: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  tableData: PropTypes.array.isRequired,
};

export default withStyles(styles)(ExpandableCard);
