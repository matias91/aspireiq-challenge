// @Vendors
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// @Components
import RecipientsList from '../RecipientsList/RecipientsList';
import RecipientItem from '../RecipientItem/RecipientItem';

// @Styles
import './RecipientsInput.css';

export default function RecipientsInput() {
  const [showList, setShowList] = React.useState(false);
  const [recipients, setRecipients] = React.useState([]);
  const [text, setText] = React.useState('');

  const addRecipient = (recipient) => {
    setText('');
    const newRecipients = [...recipients];
    newRecipients.push(recipient);
    setRecipients(newRecipients);
  }

  const removeRecipient = (recipient) => {
    const index = recipients.findIndex(item => item === recipient);
    const newRecipients = [...recipients];
    newRecipients.splice(index, 1);
    setRecipients(newRecipients);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addRecipient(event.target.value);
    }
  }

  const placeholder = !recipients.length ? 'Enter recipients...' : '';

  return (
    <section className="recipients-input">
      <div className="recipients-input__container">
        {recipients.map((recipient, index) => <RecipientItem key={index} recipient={recipient} remove={removeRecipient} />)}
        <input
          className="recipients-input_input"
          onBlur={() => setShowList(false)}
          onChange={(event) => setText(event.target.value)}
          onFocus={() => setShowList(true)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          value={text}
        />
      </div>
      <TransitionGroup>
        {
          showList && (
            <CSSTransition classNames="fade" timeout={300}>
              <RecipientsList add={addRecipient} text={text} />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </section>
  );
}
