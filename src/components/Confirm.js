import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { location, length, width, occupancy, roomCharacteristics  }
    } = this.props;

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
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Location" secondary={location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Length in inches" secondary={length} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Width in inches" secondary={width} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupancy" secondary={occupancy} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Room Characteristics" secondary={roomCharacteristics} />
              </ListItem>
            </List>
            <br />
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
