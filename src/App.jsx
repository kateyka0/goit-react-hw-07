
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps'; // Add this line
import { selectContacts, selectIsError, selectIsLoading } from './redux/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts()); // Now this should work
  }, [dispatch]);

  return (
    <div>
      {isLoading && <span className="css.loading"></span>}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isError && <p>Sorry! Try again</p>}
    </div>
  );
};

export default App;
