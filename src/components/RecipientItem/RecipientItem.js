// @Vendors
import React from 'react';

// @Styles
import './RecipientItem.css';

// CONSTANTS
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function RecipientItem({ recipient, remove }) {
  const [showRemove, setShowRemove] = React.useState(false);
  const isValid = emailRegExp.test(recipient);
  let classess = 'recipient-item';

  !isValid && (classess = `${classess} recipient-item--error`);

  return (
    <div
      className={classess}
      onClick={() => showRemove && remove(recipient)}
      onMouseEnter={() => setShowRemove(true)}
      onMouseLeave={() => setShowRemove(false)}
    >
      <span className="recipient-item-text">{recipient}</span>
      {isValid && <span className="recipient-item-delete" style={{ opacity: showRemove ? 1 : 0 }}>X</span>}
    </div>
  );
}
