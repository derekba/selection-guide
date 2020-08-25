import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import productImage from "./../products.png";
import Chip from '@material-ui/core/Chip';

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

  startover = e => {
    e.preventDefault();
    this.props.firstStep();
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

    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };

    return (
      <MuiThemeProvider theme={theme}>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle align="center" id="form-dialog-title">Here are the best PTACs for you.</DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                We recommend PTACs with the following features.
              </DialogContentText>
              {/*<Chip label={location} onDelete={handleDelete} color="primary" />*/}
              <Chip label={"Length: " + length + " inches"} onDelete={handleDelete} color="secondary" />
              <Chip label={"Width: " + width + " inches"} onDelete={handleDelete} color="secondary" />
              <Chip label={"Occupancy: " + occupancy + " people"} onDelete={handleDelete} color="secondary" />
              <Chip label={"Characteristics: " + roomCharacteristics} onDelete={handleDelete} color="secondary" />

              <br />
              <br />
              <div className={"product-image"}> <img src={productImage} /></div>

              <br />
            <br />
            <a href={"#"}>Shop all products matching these features.</a>
              <br />
              <br />
              <p>Not seeing what you expect?</p>
              <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.startover}
              >Start over</Button>
              <br />
              <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              fullWidth
            >Back</Button>

            {/*<Button*/}
            {/*  color="primary"*/}
            {/*  variant="contained"*/}
            {/*  onClick={this.continue}*/}
            {/*  fullWidth*/}
            {/*>Confirm & Continue</Button>           */}
          </DialogContent>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
