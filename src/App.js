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
    <section className='container-center'>
      <form>
        <label className='section-item' htmlFor='item'>
          Grocery item:
        </label>
        <input
          className='input'
          type='text'
          placeholder='e.g. avocado'
          id='item'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className='btn' type='submit' onClick={handleSubmit}>
          Submit!
        </button>
      </form>
      <article className='list-item'>
        <List items={list} removeItem={removeItem} />
      </article>
    </section>
  );
}

export default App;
