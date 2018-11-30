import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Select, { components } from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

// Ganti icons dropdown
const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon style={{color:'#fff'}} icon={props.selectProps.menuIsOpen ? faAngleUp  : faAngleDown}/>
    </components.DropdownIndicator>
  );
};


const customStyles = {
  control: (provided) => ({
    ...provided, // Style bawaan react-select
    border: '1px solid blue',
  }),
  dropdownIndicator: (provided) => ({
    ...provided, // Style bawaan react-select
    background:'blue',
    padding: '10px 10px',
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

class App extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="wrapper" style={{ padding: '0 10px'}}>
        <Select
          components={{ DropdownIndicator }}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          styles={customStyles}
        />
      </div>
    );
  }
}

export default App;
