import React, { Component } from 'react';
import PlayfulToolbar from '../PlayfulToolbar/PlayfulToolbar';
import Footer from '../Footer/Footer';
import ContentBlock from '../ContentBlock/ContentBlock';
import dogHeader from '../dogheader.webp';
import FullWidthImage from '../FullWidthImage/FullWidthImage';
import Hours from '../Hours/Hours';
import Contact from '../Contact/Contact';
import Treats from '../Treats/Treats';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    zIndex: 10,
    height: '86vh',
    overflow: 'auto',
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
          <Hours />
          <Contact />
          <Treats />
        </div>
        <div style={{height: 20, width: '100%'}}/>
        <Footer />
      </div>
    );
  }
}

export default MainWrapper;
