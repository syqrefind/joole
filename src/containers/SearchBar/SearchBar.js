import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './SearchBar.css';

const departmentOptions = ['Mechanical', 'Chemical', 'Biomedical'];
const mechanicalOptions= ['HVAC Fans', 'Compressor', 'Boiler'];

class SearchBar extends Component {
    state = {
        // selectedDepartmentOption: { value: 'Mechanical', label: 'Mechanical' },
        // selectedMechanicalOption: { value: null, label: null},
        selectedDepartmentOption: 'Mechanical',
        selectedMechanicalOption: null
    }

    handleDepartmentChange = (event) => {
        this.setState({ selectedDepartmentOption: event.target.value});
        console.log(`Option selected:`, event.target.value);
    }

    handleMechanicalChange = (event) => {
        this.setState({ selectedMechanicalOption: event.target.value});
        console.log(`Option selected:`, event.target.value);
    }

    handleClickSearch = () => {
        console.log('current selected mech opt is '+ this.state.selectedMechanicalOption.value);
    }

    render() {
        const selectedDepartmentOption = this.state.selectedDepartmentOption;
        const selectedMechanicalOption = this.state.selectedMechanicalOption;

        const dptOpts = (
            <datalist id="department-options">
                {departmentOptions.map(value =>
                    <option value={value} key={value} />   
                )}
            </datalist>    
        );

        const mechOpts = (
            <datalist id="mechanical-options">
                {mechanicalOptions.map(value =>
                    <option value={value} key={value} />   
                )}
            </datalist>    
        );

        return (
            <>
            {/* <div className={styles.container}>  */}
                <input className={[styles.departmentInput, styles.showIndicator].join(' ')} list="department-options" id="department-choice" name="department-choice" value='Mechanical' onChange={this.handleDepartmentChange} />
                {dptOpts}
                <input className={[styles.mechanicalInput, styles.showIndicator].join(' ')} list="mechanical-options" id="mechanical-choice" name="mechanical-choice" placeholder='search...' onChange={this.handleMechanicalChange} />
                {mechOpts}
                <NavLink className={styles.nonDecor} to={`/product-listing/${selectedDepartmentOption}.${selectedMechanicalOption}`}>
                    <FontAwesomeIcon icon="search" />
                </NavLink>
            {/* </div> */}
            </>
        );
    }
}

export default SearchBar;
