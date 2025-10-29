import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import AddContact from './pages/AddContact/AddContact';
import EditContact from './pages/EditContact/EditContact';
import ContactList from './pages/ContactList/ContactList';
import Header from './components/Header/Header';
import Example from './components/Example/Example';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
