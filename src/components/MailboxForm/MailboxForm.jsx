import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  boxOwner: '',
  boxSize: '',
};

const MailboxForm = (props) => {
  const [boxFormData, setBoxFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(boxFormData);
    setBoxFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setBoxFormData({ ...boxFormData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={boxFormData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={boxFormData.boxSize}
          onChange={handleChange}
        >
          <option value="">--Choose a size--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Add Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;
