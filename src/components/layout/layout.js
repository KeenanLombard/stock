import { Outlet, Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const handleNav = (s) => {
    setStatus(s);
    console.log(status);
    handleCardClick();
  };
  const handleCardClick = () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
  };
  const handleCloseClick = () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
  };

  return (
    <div className='App'>
      <nav>
        <div className='flex justify-between shadow p-2'>
          <div class='my-auto'>
            <h1 class='text-lg mx-5 flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='2em'
                viewBox='0 0 448 512'>
                <path d='M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z' />
              </svg>
              <p class='my-auto mx-2 font-bold'>Hout en Kak</p>
            </h1>
          </div>
          <svg
            onClick={() => handleNav(!status)}
            class='my-auto mx-5 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            height='2em'
            viewBox='0 0 448 512'>
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </div>
      </nav>
      <Outlet />
      <dialog id='dialog'>
        <div class='text-center text-lg'>
          <Link to='/' onClick={() => handleCloseClick()} class='m-5'>
            Home
          </Link>
          <Link
            to='/new-delivery'
            onClick={() => handleCloseClick()}
            class='m-5'>
            Log Delivery
          </Link>
          {/* <Link to='/new-stock' onClick={() => handleCloseClick()} class='m-5'>
            Log Stock
          </Link>
          <hr></hr>
          <Link to='/suppliers' onClick={() => handleCloseClick()} class='m-5'>
            Suppliers
          </Link>
          <Link to='/stock' onClick={() => handleCloseClick()} class='m-5'>
            Stock
          </Link>
          <Link to='/invoices' onClick={() => handleCloseClick()} class='m-5'>
            Invoices
          </Link> */}
        </div>
      </dialog>
    </div>
  );
}

export default App;
