import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert

      displayAlert(true, 'fail', 'Try adding a value');
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const displayAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message });
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const clearItems = () => {
    setList([]);
  };
  return (
    <section className='section-center'>
      <form>
        {alert.show && <Alert {...alert} removeAlert={displayAlert} />}
        <h2 className=''>E-Grocier</h2>
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
        {list.length > 0 && (
          <button className='clear-btn' onClick={clearItems}>
            Clear Items
          </button>
        )}
      </form>
      <article className='list-item'>
        <List items={list} removeItem={removeItem} />
      </article>
    </section>
  );
}

export default App;
