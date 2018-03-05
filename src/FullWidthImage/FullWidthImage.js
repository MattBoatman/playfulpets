import React from 'react';
import PropTypes from 'prop-types';

const style = {
    wrapper: {
        height: 300,
        width: '100%',
        position: 'absolute',
    },
    image : {
        height: '100%',
        width: '100%',
    }
}
const FullWidthImage = props => {
    return (
        <div style={style.wrapper}>
            <img style={style.image} src={props.imageSrc} alt="dogs"/>
        </div>
    );
};

FullWidthImage.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};

export default FullWidthImage;