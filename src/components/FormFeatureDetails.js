import React, { Component } from 'react';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class FormFeatureDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { values, handleCheckboxChange } = this.props;
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
            <DialogTitle align="center" id="form-dialog-title">Choose options and features that are important for you.</DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                Select all that apply.
              </DialogContentText>

              <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={values.corrosionProtection} onChange={handleCheckboxChange('corrosionProtection')} name="corrosionProtection" color="primary"/>}
                    label="Corrosion Protection"
                    color="primary"
                />
                <FormControlLabel
                    control={<Checkbox checked={values.dryAirUnit} onChange={handleCheckboxChange('dryAirUnit')} name="dryAirUnit" color="primary"/>}
                    label="Dry-Air Unit"
                    color="primary"
                />
                <FormControlLabel
                    control={<Checkbox checked={values.internalCondensateRemoval} onChange={handleCheckboxChange('internalCondensateRemoval')} name="internalCondensateRemoval" color="primary"/>}
                    label="Internal Condensate Removal"
                    color="primary"
                />
                <FormControlLabel
                    control={<Checkbox checked={values.temperatureLimiting} onChange={handleCheckboxChange('temperatureLimiting')} name="temperatureLimiting" color="primary"/>}
                    label="Temperature Limiting"
                    color="primary"
                />
                <FormControlLabel
                    control={<Checkbox checked={values.dualFanMotors} onChange={handleCheckboxChange('dualFanMotors')} name="dualFanMotors" color="primary"/>}
                    label="Dual Fan Motors"
                    color="primary"
                />
              </FormGroup>
              <br />
              <br />
              <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onClick={this.back}
              >Back</Button>

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

export default FormFeatureDetails;
