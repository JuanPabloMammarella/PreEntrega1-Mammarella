import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    city: '',
    email: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div>
      <h2 className='checkout'>Checkout</h2>
      <p>Detalles del carrito</p>
      <form className='label'>
        <label>
          Nombre:
          <input type="text" />
        </label>
        <label>
          Dirección:
          <input type="text" />
        </label>
        <label>
          Teléfono:
          <input type="text" />
        </label>
      </form>
      {orderPlaced ? (
        <div>
          <p>Su orden fue pedida! En brebe nos contactaremos para coordinar el método de pago.</p>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleCheckout}>
          {/* Resto del formulario */}
          <button type="submit">Realizar pedido</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;