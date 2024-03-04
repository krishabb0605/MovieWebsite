import React from 'react';

function Card({ filteredData }) {
  if (!filteredData) {
    return null;
  }

  return (
      <>
        <div className='container'>
          {filteredData.map((items) => (
              <img key={items.id} src={items.image} alt={items.name} className='image' />
          ))}
        </div>
      </>
  );
}

export default Card;
