import{BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import OrderPlace from './pages/OrderPlacement.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element = {<OrderPlace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
