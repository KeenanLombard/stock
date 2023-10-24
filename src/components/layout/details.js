import React from "react";

function details({ name, items, adress, number }) {
  const listItems = items.map((item) => {
    return (
      <div class='flex justify-between'>
        <p>{item.product}</p>
        <p>{item.quintity}</p>
      </div>
    );
  });
  console.log(items);
  return (
    <div class='p-5'>
      <div>
        <p>{adress}</p>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <div>{listItems}</div>
    </div>
  );
}

export default details;
