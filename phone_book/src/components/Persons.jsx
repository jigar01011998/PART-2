
import React from "react";

const Persons = ({ personsToShow, handleDelete, handleUpdate }) => {
  return (
    <div className="persons">
      {personsToShow.map((person) => (
        <div key={person.id} className="person">
          <div className="person-info">
            <span>{person.name} - {person.number}</span>
            <div className="person-buttons">
              <button onClick={() => handleDelete(person.id)}>Delete</button>
              <button onClick={() => handleUpdate(person)}>Update</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Persons;
