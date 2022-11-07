import ListItem from 'components/ListItem';

function ContactsList({ contacts, filter, onBtnClick }) {
  return (
    contacts.length > 0 && (
      <ul>
        {contacts.map(contact => {
          return (
            <ListItem
              key={contact.id}
              contact={contact}
              onBtnClick={onBtnClick}
            ></ListItem>
          );
        })}
      </ul>
    )
  );
}

export default ContactsList;
