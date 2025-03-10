/* dynamic value - value that will be changed - {} in JSX (React) 
method map returns changed data, not new data 
for each returns the same data 

in arr.map object will be returned  - not to write 4 times <Card /> 

props - when child element receives from parent element data 

Props are arguments passed into React components 
React Props are like function arguments in JavaScript and attributes in HTML - https://www.w3schools.com/react/react_props.asp 

!props help to pass data from one component to the other 


Or: 
function Card(title, image) and change {props.title} to ${title} 

!!! you cannot use map() to props, because props is an object, but map is a method for arrays 

details is a prop name 

using curly braces {} around the map function, which is incorrect in this context.  
Curly braces are used for 
embedding JavaScript expressions inside JSX, but the map function itself returns JSX 
Not: {props.details.map((value, index) 



TypeError: props.details.map is not a function = this is not an array 
map() is only for arrays 

MainPage is parent component 

if styles is DevTools are not visible = css file has not been imported  


!!! not seen css styles in DevTools - classname in css file is written incorrectly 


const [count, setCount], setCount - what we will do with count (count + 1) = how 
initial state will be changed 

useState(initial state = count value = 0) - to remember initial state of count (like variable)

count = new state variable (to remember state of variable)
*/


import React, { useState } from "react"; 
import '../Card/Card.css'; 

import { CartContext } from "../../App.js"; 
import { useContext } from 'react'; 

import { useNavigate } from 'react-router-dom';

// addedProductButton buyButton - check if item is in card and choose (replace) button 
// cartItems.filter((item) => item.id === value.id): 
// This part checks if the product is already in the cart 
// If they are equal, it means the product is already in the cart, 
// and that item will be included in the new filtered array 
//  The .length property then gives you the number of elements in that filtered array (either 1 or 0)
// One element if the product is already in the cart 
// Zero elements if the product is not in the cart 
//  If the length of the filtered array is greater than 0 (meaning the product 
// is in the cart), the code after the ? is executed 
// : Otherwise (if the length is 0), the code after the : is executed

function CardGroup({ cardArray, addToCart }) { // Receive addToCart as a prop 

   const {cartItems, setCartItems} = useContext(CartContext); 


   const navigate = useNavigate();

    return (
        <div className="cards">
            {cardArray.map((value) => (
                <div className="cardContainer" key={value.id}>
                    <div className="cardImageBlock">
                        <img className="cardImage" src={value.image} alt={value.title || "Product Image"} />
                    </div>
                    <div className='cardTextBlock'>
                        <span className="cardTitle">{value.title}</span>
                        <p className="cardPrice">{value.price}</p> 
                        {/* {cartItems.includes(value) ? ( */} 
                        {/* if cart has added item (===)  */}
                        {cartItems.filter((item) => item.id === value.id).length ? (
                        <button className="addedProductButton buyButton" onClick={() => {
                            //redirectToCart(); 
                            navigate("/cart");
                            }}>Product added</button> 
                        ) : (
                            <button className="buyButton" onClick={() => {
                                addToCart(value); 
                                }}>Add to Cart</button> 
                        )}
                        {/* <button className="buyButton" onClick={() => {
                            addToCart(value); 
                            }}>'Add to Cart'</button>  */}
                    </div>

                </div>
            ))}
        </div>
    );
}


export default CardGroup;


// function Card(props) { 


    // const [itemToCart, setItemToCart] = useState('Buy'); 

    // const handleAddToCart = () => { 
    //     setItemToCart(value.title); 
    // } 


    // 1) see button id of the clicked button in the console 
    // open console to see what button id of the clicked button is
    // const handleClickButtonId = (event) => {
    //     // const buttonId = event.currentTarget.id; 
    //     const buttonId = event.target.innerText; 
    //     console.log(buttonId);

    // } 



    // const [count, setCount] = useState(0); 


    // const handleClickButton = () => { 
    //     setCount(count + 1); 
    //     console.log('Button button clicked')
        
    // }






//     return ( 
//     <div className="cards">
//         {props.details.map((value) => ( 
//         <div className="cardContainer" key={value.id}>
//             <div className="cardImageBlock">
//                 <img className="cardImage" src={value.image} alt="Card Image"></img>
//             </div>
//             <div className='cardTextBlock'>
//                 <span className="cardTitle">{value.title}</span> 
//                 <p className="cardPrice">{value.price}</p> 
                
//                 {/* added onclick for imported component */}
//                 {/* <div onClick={handleClickButton}> 
//                     {<AddToCartElement />} 
//                 </div>  */}

//             </div> 
            
//         </div>
//         ))} 
//     </div>
//     );
// }

// const arr = [
//     {
//         id: "1", 
//         title: "", 
//         price: 100, 
//         image: "../../assets/images/apple.jpg'",
//     }, 
//     {
//         id: "2", 
//         title: "", 
//         price: 200, 
//         image: "../../assets/images/grapes.jpg",
//     }, 
//     {
//         id: "3", 
//         title: "", 
//         price: 300, 
//         image: "../../assets/images/kiwi.jpg",
//     }

// ]




// export default Card;
