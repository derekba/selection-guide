import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Import Material UI input types
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// Import Material UI Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class FormCharacteristicDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        const { roomCharacteristics } = values.roomCharacteristics;

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
                    <DialogTitle align="center" id="form-dialog-title">Do any of these room characteristics apply?</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Select all that apply.
                        </DialogContentText>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="roomCharacteristics" name="roomCharacteristics" defaultValue={values.roomCharacteristics} value={roomCharacteristics} onChange={handleChange('roomCharacteristics')} >
                                <FormControlLabel value="High Ceilings" control={<Radio />} label="High Ceilings" />
                                <FormControlLabel value="Lots of sunlight" control={<Radio />} label="Lots of sunlight" />
                                <FormControlLabel value="Heavily insulated" control={<Radio />} label="Heavily insulated" />
                            </RadioGroup>
                        </FormControl>
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

export default FormCharacteristicDetails;
