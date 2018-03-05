import React from 'react';
import Typography from 'material-ui/Typography';
import ImageLink from '../SocialAccounts/ImageLink';
import fblogo from '../SocialAccounts/fblogo.png';
import googlemaps from '../SocialAccounts/google-maps.png';

const styles = {
  root: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 60,
    zIndex: 15,
  },
  phone: {
    padding: 12,
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
