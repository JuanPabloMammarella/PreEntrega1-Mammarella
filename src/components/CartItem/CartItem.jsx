

const CartItem = ({onAddToCart,onDecreaseItem, onRemoveItem, id, img, name, price, quantity, stock }) => {
    return (
        <div className='cartItem'>
            <div className='cardImageContainer'>
               <img alt={name} className="ItemImg" src={img}/>
            </div>
            <div className='cartContentContainer'>
                <p className='cartProductName'>{name}</p>
                <p className='cartPrice'>Precio: ${price}</p>
                <p className='cartQuantity'>Cantidad que lleva: {quantity}</p>
                <p className='cartStock'>Quedan {stock} disponibles</p>
                <div className='cartActions'>
                    <button onClick={() => onAddToCart(id)} className='cartButttonAdd'>+</button>
                    <button onClick={() => onDecreaseItem(id)} className='cartButttonDecrease'>-</button>
                    <button onClick={() => onRemoveItem(id)} className='cartButttonRemove'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem