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

export class FormBrandDetails extends Component {

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
                    <DialogTitle align="center" id="form-dialog-title">Do you have a brand or warranty preference?</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Select all that apply.
                        </DialogContentText>

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={values.directSupplyWarranty} onChange={handleCheckboxChange('directSupplyWarranty')} name="directSupplyWarranty" color="primary"/>}
                                label="Direct Supply Warranty"
                                color="primary"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={values.geWarranty} onChange={handleCheckboxChange('geWarranty')} name="geWarranty" color="primary"/>}
                                label="GE Warranty"
                                color="primary"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={values.amanaWarranty} onChange={handleCheckboxChange('amanaWarranty')} name="amanaWarranty" color="primary"/>}
                                label="Amana Warranty"
                                color="primary"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={values.friedrichWarranty} onChange={handleCheckboxChange('friedrichWarranty')} name="friedrichWarranty" color="primary"/>}
                                label="Friedrich Warranty"
                                color="primary"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={values.islandaireWarranty} onChange={handleCheckboxChange('islandaireWarranty')} name="islandaireWarranty" color="primary"/>}
                                label="Islandaire Warranty"
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

export default FormBrandDetails;
