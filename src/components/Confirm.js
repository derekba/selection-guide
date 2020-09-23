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
    console.log(this.state);
  };

  startover = e => {
    e.preventDefault();
    this.props.firstStep();
  };


  render() {
    const {
      values: { location, length, width, occupancy, highCeilings, lotsOfSunlight, heavilyInsulated, dryAirUnit, internalCondensateRemoval, temperatureLimiting, dualFanMotors, plugType, directSupplyWarranty, geWarranty, amanaWarranty, friedrichWarranty, islandaireWarranty  }
    } = this.props;

    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };

    let lengthChip;
    if (length) {
      lengthChip = <Chip label={"Length: " + length + "\'"} onDelete={handleDelete} color="secondary" />;
    }

    let widthChip;
    if (width) {
      widthChip = <Chip label={"Width: " + width + "\'"} onDelete={handleDelete} color="secondary" />;
    }

    let occupancyChip;
    if (occupancy) {
      occupancyChip = <Chip label={"Occupancy: " + occupancy} onDelete={handleDelete} color="secondary" />;
    }

    let highCeilingsChip;
    if (highCeilings) {
      highCeilingsChip = <Chip label={"High Ceilings: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let lotsOfSunlightChip;
    if (lotsOfSunlight) {
      lotsOfSunlightChip = <Chip label={"Lots of sunlight: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let heavilyInsulatedChip;
    if (heavilyInsulated) {
      heavilyInsulatedChip = <Chip label={"Heavily insulated: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let dryAirUnitChip;
    if (dryAirUnit) {
      dryAirUnitChip = <Chip label={"High Ceilings: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let internalCondensateRemovalChip;
    if (internalCondensateRemoval) {
      internalCondensateRemovalChip = <Chip label={"High Ceilings: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let temperatureLimitingChip;
    if (temperatureLimiting) {
      temperatureLimitingChip = <Chip label={"Temperature Limiting: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let dualFanMotorsChip;
    if (dualFanMotors) {
      dualFanMotorsChip = <Chip label={"Dual Fan Motors: yes"} onDelete={handleDelete} color="secondary" />;
    }

    let plugTypeChip;
    if (plugType) {
      plugTypeChip = <Chip label={"Plug Type: " + plugType} onDelete={handleDelete} color="secondary" />;
    }

    let directSupplyChip;
    if (directSupplyWarranty) {
      directSupplyChip = <Chip label={"Direct Supply Warranty"} onDelete={handleDelete} color="secondary" />;
    }

    let geWarrantyChip;
    if (geWarranty) {
      geWarrantyChip = <Chip label={"GE Warranty"} onDelete={handleDelete} color="secondary" />;
    }

    let amanaWarrantyChip;
    if (amanaWarranty) {
      amanaWarrantyChip = <Chip label={"Amana Warranty"} onDelete={handleDelete} color="secondary" />;
    }

    let friedrichWarrantyChip;
    if (friedrichWarranty) {
      friedrichWarrantyChip = <Chip label={"Friedrich Warranty"} onDelete={handleDelete} color="secondary" />;
    }

    let islandaireWarrantyChip;
    if (islandaireWarranty) {
      islandaireWarrantyChip = <Chip label={"Islandaire Warranty"} onDelete={handleDelete} color="secondary" />;
    }


    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#0055a0',
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
            <DialogTitle align="center" id="form-dialog-title">Here are the best PTACs for you.</DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                We recommend PTACs with the following features.
              </DialogContentText>
              <div className={"confirmation-tags"}>
              {/*<Chip label={"Length: " + length + "\'"} onDelete={handleDelete} color="secondary" />*/}
              {/*<Chip label={"Width: " + width + "\'"} onDelete={handleDelete} color="secondary" />*/}
              {/*<Chip label={"Occupancy: " + occupancy} onDelete={handleDelete} color="secondary" />*/}
              {/*<Chip label={"High Ceilings: yes"} onDelete={handleDelete} color="secondary" />*/}
              {/*<Chip label={"Characteristics: " + roomCharacteristics} onDelete={handleDelete} color="secondary" />*/}
                {lengthChip}
                {widthChip}
                {occupancyChip}
                {highCeilingsChip}
                {lotsOfSunlightChip}
                {heavilyInsulatedChip}
                {dryAirUnitChip}
                {internalCondensateRemovalChip}
                {temperatureLimitingChip}
                {dualFanMotorsChip}
                {plugTypeChip}
                {directSupplyChip}
                {geWarrantyChip}
                {amanaWarrantyChip}
                {friedrichWarrantyChip}
                {islandaireWarrantyChip}

              </div>
              <br />
              <br />
              <div className={"product-image"}> <img src={productImage} /></div>

              <br />
            <br />
            <div className={"shop-all-info"}>
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
            </div>
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
