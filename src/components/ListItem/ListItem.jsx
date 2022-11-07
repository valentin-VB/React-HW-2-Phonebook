import { Btn } from 'components/Reusable Components/Button';
import { ListEl } from 'components/ListItem/ListItem.styled';

const ListItem = ({ contact, onBtnClick }) => {
  return (
    <ListEl>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <Btn type="button" id={contact.id} onClick={evt => onBtnClick(evt)}>
        Delete
      </Btn>
    </ListEl>
  );
};

export default ListItem;
