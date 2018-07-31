import React from 'react';
import "./StoreCathegories.css";

import Select from 'react-select';

const options = [
  { value: 'Construction', label: 'Construction' },
  { value: 'Vetements', label: 'Vetements'},
  { value: 'Electronique', label: 'Electronique' },
  { value: 'Sports', label: 'Sports' },
  
];

class StoreCathegories extends React.Component {
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
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default StoreCathegories;