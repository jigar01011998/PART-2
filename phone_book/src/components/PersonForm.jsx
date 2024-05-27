
import React from "react";

const PersonForm = ({ addPerson, updatePerson, handleNumberChange, handlePersonChange, newName, newNumber }) => {
  return (
    <form className="form" onSubmit={addPerson}>
      <div>
        <input type="text" value={newName} onChange={handlePersonChange} placeholder="Name" />
        <input type="text" value={newNumber} onChange={handleNumberChange} placeholder="Number" />
      </div>
      <div>
        <button type="submit">Add</button>
        <button type="button" onClick={updatePerson}>Update</button>
      </div>
    </form>
  );
};

export default PersonForm;
