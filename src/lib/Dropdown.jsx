import React from 'react';

const Dropdown = (props) => {
  return (
    <div className='dropdown-select'>
      <label htmlFor={props.name}>{props.label}</label>
      <select
        type={props.type}
        id={props.name}
        name={props.name}
        required={props.isRequired}
        value={props.state}
        onChange={props.handleChange}
      >
        <option value="">{props.title}</option>
        {props.options.map((option, index) => (
          <option key={`${option}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown;

