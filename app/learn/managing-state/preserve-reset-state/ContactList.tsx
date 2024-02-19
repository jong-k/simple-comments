import { useState } from "react";

const CONTACTS = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

type ContactItem = (typeof CONTACTS)[number];

export default function ContactList() {
  const [reverse, setReverse] = useState(false);
  const displayedContacts = [...CONTACTS];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) => (
          <li key={contact.email}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Contact({ contact }: { contact: ContactItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
}
