import React from "react";
import { useState } from "react";
import Details from "../components/layout/details";

function Home() {
  let data = [
    {
      id: 1,
      name: "Keenan",
      adress: "54 Stockenstrom Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
    {
      id: 2,
      name: "Pieter",
      adress: "4 Langvlei Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
    {
      id: 2,
      name: "Pieter",
      adress: "4 Langvlei Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
    {
      id: 2,
      name: "Pieter",
      adress: "4 Langvlei Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
    {
      id: 2,
      name: "Pieter",
      adress: "4 Langvlei Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
    {
      id: 2,
      name: "Pieter",
      adress: "4 Langvlei Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
    {
      id: 2,
      name: "Pieter",
      adress: "4 Langvlei Denneoord",
      number: "0715868386",
      items: [
        { id: "132", product: "Wattle small", quintity: 50 },
        { id: "152", product: "Doring small", quintity: 10 },
      ],
    },
  ];

  const [current, setCurrent] = useState("");
  //   const [status, setStatus] = useState("Start");

  const handleCardClick = (payload) => {
    setCurrent(payload);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
  };
  const handleCardCloseClick = () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
  };
  //   const handleButtonClick = () => {
  //     if (status === "Start") {
  //       console.log("start");
  //       setStatus("Busy");
  //     }
  //     if (status === "Busy") {
  //       console.log("Done");
  //       setStatus("Done");
  //     }
  //   };

  const deliveryList = data.map((element) => {
    return (
      <div class='shadow rounded flex justify-between p-2 m-2'>
        <div onClick={() => handleCardClick(element)}>
          <p class='font-semibold'>{element.adress}</p>
          <p>{element.name}</p>
          <p>{element.number}</p>
        </div>
        {/* <div class='my-auto'>
          <button
            class='bg-blue-500 px-3 py-1 rounded text-white'
            onClick={() => handleButtonClick()}>
            {status}
          </button>
        </div> */}
      </div>
    );
  });
  return (
    <div>
      <dialog id='dialog'>
        <Details
          name={current.name}
          items={current.items}
          adress={current.adress}
          number={current.number}
        />
        <button
          class='w-full p-1 bg-blue-500 rounded text-white'
          onClick={() => handleCardCloseClick()}>
          Close
        </button>
      </dialog>
      {deliveryList}

      {/* <footer class='border mt-10'>
        <h1 class='text-center'>Quick Actions</h1>
        <div class='flex justify-around'>
          <button class='bg-blue-500 text-white rounded m-1 p-1 w-32'>
            New Delivery
          </button>
          <button class='bg-blue-500 text-white rounded m-1 p-1 w-32'>
            Invoices
          </button>
          <button class='bg-blue-500 text-white rounded m-1 p-1 w-32'>
            New Stock
          </button>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;
