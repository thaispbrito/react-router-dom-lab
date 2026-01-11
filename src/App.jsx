// src/App.jsx

import { useState } from 'react';
import { Route, Routes } from 'react-router'

import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

// const initialState = [
//   { _id: 1, boxOwner: 'Lilica', boxSize: 'Small' },
//   { _id: 2, boxOwner: 'Maria', boxSize: 'Large' },
//   { _id: 3, boxOwner: 'Leo', boxSize: 'Small' },
//   { _id: 4, boxOwner: 'Jane', boxSize: 'Medium' },
//   { _id: 5, boxOwner: 'Lucas', boxSize: 'Medium' },
//   { _id: 6, boxOwner: 'Joe', boxSize: 'Large' },
//   { _id: 7, boxOwner: 'Francis', boxSize: 'Small' },
// ];


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Welcome to the Post Office!</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;
