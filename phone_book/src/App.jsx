import { useEffect, useState } from "react";
import "./App.css";
  import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    personService.getAll()
      .then((response) => {
        if (Array.isArray(response)) {
          setPersons(response);
        } else {
          console.error("Unexpected response format:", response);
          setErrorMsg("Error fetching data. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setErrorMsg("Error fetching data. Please try again later.");
      });
  };

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personService.create(newPerson)
      .then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
        setSuccessMsg(`Added ${newPerson.name}!`);
        setTimeout(() => setSuccessMsg(null), 5000);
      })
      .catch((error) => {
        console.error("Error adding person:", error);
        setErrorMsg("Error adding person. Please try again later.");
      });

    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowAll(e.target.value === "");
  };

  const handleDelete = (id) => {
    const result = window.confirm("Do you want to delete?");
    if (result) {
      personService.deleteData(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setSuccessMsg("Person Deleted Successfully");
          setTimeout(() => setSuccessMsg(null), 5000);
        })
        .catch((error) => {
          console.error("Error Deleting Person:", error);
          setErrorMsg("Error Deleting Person. Please try again later.");
        });
    }
  };


  const handleUpdate = (person) => {
    setNewName(person.name);
    setNewNumber(person.number);
    setUpdateId(person.id);
  };

  const updatePerson = () => {
    const updatedPerson = {
      name: newName,
      number: newNumber,
    };

    personService.update(updateId, updatedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map((person) => (person.id === updateId ? returnedPerson : person)));
        setSuccessMsg(`Updated ${updatedPerson.name}!`);
        setTimeout(() => setSuccessMsg(null), 5000);
        setNewName("");
        setNewNumber("");
        setUpdateId(null);
      })
      .catch((error) => {
        console.error("Error Updating person:", error);
        setErrorMsg("Error Updating person. Please try again later.");
      });
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Notification successMsg={successMsg} errorMsg={errorMsg} />
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearch={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        updatePerson={updatePerson}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
};

export default App;
