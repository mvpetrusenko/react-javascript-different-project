import React, { useState, useEffect } from 'react';
import '../CartPage/CartPage.css' 
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
import CardGroup from '../Card/CardGroup'; 
import CardData from '../Card/CardData';  

// get data from context in component where this data needed
import { CartContext } from "../../App.js"; 
import { useContext } from 'react';


// localStorage - data saved in browser (before clearing cash) after refreshing web page (but useState without 
// localStorage will not save data after page refreshing) 
// use localStorage for night mode, adding to cart, save form data 

// cartItems is the React state that controls what's displayed in the UI 
// storedItems is just the initial data loaded from localStorage 
//!! cartItems is the React state that holds the current cart data 


// Delete button removes the item from the UI but doesn't update localStorage, which 
// causes the deleted items to reappear on page refresh


// function CartPage({ cartItems0, onDelete }) {  // Receive cartItems as a prop //  { cartItems } Receive cartItems as a prop - to see clicked product in the cart // {getLocalStorage}

function CartPage() { 
  // getting data from context
  const {cartItems, setCartItems} = useContext(CartContext); 

  // JSON.parse(localStorage.getItem('cartItems'));
  // localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
  
  
  // localStorage.setItem('updatedCart', JSON.stringify(updatedCart)); 


  // onClick={() => handleDelete(item.id) 
  // () => - anonymous function, without name, to pass argument to created handleDelete function 
  // onClick={handleDelete} - it would work if there is no need to pass argument to the function

  const handleDelete = (id) => { 
          const updatedCart = cartItems.filter((item) => item.id !== id);
          setCartItems(updatedCart); 
          localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
        }; 




  // const handleDelete = (product) => {
  //     const updatedCart = [...cartItems]; // ...cartItems - existing items, product - new added product after click 
  //     setCartItems(updatedCart); 
  // };

  

  // const[item, setItem] = useState(); // local storage 

  // const addToLocalStorage = (product) => {
  //   localStorage.setItem('product', JSON.stringify(product)); // set - save data
  // }

  // const [cartItems, setCartItems] = useState([]); // State for cart items

  // const handleAddToCart = (product) => { // Product added to cart
  //     setCartItems([...cartItems, product]); // Add the product to the cart array
  //     console.log("Item added to cart:", product); 
  //     addToLocalStorage();
  // }; 






//   const getLocalStorage = () => {
//     let product = JSON.parse(localStorage.getItem('product')); 
//     return product; 
//  } 


//





        // const [cartItems, setCartItems] = useState([]);

        // // Load cart items from localStorage on mount
        // useEffect(() => {
        //     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        //     setCartItems(storedItems);
        // }, []); 



        // delete from cart 
        // After deleting an item, also update localStorage 
        // Delete button removes the item from the UI but doesn't update localStorage, which 
        // causes the deleted items to reappear on page refresh 
        /* remove item from array: 
          let value = 3

          let arr = [1, 2, 3, 4, 5, 3]

          arr = arr.filter(item => item !== value)

          console.log(arr)
          // [ 1, 2, 4, 5 ] */

        // const handleDelete = (id) => {
        //   const updatedCart = cartItems.filter((item) => item.id !== id);
        //   setCartItems(updatedCart);
        //   localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
        // };
        








  return (
      <div> 
        {/* {getLocalStorage()} */}





          <h2>Cart</h2>
          {cartItems.length === 0 ? (
          <p>Cart is empty.</p>
          ) : (
              <div className='addedProductBlock'>
                {cartItems.map((item) => (
                  <div key={item.id} className='cartItem'>
                    <div className='addedProductImage'>
                      <img src={item.image} alt={item.title} className='addedCardImage' />
                    </div>
                    <div className='addedProductTitle'>
                      <p>{item.title}</p>
                    </div>
                    <div className='addedProductPrice'>
                      <p>{item.price}</p>
                    </div>


                  
                    <button className='deleteFromCart'
                      onClick={() => handleDelete(item.id)}
                      >Delete</button> 

              
                    
                  </div>
                  
                ))}
            </div>
          )} 


      </div>
    );
  }









          {/* <div className="content">
            </div>  <CardGroup cardArray={CardData} addToCart={handleAddToCart} /> 
              <h2>Cart</h2> 
              {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
              ) : (
                  

                  <div className='addedProductBlock'> 

                  <div className='addedProductImage'> 
                      {cartItems.map((item) => (
                          <img key={item.id} src={item.image} className='addedCardImage' />
                           
                      ))}
                    
                  </div> 



                    <div className='addedProductTitle'>
                      {cartItems.map((item) => (
                          <p key={item.id}>
                            {item.title}
                          </p>
                      ))}
                    </div> 

                    <div className='addedProductPrice'>
                      {cartItems.map((item) => (
                          <p key={item.id}>
                            {item.price}
                          </p>
                      ))}
                    </div> 



                    


                  </div> 

                  



              )} */}
          {/* </div>  */}


          <div>
            <p>1. clear products cards not added from page</p> 
            <p>2. cart counter + / - after clicking buy button</p> 
            <p>3. buy button changed after clicking</p> 
            <p>4. delete from cart button </p>
            <p>5. increment / decrement button on the cart page</p> 
          </div>

//       </div>
//   );
// } 





export default CartPage;




// function CartPage() {
//   return ( 
//     <div>
//         {/* {<Header />}
//         {<NavBar />} */}
//         <div className="content"> 
//             <p>Cart Page Content</p>
//             <Card details={value} />
//         </div> 
        
//         {/* {<Footer />} */}
      
//     </div>
//   );
// }

// export default CartPage;