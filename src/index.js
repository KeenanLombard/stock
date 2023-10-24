import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import LogDelivery from "./pages/LogDelivery";
import Home from "./pages/Home";
import Layout from "./components/layout/layout";
import LogStock from "./pages/LogStock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='new-delivery' element={<LogDelivery />} />
        <Route path='new-stock' element={<LogStock />} />
        <Route path='new-supplier' element={<LogDelivery />} />
        <Route path='stock' element={<LogDelivery />} />
        <Route path='suppliers' element={<LogDelivery />} />
        <Route path='invoices' element={<LogDelivery />} />
      </Route>
    </Routes>

    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </BrowserRouter>
);
