import React, { Component, ChangeEvent, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './StyleSheetForMR.css'; // Import the CSS file

interface Field {
  name: string;
  label: string;
  type: string;
  options?: { value: string; label: string }[];
}

interface Props {
  fields: Field[];
}

interface State {
  [key: string]: string | Date | null;
}

class GenericForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleChange = (name: string, value: string | Date) => {
    this.setState({
      [name]: value
    });
  };

  handleRadioChange = (name: string, value: string) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the form data
    console.log('Form data:', this.state);
  };

  render() {
    const { fields } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="generic-form-container">
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}:</label>
            {field.type === 'radio' ? (
              field.options &&
              field.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`${field.name}-${index}`}
                    name={field.name}
                    value={option.value}
                    checked={this.state[field.name] === option.value}
                    onChange={() => this.handleRadioChange(field.name, option.value)}
                  />
                  <label htmlFor={`${field.name}-${index}`}>{option.label}</label>
                </div>
              ))
            ) : field.type === 'date' ? (
              <DatePicker
                selected={this.state[field.name] as Date | undefined}
                onChange={(date: Date) => this.handleChange(field.name, date)}
                dateFormat="yyyy-MM-dd"
                popperClassName="custom-popper"
              />
            ) : field.type === 'timeslot' || field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={this.state[field.name] as string | undefined}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  this.handleChange(field.name, e.target.value)
                }
              >
                <option value="">Select {field.label}</option>
                {field.options &&
                  field.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={this.state[field.name] as string | undefined}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  this.handleChange(field.name, e.target.value)
                }
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default GenericForm;
