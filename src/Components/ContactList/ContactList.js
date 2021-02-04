import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../Redux/operations';
import { filteredContacts } from '../../Redux/selectors';

const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{name}:</span>
      <span className={styles.span}>{number}</span>
      <button className={styles.button} onClick={() => onRemove(id)}>
        X
      </button>
    </li>
  );
};

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  if (contacts.length === 0) return null;
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} onRemove={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
