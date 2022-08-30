import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//Context
import { ClientContextProvider } from './ClientContext';
//Components
import Navbar from './components/navbar/Navbar';
import ClientDetails from './pages/clientDetails/ClientDetails';
import ItemDetails from './pages/itemDetails/ItemDetails';

function App() {
  return (
    <ClientContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<ClientDetails />} />
          <Route path="items" element={<ItemDetails />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </ClientContextProvider>
  );
}

export default App;
