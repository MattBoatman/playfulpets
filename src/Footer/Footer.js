import React from 'react';
import Typography from 'material-ui/Typography';
import ImageLink from '../SocialAccounts/ImageLink';
import fblogo from '../SocialAccounts/fblogo.png';
import googlemaps from '../SocialAccounts/google-maps.png';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2e7d32',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55
  },
  phone: {
    padding: 12,
    color: '#fff',
  },
  logo: {
    height: 40,
  },
};

const Footer = props => {
  return (
      <div style={styles.root}>
        <div style={styles.addressBlock}>
          <Typography style={styles.phone}>614-670-4866</Typography>
        </div>
        <div style={styles.logo}>
          <ImageLink
            href="https://www.facebook.com/PlayfulPetsColumbus/"
            image={fblogo}
          />
          <ImageLink
            href="http://maps.google.com/?q=Playful Pets Columbus Ohio"
            image={googlemaps}
          />
        </div>
      </div>
    );
}

export default Footer;
