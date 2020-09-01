import React, { Component } from 'react';
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

  render() {

    const { values, handleChange, getLocation } = this.props;
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#007AE5',
        },
        secondary: {
          main: '#E0E4E7',
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
                  onClick={getLocation}
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
