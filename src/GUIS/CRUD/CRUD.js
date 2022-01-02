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
  const [selectedId, setSelectedId] = useState();



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
    clearForm();
  }

  function getNameList() {
    const array = namesFiltered.length ? namesFiltered : names;
    return array.map((item) => (
      <li key={item.id} onClick={() => handleSelectName(item)} style={{backgroundColor: (selectedId === item.id) && "var(--pink)"}}>
        {item.firstName} {item.lastName}
      </li>
    ));
  }

  function handleUpdateName(id) {
    const namesUpdated = names.map((item) => {
      if (item.id === id) {
        return {
          id,
          firstName,
          lastName,
        };
      }
      return item;
    });
    setNames(namesUpdated);
    clearForm()
    
  }

  function handleSelectName(name) {
    setSelectedId(name.id);
    setFirstName(name.firstName);
    setLastName(name.lastName);
  }

  function clearForm(){
    setFirstName('');
    setLastName('');
    setSelectedId('');
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
              value={firstName}
              type="text"
              id="name"
              name="firstName"
              onChange={(e) => handleChangeName(e)}
            ></input>
            <br></br>
            <label htmlFor="lastName">Surname: </label>
            <br></br>
            <input
              value={lastName}
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) => handleChangeName(e)}
            ></input>
          </form>
        </div>
      </div>
      <div className="buttons">
        <button disabled={Boolean(selectedId)} onClick={handleCreateName}>Create</button>
        <button onClick={() => handleUpdateName(selectedId)}>Update</button>
        <button onClick={() => handleDeleteName(selectedId)}>Delete</button>
      </div>
    </BoxLayout>
  );
}

export default CRUD