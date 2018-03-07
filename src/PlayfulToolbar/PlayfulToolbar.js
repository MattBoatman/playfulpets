import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MobileButtons from './MobileButtons';
import ButtonGroup from './ButtonGroup';
import VaccinationPolicy from '../VaccinationPolicy/VaccinationPolicy';
import playfulSquare from '../playfulpetssquare.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    cursor: 'pointer',
    height: 100,
    width: 140,
    border: '2px solid #373737',
    position: 'absolute',
    top: 3,
    zIndex: 10,
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  mobileTitle: {
    cursor: 'pointer',
    height: 60,
    width: 84,
    border: '2px solid #373737',
    position: 'absolute',
    top: 3,
    left: 4,
    zIndex: 10,
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  image: {
    height: '100%',
    width: '100%',
  },
};

const PlayfulToolbar = class extends React.Component {
  state = {
    anchorEl: null,
    width: window.innerWidth,
    vaccination: false,
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  clickServices = () => {
    this.handleClose();
    this.props.history.push('/services');
  };
  clickTitle = () => {
    this.props.history.push('/');
  };

  handleVaccinationClickOpen = () => {
    this.setState({ vaccination: true });
    this.handleClose();
  };

  handleVaccinationClose = () => {
    this.setState({ vaccination: false });
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const isMobile = this.state.width <= 700;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.flex}>
            <span onClick={this.clickTitle} className={isMobile ? classes.mobileTitle : classes.title}>
              <img className={classes.image} src={playfulSquare} alt="Home" />
            </span>
            {isMobile ? (
              <MobileButtons
                handleClose={this.handleClose}
                handleMenu={this.handleMenu}
                anchorEl={this.state.anchorEl}
                clickServices={this.clickServices}
                clickVaccination={this.handleVaccinationClickOpen}
              />
            ) : (
              <ButtonGroup
                clickServices={this.clickServices}
                clickVaccination={this.handleVaccinationClickOpen}
              />
            )}
          </Toolbar>
        </AppBar>
        <VaccinationPolicy
          open={this.state.vaccination}
          handleClose={this.handleVaccinationClose}
        />
      </div>
    );
  }
};

PlayfulToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PlayfulToolbar));
