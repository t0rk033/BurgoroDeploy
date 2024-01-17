import React, { useState } from 'react'
import './cart.css';
function Cart({shoppingCart, removeCart, calculateTotal}) {
    //Define o estado para as classes
    const [cart, setCart] = useState('hidden')
    //função para alternar entre as classes
    const alternarClasses = () => {
        //verifica se a classe atual é hidden e alterna para active e vice-versa
      setCart((classesAntigas)=> classesAntigas === 'hidden' ? 'active' : 'hidden')
    }
   
    

   
  return (
    <div>
         <button className="cartBtn" onClick={alternarClasses}><i className='bx bx-cart-alt'></i></button>
        <aside className={cart}>
        <div className="aside-container">
          <table className="table-product">
            <thead>
              <tr>
                <th>Item</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((item) => (
                <tr key={item.id} className="product">
                  <td className="name-product">{item.name}</td>
                  <td className="price">{`$${item.price.toFixed(2)}`}</td>
                  <td>
                    <input
                      type="number"
                      name={`quantity-${item.id}`}
                      value={item.quantidade}
                      className="product-qnt"
                      readOnly
                    />
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeCart(item.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
                
              ))}
            </tbody>
           
          </table>
          <p>
            Total: <span className="total-price">{`$${calculateTotal().toFixed(2)}`}</span>
          </p>
          <button className="buy-btn">Comprar</button>
        </div> 
            </aside>
    </div>
  )
}

export default Cart;
