import React, { useEffect, useState } from "react";
import "./products.css";


import Cart from "../../components/Cart";

//cart 
//importando produtos da API
function Products() {

const [foods, setFoods] = useState([]);
const [shoppingCart, setShoppingCart] = useState([]);

const addCart = (food) =>{
 const itemInCart = shoppingCart.find((item)=> item.id === food.id);
 if(itemInCart){
  const newCart = shoppingCart.map((item) => item.id === food.id ? {...item, quantidade: item.quantidade +1}:item
  )
  setShoppingCart(newCart)
} else{
  setShoppingCart([...shoppingCart, {...food, quantidade:1}])
}
calculateTotal()
};

const removeCart=(foodId)=>{
const newCart = shoppingCart.filter((item)=> item.id !== foodId)
setShoppingCart(newCart) 
calculateTotal();
}

const fetchData=()=>{
  fetch('https://burgoro-deploy-sczs.vercel.app/api/foodsData.json').then(res=>res.json()).then(data=>{
    setFoods(data)
  }).catch(e=> console.log(e.message))
}
useEffect(()=>{
  fetchData();
},[])


const calculateTotal = () => {
  return shoppingCart.reduce((acc, item)=> acc + item.price * item.quantidade, 0)};


  return (
      <div>
          <main className="products-main">
      
        
            <Cart shoppingCart={shoppingCart} removeCart={removeCart} calculateTotal={calculateTotal}/>
            <div className="main-container">
              {foods.map((food)=>(
                <div key={food.id} className="card-product">
                  <img src={food.img} alt={food.title} className="img-product" />
                  <span className="price">{`$${food.price.toFixed(2)}`}</span>
                  <p className="product-description">{food.name}</p>
                  <button className="card-btn" onClick={() => addCart(food)}>
                Adicionar ao carrinho
              </button>
                </div>
              ))}
            </div>
            <div className="buy-cart"></div>
          
          </main>
      </div>
  );
}

export default Products;
