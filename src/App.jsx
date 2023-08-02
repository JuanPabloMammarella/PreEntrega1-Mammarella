import './App.css'
import Navbar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <CartProvider>
        <header>
        <img className="logo" src="../src/images/logo.jpg" alt="" />
      </header>
        <h1>Tienda Virtual de "El Buen Comer"</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
        </BrowserRouter>

      <p className="pie">
        Estos son todos los productos que tenemos disponibles por el momento.
      </p>
      </div>

  );
}

      

export default App

