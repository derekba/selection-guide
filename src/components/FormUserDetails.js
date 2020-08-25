import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  getLocation = e => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
      let div = document.getElementById('location');
      div.innerHTML = "Latitude is : " + position.coords.latitude + "<br>" + "Longitude is : " + position.coords.longitude;
    });
  };

  render() {
    const { values, handleChange } = this.props;
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#0055a0',
        },
        secondary: {
          main: '#8e8e8e',
        },
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle align="center" id="form-dialog-title">Where is your community located?</DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                The payback of energy cost savings by choosing a heat pump model over a resistance head unit will vary by location.
              </DialogContentText>
              <TextField
              placeholder="City, State or Zip Code"
              label="Location"
              onChange={handleChange('location')}
              defaultValue={values.location}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <br />
            <div id={'location'}></div>
            <br />
              <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onClick={this.getLocation}
                  startIcon={<MyLocationIcon />}
              >Use Current Location</Button>
              <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={this.continue}
              >Next</Button>
            </DialogContent>
          </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
