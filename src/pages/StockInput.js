import React from "react";
import { useState } from "react";

function StockInput() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quintity, setQuintity] = useState("");

  return (
    <div>
      <header>
        <h1 class='text-center m-4 text-xl'>New Stock</h1>
      </header>
      <div class='flex flex-col m-4'>
        <input
          onChange={(e) => setName(e.target.value)}
          className='border m-1 p-2'
          placeholder='Name'
        />
        <input
          onChange={(e) => setDesc(e.target.value)}
          className='border m-1 p-2'
          placeholder='Description'
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className='border m-1 p-2'
          placeholder='Sell Price'
        />
        <input
          onChange={(e) => setQuintity(e.target.value)}
          className='border m-1 p-2'
          placeholder='Quintity'
        />
        <button
          onClick={() => {
            //create a db entry
            console.log(name, desc, price, quintity);
          }}
          className='rounded m-1 p-2 bg-blue-500 font-semibold text-white'>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default StockInput;
