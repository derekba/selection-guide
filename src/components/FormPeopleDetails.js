import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Import Material UI input types
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

// Needed for PrettoSlider
import { withStyles } from '@material-ui/core/styles';
// Import Material UI Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class FormPeopleDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    valuetext = value => {
      return `${value}°C`;
    };


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

        const PrettoSlider = withStyles({
          root: {
            color: '#007bc3',
            height: 8,
          },
          thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
              boxShadow: 'inherit',
            },
          },
          active: {},
          valueLabel: {
            left: 'calc(-50% + 4px)',
          },
          track: {
            height: 8,
            borderRadius: 4,
          },
          rail: {
            height: 8,
            borderRadius: 4,
          },
        })(Slider);

        return (
            <MuiThemeProvider theme={theme}>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <DialogTitle align="center" id="form-dialog-title">How many people typically occupy this room?</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Occupancy can factor into BTU output needs.
                        </DialogContentText>
                        <br />
                        <PrettoSlider
                            // onChange={handleChange('occupancy')}
                            onChangeCommitted={(event, value) =>
                                handleChange("occupancy")({ target: { value } })
                            }
                            //this is producing Material-UI: A component is changing the default value state of an uncontrolled Slider after being initialized. To suppress this warning opt to use a controlled Slider.
                            defaultValue={values.occupancy}
                            getAriaValueText={this.valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks={marks}
                            min={1}
                            max={5}
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

export default FormPeopleDetails;
