import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import Products from './components/products/Products';
import AddProduct from './components/products/addProduct';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
