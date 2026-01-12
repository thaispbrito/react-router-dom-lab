import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  mailboxId: '',
  recipient: '',
  message: '',
};

const LetterForm = (props) => {
  const [letterFormData, setLetterFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addLetter({ ...letterFormData, mailboxId: Number(letterFormData.mailboxId) });
    setLetterFormData(initialState);
    navigate(`/mailboxes/${letterFormData.mailboxId}`);
  };

  const handleChange = ({ target }) => {
    setLetterFormData({ ...letterFormData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="mailboxId">Select a Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={letterFormData.mailboxId}
          onChange={handleChange}
          required
        >
          <option value="">--Choose a mailbox--</option>
          {props.mailboxes.map((mailbox) =>
            <option key={mailbox._id} value={mailbox._id}>{`Mailbox ${mailbox._id}`}</option>
          )}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={letterFormData.recipient}
          onChange={handleChange}
          placeholder="Recipient name"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={letterFormData.message}
          onChange={handleChange}
          placeholder="Write a message..."
          rows={5}
        />

        <button type="submit">Send Letter</button>

      </form>
    </main>
  );
};

export default LetterForm;


