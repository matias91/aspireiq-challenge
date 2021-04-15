import './RecipientsListItem.css';

export default function RecipientsListItem({ children, onClick }) {
  return (
    <span className="recipients-list-item" onClick={(event) => onClick(event.target.innerHTML)}>{children}</span>
  );
}
