// @Components
import RecipientsListItem from '../RecipientsListItem/RecipientsListItem';

// @Mock Data
import { emailsList } from '../../mock/emailsList';

// @Styles
import './RecipientsList.css';

export default function RecipientsList({ add, text }) {
  const list = emailsList.filter(email => email.includes(text));
  return (
    <div className="recipients-list">
      {list.map((email, index) => <RecipientsListItem key={index} onClick={add}>{email}</RecipientsListItem>)}
    </div>
  );
}
