import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';
import ClientDetails from './pages/clientDetails/ClientDetails';
import ItemDetails from './pages/itemDetails/ItemDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<ClientDetails />} />
          <Route path="items" element={<ItemDetails />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <ClientDetails />
    // </div>
  );
}

export default App;
