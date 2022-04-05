import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert

      displayAlert(true, 'fail', 'Please add item to list');
    } else {
      displayAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const displayAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message });
  };

  const removeItem = (id) => {
    displayAlert(true, 'fail', `item removed`);
    setList(list.filter((item) => item.id !== id));
  };
  const clearItems = () => {
    displayAlert(true, 'fail', 'Grocery list emptied');
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className='section-center'>
      <form>
        {alert.show && (
          <Alert list={list} {...alert} removeAlert={displayAlert} />
        )}
        <h2 className='container-center'>E-Grocier</h2>
        <div className='div-center'>
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
        </div>
      </form>
      <article className='list-item'>
        <List items={list} removeItem={removeItem} />
      </article>
    </section>
  );
}

export default App;
