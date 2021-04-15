import './RecipientsListItem.css';

export default function RecipientsListItem({ children, onClick }) {
  return (
    <li className="recipients-list-item" onClick={(event) => onClick(event.target.innerHTML)}>{children}</li>
  );
}
