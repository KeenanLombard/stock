import React from "react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "deliveries"), orderBy("created", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setDeliveries(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      <header>
        <h1 class='text-center m-4 text-xl'>Deliveries</h1>
      </header>
      {deliveries.map((element) => (
        <div class='shadow m-1 p-1'>
          <p class='font-bold'>{element.data.adress}</p>
          <p class='text-sm text-neutral-500'>{element.data.name}</p>
          <p class='text-sm text-neutral-500'>{element.data.number}</p>
          <p class='text-sm text-neutral-500'>
            {element.data.product} - {element.data.quintity}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
