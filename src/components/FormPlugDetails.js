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

export class FormPlugDetails extends Component {
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
        const { plugType } = values.plugType;

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
                    <DialogTitle align="center" id="form-dialog-title">Select the right plug-style, voltage and amperage combination.</DialogTitle>
                    <DialogContent>
                        {/*<DialogContentText align="center">*/}
                        {/*    Select all that apply.*/}
                        {/*</DialogContentText>*/}
                        <FormControl component="fieldset" color="primary">
                            <RadioGroup color="primary" aria-label="plugType" name="plugType" defaultValue={values.plugType} value={plugType} onChange={handleChange('plugType')} >
                                <FormControlLabel color="primary" value="230/208V 15 amp tandem" control={<Radio />} label="230/208V 15 amp tandem" />
                                <FormControlLabel value="230/208V 20 amp perpendicular" control={<Radio />} label="230/208V 20 amp perpendicular" />
                                <FormControlLabel value="230/208V 30 amp large tandem" control={<Radio />} label="230/208V 30 amp large tandem" />
                                <FormControlLabel value="265/277V 20 amp" control={<Radio />} label="265/277V 20 amp" />
                                <FormControlLabel value="265/277V 30 amp" control={<Radio />} label="265/277V 30 amp" />
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

export default FormPlugDetails;
