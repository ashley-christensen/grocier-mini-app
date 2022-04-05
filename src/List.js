import React from 'react';

const List = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <section key={id}>
            <div>{title}</div>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </section>
        );
      })}
    </div>
  );
};

export default List;
