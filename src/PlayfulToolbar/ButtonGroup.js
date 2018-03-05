import React, { Component } from 'react';
import Button from 'material-ui/Button';

const style = {
    buttonGroup: {
        marginLeft: 'auto'
    }
}
class ButtonGroup extends Component {
    render() {
        return (
            <div style={style.buttonGroup}>
            <Button color="inherit">Services & Rates</Button>
            <Button color="inherit">Vaccination Policy</Button>
          </div>
        );
    }
}

export default ButtonGroup;