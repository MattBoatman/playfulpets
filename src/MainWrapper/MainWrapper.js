import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import Button from 'material-ui/Button';
import dogHeader from '../dogheader.jpg';
import FullWidthImage from '../FullWidthImage/FullWidthImage';
import CardWrapper from '../CardWrapper/CardWrapper';
import contact from '../contact.jpg';
import hours from '../hours.jpg';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: 60,
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
            imageSrc={hours}
            title="Hours"
            paragraph1="Playful Pets is open from 7 a.m. to 7 p.m. Monday through Friday."
            paragraph2="Weekends are by appointment for overnight boarding pickup and
            dropoff only."
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
                  href="mailto:PlayfulPetsColumbus@gmail.com"
                  target="_top"
                >
                  PlayfulPetsColumbus@gmail.com
                </a>
              </Button>
            }
          />
        </div>
      </div>
    );
  }
}

export default MainWrapper;
