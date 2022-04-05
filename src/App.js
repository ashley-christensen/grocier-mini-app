import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItem]);
    setName('');
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <div>
      <form>
        <label htmlFor='item'>Grocery items:</label>
        <input
          type='text'
          placeholder='i.g. avocado'
          id='item'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type='submit' onClick={handleSubmit}>
          Submit!
        </button>
      </form>
      <List items={list} removeItem={removeItem} />
    </div>
  );
}

export default App;
