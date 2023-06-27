import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <img class="logo" src="./src/images/logo.jpg" alt="" />
    </header>
    
      <h1>Mi Aplicación Ecommerce</h1>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a mi aplicación de Ecommerce donde podran adquirir los productos que tenemos disponibles."}/>

      <div className="card">
        <img class="fotos" src="./src/images/cubiertos.png" alt="" />
        <p>
          Set de cubiertos
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad que deseas {count}
        </button>
        
      </div>
      
      <div className="card">
        <img class="fotos" src="./src/images/delantal.jpg" alt="" />
        <p>
          Delantal
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad que deseas {count}
        </button>
        
      </div>

      <div className="card">
        <img class="fotos" src="./src/images/olla.jpg" alt="" />
        <p>
          Olla
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad que deseas {count}
        </button>
        
      </div>

      <div className="card">
        <img class="fotos" src="./src/images/remera.jpg" alt="" />
        <p>
          Remera
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad que deseas {count}
        </button>
        
      </div>

      <div className="card">
        <img class="fotos" src="./src/images/repasador.jpg" alt="" />
        <p>
          Repasador
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad que deseas {count}
        </button>
        
      </div>

      <div className="card">
        <img class="fotos" src="./src/images/tabla.jpg" alt="" />
        <p>
          Tabla para cortar
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad que deseas {count}
        </button>
        
      </div>



      <p className="pie">
        Estos son todos los productos que tenemos disponibles por el momento. Para volver los contadores a 0, refresca la página
      </p>
    </>
  )
}

export default App
