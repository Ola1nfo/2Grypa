import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import AddContact from './pages/AddContact/AddContact';
import EditContact from './pages/EditContact/EditContact';
import ContactList from './pages/ContactList/ContactList';
import Header from './components/Header/Header';
import Example from './components/Example/Example';
import { useState } from 'react';

function App() {

  const [stor, setStor] = useState (
      [
        {
          id: '79797cf2-063e-4d66-8aef-569d889cb9cb',
          firstName: 'Ola',
          lastName: 'Romanovska',
          phone: '0475827475',
          email: 'romanovska@gmail.com',
          avatar: 8,
          gender: 'women',
          status: 'family',
          favorite: true
        }
    ]
  )

  const handleNewContact = (newContact) => {
    setStor(prevStor => [...prevStor, newContact])
  }

  const deleteContact = (id) => {
    setStor(prevStor => prevStor.filter(contact => contact.id !== id))
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList stor={stor} deleteContact={deleteContact}/>} />
          <Route path="/add-contact" element={<AddContact addNewContact={handleNewContact} />} />
          <Route path="/edit-contact" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
