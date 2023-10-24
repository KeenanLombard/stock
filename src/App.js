import "./App.css";
//import DeliveryDetails from "./pages/DeliveryDetails";
import Home from "./pages/Home";
import Navbar from "./components/layout/navbar";
// import Invoices from "./pages/Invoices";
import LogDelivery from "./pages/LogDelivery";
// import Login from "./pages/Login";
// import LogStock from "./pages/LogStock";
//import StockInput from "./pages/StockInput";
// import StockList from "./pages/StockList";
//import SupplierInput from "./pages/SupplierInput";
// import SupplierList from "./pages/SupplierList";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LogDelivery />
    </div>
  );
}

export default App;
