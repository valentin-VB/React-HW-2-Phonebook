import React, { Component } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = contactInfo => {
    const { name, number } = contactInfo;
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => {
      const isDuplicated = this.state.contacts.find(
        oldContact => oldContact.name === contact.name
      );

      if (isDuplicated) {
        alert(`${contact.name} is already in contacts`);
        return;
      }

      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  handleFilterInput = evt => {
    this.setState({ filter: evt.currentTarget.value });
    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
  };

  getVisiableContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    console.log('normalizedFilter', normalizedFilter);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handelDeletBthClick = evt => {
    const id = evt.currentTarget.id;
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: updatedContacts };
    });
  };

  render() {
    console.log(this.getVisiableContacts());
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.handleFormSubmit}></Form>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterInput}></Filter>
        <ContactsList
          onBtnClick={this.handelDeletBthClick}
          contacts={this.getVisiableContacts()}
          filter={filter}
        ></ContactsList>
      </div>
    );
  }
}
