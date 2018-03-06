import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import ExpandableCard from '../ExpandableCard/ExpandableCard';
import Daycarepicture from '../dogdaycare.jpg';
import grooming from '../grooming.jpg';
import overnightboarding from '../overnightboarding.jpg';
import athomeboarding from '../athomeboarding.jpg';
import green from 'material-ui/colors/green';
import Avatar from 'material-ui/Avatar';
import {
  daycarePrice,
  overnightBoarding,
  daycareIncludes,
  atHomeBoarding,
  atHomeInstructions,
  treatPricing,
  groomingPricing
} from '../Prices/Prices';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Star from 'material-ui-icons/Star';
import treatspicture from '../dogtreats.jpg';

const styles = {
  display2: {
    padding: 24,
    textAlign: 'center',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  avatar: {
    backgroundColor: green[500],
  },
  avatar1: {
    backgroundColor: green[700],
  },
  avatar2: {
    backgroundColor: green[900],
  },
  avatar3: {
    backgroundColor: green[200],
  },
  avatar4: {
    backgroundColor: green[300],
  },
  caption: {
    padding: 4,
  },
};

const Services = props => {
  const { classes } = props;
  return (
    <div>
      <Typography className={classes.display2} variant="display2">
        Services & Pricing
      </Typography>
      <div className={classes.wrapper}>
        <ExpandableCard
          imageSrc={Daycarepicture}
          tableData={daycarePrice}
          avatar={<Avatar className={classes.avatar}>DC</Avatar>}
          avatarTitle="Doggie Daycare"
          avatarSubheader="Starting at $12"
          paragraph1="We've transformed a 6,000 square foot maintenance garage into a
              huge indoor dog park where your playful pets can exercise and
              socialize non-stop during their visit. Outdoors, we have 10,000
              square feet of completely fenced-in running space."
          complexItem={
            <Typography variant="caption" paragraph>
              Our play space is sectioned off for large dogs and small dogs so
              your playful pet can socialize with other dogs of similar sizes.
            </Typography>
          }
          disclaimer={
            <Typography className={classes.caption} variant="caption">
              Multi-dog packages also available.{' '}
              <a
                style={styles.email}
                href="mailto:PlayfulPetsColumbus@gmail.com?Subject=Multi Dog Packages"
                target="_top"
              >
                Email
              </a>{' '}
              us for details
            </Typography>
          }
        />
        <ExpandableCard
          imageSrc={overnightboarding}
          tableData={overnightBoarding}
          avatar={<Avatar className={classes.avatar1}>AH</Avatar>}
          avatarTitle="Overnight Boarding"
          avatarSubheader="$30"
          paragraph1="With 6,000 square feet of space, Playful Pets has seven oversized kennels for large-dog or multi-dog boarding. We even have a separate room for medium and smaller dog kennels."
          complexItem={
            <span>
              <Typography variant="subheading">Prices Include:</Typography>
              <List>
                {daycareIncludes.map(object => {
                  return (
                    <ListItem key={object}>
                      <ListItemIcon>
                        <Star />
                      </ListItemIcon>
                      <ListItemText secondary={object} />
                    </ListItem>
                  );
                })}
              </List>
            </span>
          }
          disclaimer={
            <Typography className={classes.caption} variant="caption">
              Additional dog rate is available only if dogs from the same family
              are able to stay in the same kennel.
            </Typography>
          }
        />
        <ExpandableCard
          imageSrc={athomeboarding}
          tableData={atHomeBoarding}
          avatar={<Avatar className={classes.avatar3}>ON</Avatar>}
          avatarTitle="At Home Boarding"
          avatarSubheader="$50"
          paragraph1="Some dogs simply do not like spending the evening in kennels. That's why Playful Pets is offering an at-home boarding option."
          complexItem={
            <span>
              <Typography variant="subheading">How does it work?</Typography>
              <List>
                {atHomeInstructions.map(object => {
                  return (
                    <ListItem key={object}>
                      <ListItemText secondary={object} />
                    </ListItem>
                  );
                })}
              </List>
            </span>
          }
        />
        <ExpandableCard
          imageSrc={grooming}
          tableData={groomingPricing}
          avatar={<Avatar className={classes.avatar4}>PG</Avatar>}
          avatarTitle="Pet Grooming"
          avatarSubheader="$10 - $20"
          paragraph1="We offer pet grooming services and our full-service grooming room and wash room is up-and-running."
          complexItem={
            <span>
              <Typography variant="subheading">We currently offer the following services:</Typography>
            </span>
          }
        />
        <ExpandableCard
          imageSrc={treatspicture}
          tableData={treatPricing}
          avatar={<Avatar className={classes.avatar1}>T</Avatar>}
          avatarTitle="Treats"
          avatarSubheader="$7.95-$9.95"
          paragraph1="Playful Pets is excited to partner with Three Dog Bakery, located
          right here in Columbus, to sell all-natural, fresh-baked treats
          for dogs! Stop in today to get your Playful Pet some tasty treats."
        />
      </div>
    </div>
  );
};

Services.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
};

export default withStyles(styles)(Services);
