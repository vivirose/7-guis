import React from "react";
import { useState } from "react/cjs/react.development";
const initialNamesState = [
  {
    id: 1,
    firstName: "vivien",
    lastName: "test",
  },
  { id: 2, firstName: "carlos", lastName: "test" },
];

const CRUD = () => {
  const [names, setNames] = useState(initialNamesState);
  console.log("names", names);
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [selected, setSelected] = useState();
  console.log("selected", selected);

  function handleCreateName(e) {
    const newName = {
      id: new Date().getTime(),
      firstName: firstName,
      lastName: lastName,
    };
    const names2 = [...names, newName];
    setNames(names2);
  }

  function handleChangeName(e) {
    if (e.target.name === "firstName") {
      return setFirstName(e.target.value);
    }
    return setLastName(e.target.value);
  }
  function handleDeleteName(id) {
    const namesUpdated = names.filter((item) => {
      return item.id !== id;
    });
    setNames(namesUpdated);
  }

  function handleUpdateName(name) {
    const namesUpdated = names.map((item) => {
      if (item.id === name.id) {
        return name;
      }
      return item;
    });
    setNames(namesUpdated);
  }

  function handleSelectName(item) {
    setSelected(item);
  }

  function handleSearch(query) {
    if (query) { 
      const searchResults = names.filter((item) => {
        console.log("query", query);
        return item.lastName.startsWith(query);
      });
      setNames(searchResults);
    } return names
  }
  return (
    <>
      <h2>CRUD</h2>
      <form>
        <label>Filter prefix: </label>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
      </form>
      <ul>
        {names.map((item) => (
          <li key={item.id} onClick={() => handleSelectName(item)}>
            {item.firstName}, {item.lastName}
          </li>
        ))}
      </ul>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          value={selected?.firstName ? selected.firstName : firstName}
          type="text"
          id="name"
          name="firstName"
          onChange={(e) => handleChangeName(e)}
        ></input>
        <label htmlFor="surname">Surname: </label>
        <input
          value={selected?.lastName ? selected.lastName : lastName}
          type="text"
          id="surname"
          name="lastName"
          onChange={(e) => handleChangeName(e)}
        ></input>
      </form>
      <button onClick={handleCreateName}>Create</button>
      <button onClick={() => handleUpdateName(selected)}>Update</button>
      <button onClick={() => handleDeleteName(selected.id)}>Delete</button>
    </>
  );
};

export default CRUD;
