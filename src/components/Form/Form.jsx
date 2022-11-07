import React, { Component } from 'react';
import { Btn } from 'components/Reusable Components/Button';
import { nanoid } from 'nanoid';
import { Label } from 'components/Form/Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: ' ',
  };

  handleInputEvent = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <input
            onChange={this.handleInputEvent}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone:
          <input
            onChange={this.handleInputEvent}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add Contact</Btn>
      </form>
    );
  }
}

export default Form;
