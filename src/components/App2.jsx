import React from "react";
import Card2 from "./Card2";
import contacts from "../data/contacts";

function App2() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Card2
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
      ))}
    </div>
  );
}

export default App2;