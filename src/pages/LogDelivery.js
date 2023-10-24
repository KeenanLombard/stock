import React from "react";
import { useState } from "react";

import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function LogDelivery() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [num, setNum] = useState("");
  const [product, setProduct] = useState(null);
  const [quintity, setQuintity] = useState(0);

  const [status, setStatus] = useState("");

  const handleNewItem = async () => {
    console.log(name, adress, product, quintity);
    let result;
    try {
      result = await addDoc(collection(db, "deliveries"), {
        name: name,
        adress: adress,
        product: product,
        number: num,
        quintity: quintity,
        created: Timestamp.now(),
      });
    } catch (err) {
      result = err;
    } finally {
      if (result) {
        alert("User has been added");
        setName("");
        setAdress("");
        setNum("");
        setQuintity(0);
      }
    }
  };

  return (
    <div>
      <header>
        <h1 class='text-center m-4 text-xl'>Log Delivery</h1>
      </header>
      <div class='flex flex-col m-4'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border m-1 p-2'
          placeholder='Name'
        />
        <input
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          className='border m-1 p-2'
          placeholder='Adress'
        />
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className='border m-1 p-2'
          type='tel'
          placeholder='Number'
        />
        <div class='flex'>
          <select
            onChange={(e) =>
              setProduct(e.target.options[e.target.selectedIndex].value)
            }
            class='border p-2 m-1 w-52'>
            <option value=''>Product</option>
            <option value='Wattle'>Wattle</option>
          </select>
          <input
            value={quintity}
            onChange={(e) => setQuintity(e.target.value)}
            class='p-2 m-1 border w-full'
            type='number'
          />
        </div>
        <hr class='m-4' />
        <button
          onClick={() => handleNewItem()}
          className='rounded m-1 p-2 bg-blue-500 font-semibold text-white'>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default LogDelivery;
