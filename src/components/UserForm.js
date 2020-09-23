import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormPeopleDetails from './FormPeopleDetails';
import FormCharacteristicDetails from './FormCharacteristicDetails';
import FormFeatureDetails from './FormFeatureDetails';
import FormPlugDetails from './FormPlugDetails';
import FormBrandDetails from './FormBrandDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

  state = {
    step: 1,
    location: '',
    length: '',
    width: '',
    occupancy: 1,
    highCeilings: false,
    lotsOfSunlight: false,
    heavilyInsulated: false,
    dryAirUnit: false,
    internalCondensateRemoval: false,
    temperatureLimiting: false,
    dualFanMotors: false,
    plugType: '',
    directSupplyWarranty: false,
    geWarranty: false,
    amanaWarranty: false,
    friedrichWarranty: false,
    islandaireWarranty: false,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
     console.log(this.state);
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  firstStep = () => {
    this.setState({
      step: 1,
      location: '',
      length: '',
      width: '',
      occupancy: 1,
      highCeilings: false,
      lotsOfSunlight: false,
      heavilyInsulated: false,
      dryAirUnit: false,
      internalCondensateRemoval: false,
      temperatureLimiting: false,
      dualFanMotors: false,
      plugType: '',
      directSupplyWarranty: false,
      geWarranty: false,
      amanaWarranty: false,
      friedrichWarranty: false,
      islandaireWarranty: false,
    });
  };

  // Handle fields change
  handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    // console.log(this.state);
  };

  handleCheckboxChange = input => e => {
    this.setState({ [input]: e.target.checked });
    // console.log(this.state);
  };

  getLocation = e => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
      let div = document.getElementById('location');
      div.innerHTML = "Latitude is : " + position.coords.latitude + "<br>" + "Longitude is : " + position.coords.longitude;
    });

  };

  render() {
    const { step } = this.state;
    const { location, length, width, occupancy, highCeilings, lotsOfSunlight, heavilyInsulated, dryAirUnit, internalCondensateRemoval, temperatureLimiting, dualFanMotors, plugType, directSupplyWarranty, geWarranty, amanaWarranty, friedrichWarranty, islandaireWarranty } = this.state;
    const values = { location, length, width, occupancy, highCeilings, lotsOfSunlight, heavilyInsulated, dryAirUnit, internalCondensateRemoval, temperatureLimiting, dualFanMotors, plugType, directSupplyWarranty, geWarranty, amanaWarranty, friedrichWarranty, islandaireWarranty };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
              nextStep={this.nextStep}
              firstStep={this.firstStep}
              handleChange={this.handleChange}
              getLocation={this.getLocation}
              values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstStep={this.firstStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormPeopleDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstStep={this.firstStep}
              handleChange={this.handleChange}
              values={values}
          />
        );
        case 4:
        return (
          <FormCharacteristicDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstStep={this.firstStep}
              handleChange={this.handleChange}
              handleCheckboxChange={this.handleCheckboxChange}
              values={values}
          />
        );
        case 5:
        return (
          <FormPlugDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstStep={this.firstStep}
              handleChange={this.handleChange}
              values={values}
          />
        );
        case 6:
        return (
          <FormFeatureDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstStep={this.firstStep}
              handleChange={this.handleChange}
              handleCheckboxChange={this.handleCheckboxChange}
              values={values}
          />
        );
        case 7:
        return (
          <FormBrandDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstStep={this.firstStep}
              handleChange={this.handleChange}
              handleCheckboxChange={this.handleCheckboxChange}
              values={values}
          />
        );
      case 8:
        return (
            <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                firstStep={this.firstStep}
                values={values}
            />
        );
      case 9:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
