import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get('/api/values')
      .then(response => {
        console.log('response', response.data)
        setLists(response.data)
      })
  }, [])

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('/api/value', { value: value })
      .then(response => {
        if (response.data.success) {
          console.log('response', response)
          setLists([...lists, response.data])
          setValue('');
        } else {
          alert('Request Failed')
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="input todo list"
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">Submit</button>
          </form>

          {lists && lists.map((list, index) => (
            <li key={index}>list.value</li>
          ))}

        </div>
      </header>
    </div>
  );
}

export default App;
