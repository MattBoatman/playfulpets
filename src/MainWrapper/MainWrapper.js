import React, { Component } from 'react';
import PlayfulToolbar from '../PlayfulToolbar/PlayfulToolbar';
import Footer from '../Footer/Footer';
import ContentBlock from '../ContentBlock/ContentBlock';
import Button from 'material-ui/Button';
import dogHeader from '../dogheader.jpg';
import FullWidthImage from '../FullWidthImage/FullWidthImage';
import Hours from '../Hours/Hours';
import Contact from '../Contact/Contact';
import CardWrapper from '../CardWrapper/CardWrapper';
import Treats from '../Treats/Treats';
import contact from '../contact.jpg';
import hours from '../hours.jpg';
import Daycare from '../Daycare/Daycare';
import playfulpets from '../playfulpets.jpg'

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    zIndex: 10,
    height: '100vh',
    overflow: 'auto',
    alignItems: 'flex-start'
  },
  email: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
};
class MainWrapper extends Component {
  render() {
    return (
      <div>
        <PlayfulToolbar />
        <FullWidthImage imageSrc={dogHeader} />
        <div style={styles.wrapper}>
          <ContentBlock
            body="Playful Pets offers doggie daycare, overnight pet boarding, light
        grooming and other services to keep your fur friends safe, happy, and
        healthy. With 6,000 square feet of indoor space and 10,000 square feet
        of completely fenced-in outdoor space, Playful Pets is nestled within
        the growing Franklinton Arts District and is located at 13 North Green
        Street, just one mile west of the Ohio Statehouse."
          />
          <CardWrapper
            imageSrc={contact}
            title="Contact"
            paragraph1="We are located at 13 North Green Street, Columbus, OH 43222."
            paragraph2="You can reach us at 614-670-4866"
            cardActions={
              <Button size="small" color="primary">
                <a
                  style={styles.email}
                  href="mailto:someone@example.com?Subject=Hello%20again"
                  target="_top"
                >
                  PlayfulPetsColumbus@gmail.com
                </a>
              </Button>
            }
          />
          <CardWrapper
            imageSrc={hours}
            title="Hours"
            paragraph1="Playful Pets is open from 7 a.m. to 7 p.m. Monday through Friday."
            paragraph2="Weekends are by appointment for overnight boarding pickup and
            dropoff only."
          />
          <Treats />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainWrapper;
