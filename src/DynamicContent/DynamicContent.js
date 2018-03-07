import React, { Component } from 'react';
import ContentSquare from '../ContentSquare/ContentSquare';
import './DynamicContent.css';
import Typography from 'material-ui/Typography';
import fblogo from '../SocialAccounts/fblogo.png';
import googlemaps from '../SocialAccounts/google-maps.png';
import ImageLink from '../SocialAccounts/ImageLink';


const styles = {
  content: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '22px',
    padding: 0,
    margin: 0,
  },
  logo: {
    height: 40,
    paddingTop: 10,
  },
};

class DynamicContent extends Component {
  render() {
    return (
      <div className="dynamicContent">
        <ContentSquare backgroundColor="#F5F5F5" color="#1E1D32" title="About">
          <div style={styles.content}>
            <Typography variant="body1" style={{color: '#1E1D32'}}>
              Playful Pets offers doggie daycare, overnight pet boarding, light
              grooming and other services to keep your fur friends safe, happy,
              and healthy. With 6,000 square feet of indoor space and 10,000
              square feet of completely fenced-in outdoor space, Playful Pets is
              nestled within the growing Franklinton Arts District and is
              located at 13 North Green Street, just one mile west of the Ohio
              Statehouse.
            </Typography>
          </div>
        </ContentSquare>
        <ContentSquare backgroundColor="#E8EAF6" color="#00796B" title="Hours">
          <div style={styles.content}>
            <Typography variant="body1" style={{color: '#00796B'}} paragraph>
              Playful Pets is open from 7 a.m. to 7 p.m. Monday through Friday.
            </Typography>
            <Typography variant="body1" style={{color: '#00796B'}}>
              Weekends are by appointment for overnight boarding pickup and
              dropoff only.
            </Typography>
          </div>
        </ContentSquare>
        <ContentSquare
          backgroundColor="#CFD8DC"
          color="#004D40"
          title="Contact"
        >
          <div style={styles.content}>
            <Typography variant="body1" paragraph style={{color: '#004D40'}}>
              We are located at 13 North Green Street, Columbus, OH 43222.
            </Typography>
            <Typography style={{color: '#004D40'}}>You can reach us at 614-670-4866</Typography>
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
        </ContentSquare>
      </div>
    );
  }
}

export default DynamicContent;
