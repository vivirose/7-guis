import React from "react";
import { useState } from "react/cjs/react.development";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import "./CRUD.css";

const initialNamesState = [
  {
    id: 1,
    firstName: "Vivien",
    lastName: "Test",
  },
  { id: 2, firstName: "Carlos", lastName: "Test" },
];

const CRUD = () => {
  const [names, setNames] = useState(initialNamesState);
  const [namesFiltered, setNamesFiltered] = useState([]);
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [selected, setSelected] = useState();

  console.log("selected", selected)

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

  function getNameList() {
    const array = namesFiltered.length ? namesFiltered : names;
    return array.map((item) => (
      <li key={item.id} onClick={() => handleSelectName(item)}>
        {item.firstName} {item.lastName}
      </li>
    ));
  }

  function handleUpdateName(name) {
    const namesUpdated = names.map((item) => {
      if (item.id === name?.id) {
        return {
          id: name.id,
          firstName,
          lastName,
        };
      }
      return item;
    });
    setNames(namesUpdated);
    setSelected();
  }

  function handleSelectName(item) {
    setSelected(item);
  }

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query) {
      const searchResults = names.filter((item) => {
        console.log("query", query);
        return item.lastName.toLowerCase().startsWith(query);
      });
      setNamesFiltered(searchResults);
    } else {
      setNamesFiltered([]);
    }
  }
  return (
    <BoxLayout title="CRUD" width="400px">
      <form className="search_form">
        <label>Filter prefix: </label>
        <input type="search" onChange={(e) => handleSearch(e)}></input>
      </form>
      <div className="names">
        <div className="names_list">
          <ul>{getNameList()}</ul>
        </div>
        <div>
          <form>
            <label htmlFor="name">Name: </label>
            <br></br>
            <input
              value={selected?.firstName || " "}
              type="text"
              id="name"
              name="firstName"
              onChange={(e) => handleChangeName(e)}
            ></input>
            <br></br>
            <label htmlFor="lastName">Surname: </label>
            <br></br>
            <input
              value={selected?.lastName || " "}
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) => handleChangeName(e)}
            ></input>
          </form>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleCreateName}>Create</button>
        <button onClick={() => handleUpdateName(selected)}>Update</button>
        <button onClick={() => handleDeleteName(selected?.id)}>Delete</button>
      </div>
    </BoxLayout>
  );
};

export default CRUD;
