import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Import Material UI input types
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// Needed for PrettoSlider
import { withStyles } from '@material-ui/core/styles';
// Import Material UI Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // valuetext = value => {
  //   return `${value}°C`;
  // };


  render() {
    const { values, handleChange } = this.props;
    // const { roomCharacteristics } = values.roomCharacteristics;
    const marks = [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5+',
      },
    ];

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

    // const PrettoSlider = withStyles({
    //   root: {
    //     color: '#007bc3',
    //     height: 8,
    //   },
    //   thumb: {
    //     height: 24,
    //     width: 24,
    //     backgroundColor: '#fff',
    //     border: '2px solid currentColor',
    //     marginTop: -8,
    //     marginLeft: -12,
    //     '&:focus, &:hover, &$active': {
    //       boxShadow: 'inherit',
    //     },
    //   },
    //   active: {},
    //   valueLabel: {
    //     left: 'calc(-50% + 4px)',
    //   },
    //   track: {
    //     height: 8,
    //     borderRadius: 4,
    //   },
    //   rail: {
    //     height: 8,
    //     borderRadius: 4,
    //   },
    // })(Slider);

    return (
      <MuiThemeProvider theme={theme}>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle align="center" id="form-dialog-title">How large is your room?</DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                BTU needs are primarily determined by room size.
              </DialogContentText>
            <TextField
              placeholder="Length in feet"
              label="Length in feet"
              onChange={handleChange('length')}
              defaultValue={values.length}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              placeholder="Width in feet"
              label="Width in feet"
              onChange={handleChange('width')}
              defaultValue={values.width}
              margin="normal"
              fullWidth
              variant="outlined"
            />
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

export default FormPersonalDetails;
