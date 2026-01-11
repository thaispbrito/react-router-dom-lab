// src/components/MailboxDetails/MailboxDetails.jsx

import { useParams } from 'react-router';

const MailboxDetails = (props) => {

  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      <h1>Mailbox {mailboxId}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;