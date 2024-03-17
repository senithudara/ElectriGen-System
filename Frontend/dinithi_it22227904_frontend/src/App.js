import{BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import OrderPlace from './pages/OrderPlacement.js'
import Navbar from './components/Navbar.js'
import OrderHistory from './pages/OrderHistory.js';
import SearchBar from './components/Search.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/OrderForm" element = {<OrderPlace />} />
            <Route path="/OrderHistory" element = {<OrderHistory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
