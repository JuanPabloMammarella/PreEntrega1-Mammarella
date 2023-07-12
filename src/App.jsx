import './App.css'
import Navbar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <header>
        <img className="logo" src="../src/images/logo.jpg" alt="" />
      </header>
        <h1>Mi Aplicación Ecommerce</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
          <Route path='*' element={<h1>NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>

      <p className="pie">
        Estos son todos los productos que tenemos disponibles por el momento.
      </p>
      </div>

  );
}

      

export default App

