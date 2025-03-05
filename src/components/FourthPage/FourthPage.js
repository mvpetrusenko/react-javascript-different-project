import React, { useState } from 'react';
import '../FourthPage/FourthPage.css' 
import FilterData from '../FourthPage/FilterData'; 

// search for: react jsx render object (array) 
// [] - array, {} - object 
// display multiple similar components from a collection of data 
// filter and transform your array of data into an array of components 
// !!! React rendering lists 

// Objects are not valid as a React child (found: object with keys {id, name, 
// category, color}). If you meant to render a collection of 
// children, use an array instead: 
// To fix this error break up object on strings: 
// const filterDataCards = FilterData.map(card => <li>
  // <p>{card.name}</p>
  // </li>); 


// css ul (not li !!!!) remove bullets (dots) 
// how to set name for a checkbox in react jsx




function FourthPage() { 


//   const FilterData = [
//     {
//         id: "1", 
//         name: "laptop", 
//         category: "technology", 
//         color: "gray", 
//         price: 50
//     }, 
//     {
//         id: "2", 
//         name: "chair", 
//         category: "furniture", 
//         color: "brown", 
//         price: 100
//     }, 
//     {
//         id: "3", 
//         name: "phone", 
//         category: "technology", 
//         color: "red", 
//         price: 150
//     }, 
//     {
//         id: "4", 
//         name: "powerbank", 
//         category: "technology", 
//         color: "black", 
//         price: 200
//     }, 
//     {
//         id: "5", 
//         name: "jacket", 
//         category: "clothes", 
//         color: "black", 
//         price: 250
//     }, 
//     {
//         id: "6", 
//         name: "boots", 
//         category: "clothes", 
//         color: "brown", 
//         price: 300
//     }, 
//     {
//         id: "7", 
//         name: "shirt", 
//         category: "clothes", 
//         color: "brown", 
//         price: 350
//     }, 
//     {
//         id: "8", 
//         name: "jeans", 
//         category: "clothes", 
//         color: "blue", 
//         price: 400
//     }, 
//     {
//         id: "9", 
//         name: "banana", 
//         category: "food", 
//         color: "yellow", 
//         price: 450
//     }
// ]





// const filterDataCards = FilterData.map(card => <li>{card}</li>); 
// first: breack up li (cards) object on fields 
// then return them in ul (filterDataCards)

const filterDataCards = FilterData.map(card => <li>
    <div className='filterCard'>
      <p style={{backgroundColor: "white"}}>{card.name}</p>
      <p style={{backgroundColor: "lightBlue"}}>{card.category}</p>
      <p style={{backgroundColor: "lightPink"}}>{card.color}</p>
      <p style={{backgroundColor: "purple", color: "white"}}>{card.price}</p>
    </div>
</li>); 


// change checked from initial value (false) to changed value (setChecked(true))
const [checked, setChecked] = useState(false) 

// const filterDataCards = FilterData.map(card => <li>{card}</li>); 
// first: breack up li (cards) object on fields 
// then return them in ul (filterDataCards)

// !!! with console.log or debug find in which step there is a problem 
// !!! what element returns (array, string...) to work with in the next step


const handleCheckbox = (event) => { 
    // ensure which checkbox has been clicked in the filter 
    // event.target gives you the element that triggered the event 
    // event.target.value retrieves the value of that element (an input field, for example)
    // !! what element has been clicked (triggered) - const checkedCheckbox = event.target 
    // !! what is the value of clicked element - const checkedCheckbox = event.target.value () : 
    // <input type='checkbox' name='technology' value='technology' onClick={handleCheckbox}></input> 
    // Checkbox has been checked: technology
    const checkedCheckbox = event.target.value
    setChecked(checkedCheckbox) 
    console.log('Checkbox has been checked: ', checkedCheckbox) 

    // loop cards and
    // if checkbox is checked (setChecked(true)) filter where card.category = category.value 
    // if clicked on checkbox Technology (card.category) show cards with label Technology (category.value) 
    // if(setChecked) {
    //     return card.category
    // }
}







  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Fourth Page Content</p> 


            <div className='filter'>
                <p>Filter</p> 
                <div className='filterCategory'>
                    <p>Category</p> 
                    <div className='checkboxGroup'>
                      <input type='checkbox' name='technology' value='technology' onClick={handleCheckbox}></input>
                      <label htmlFor='technology'>Technology</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='furniture' value='furniture' onClick={handleCheckbox}></input>
                      <label htmlFor='furniture'>Furniture</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='clothes' value='clothes' onClick={handleCheckbox}></input>
                      <label htmlFor='clothes'>Clothes</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='food' value='food' onClick={handleCheckbox}></input>
                      <label htmlFor='food'>Food</label>
                    </div>
                    
                </div>


                
                <div className='filterColor'>
                    <p>Color</p> 

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='gray' value='gray' onClick={handleCheckbox}></input>
                      <label htmlFor='gray'>Gray</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='brown' value='brown' onClick={handleCheckbox}></input>
                      <label htmlFor='brown'>Brown</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='red' value='red' onClick={handleCheckbox}></input>
                      <label htmlFor='red'>Red</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='black' value='black' onClick={handleCheckbox}></input>
                      <label htmlFor='black'>Black</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='blue' value='blue' onClick={handleCheckbox}></input>
                      <label htmlFor='blue'>Blue</label>
                    </div>

                    <div className='checkboxGroup'>
                      <input type='checkbox' name='yellow' value='yellow' onClick={handleCheckbox}></input>
                      <label htmlFor='yellow'>Yellow</label>
                    </div>

                    
                </div>
            </div>
          

              <ul>{filterDataCards}</ul> 


            <div className='sorting'>
              <p>Sorting</p>
            </div>



        </div> 

        

    </div>

   );
        
}

export default FourthPage;