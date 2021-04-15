// @Components
import RecipientsListItem from '../RecipientsListItem/RecipientsListItem';

// @Mock Data
import { emailsList } from '../../mock/emailsList';

// @Styles
import './RecipientsList.css';

export default function RecipientsList({ add, recipients, text }) {
  let list = emailsList.filter(email => email.includes(text));

  recipients.forEach(recipient => {
    const index = list.findIndex(item => item === recipient);
    list.splice(index, 1);
  });

  return (
    <div className="recipients-list">
      {list.map((email, index) => <RecipientsListItem key={index} onClick={add}>{email}</RecipientsListItem>)}
    </div>
  );
}
