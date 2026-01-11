import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  boxOwner: '',
  boxSize: '',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="">--Choose a size--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Add Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;
