import React from 'react';

const List = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <section className='list-item' key={id}>
            <div>{title}</div>
            <button className='btn btn-remove' onClick={() => removeItem(id)}>
              Remove Item
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default List;
