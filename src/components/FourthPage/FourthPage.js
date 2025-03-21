import React, { useState } from 'react';
import '../FourthPage/FourthPage.css' 
import FilterData from '../FourthPage/FilterData'; 

// search for: react jsx render (show in the frontend) object (array) 
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

// console.log('card fields', filterDataCards)





// change checked from initial value (false) to changed value (setChecked(true))
const [checked, setChecked] = useState(false) 

// const filterDataCards = FilterData.map(card => <li>{card}</li>); 
// first: breack up li (cards) object on fields 
// then return them in ul (filterDataCards)

// !!! with console.log or debug find in which step there is a problem (to see what value returned)
// !!! what element returns (array, string...) to work with in the next step 
// if in jsx constant can`t be read (undefined) - save this variable in state (filteredcategory)
const[filteredcategory, setFilteredcategory] = useState('') 



const handleFilterCategory = (event) => { 
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


    // filter - returns array (cards only with chosen category)
    // const filteredCategory = FilterData.filter(item => 
    //   <p>{item.category}</p>) 
    //   console.log('filtered category', item) 


    // if inside map - wrap if with {} (item => {}) 
    // map - run throught FilterData (cards) and check each card (item) on card fields 
    // but use filter() instead of map() to return only filtered array of cards
    // if card category field = checked checkbox  return cards with this category (filteredCategory) 
    // if any of checkbox not checked - show all cards (filterDataCards)
    // if checkbox is checked - show cards with this category (filteredCategory) 

    // if in jsx constant can`t be read (undefined) - save this variable in state (filteredcategory)

  //   const filteredcategory = FilterData.filter(item => {
  //     if (item.category === checkedCheckbox) {
  //       console.log('checkbox = category: ', checkedCheckbox) 
  //       return item;
  //     } 
  //   }   
    
  // );

  // console.log('Filtered category by chosen checkbox: ', filteredcategory) 




  setFilteredcategory(FilterData.filter(item => {
    if (item.category === checkedCheckbox) {
      console.log('checkbox = category: ', checkedCheckbox) 
      return item;
    } 
  }   
  
));

console.log('Filtered category by chosen checkbox: ', filteredcategory) 

 


  // {
  //   if (setChecked) {
  //     return <ul>{filteredCategory}</ul>
  //   }
  //   return <ul>{filterDataCards}</ul>
  // }


  


  // if (filteredCategory) 
  //   return <ul>{filteredCategory}</ul>  
  // else 
  //   return <ul>{filterDataCards}</ul>  
  






    // loop cards and
    // if checkbox is checked (setChecked(true)) filter where card.category = category.value 
    // if clicked on checkbox Technology (card.category) show cards with label Technology (category.value) 
    // if(setChecked) {
    //     return card.category
    // }
}



// false - not checked
const [checkedColor, setCheckedColor] = useState(false) 
const[filteredcolor, setFilteredColor] = useState('') 

const handleFilterColor = (event) => { 

    const checkedColorCheckbox = event.target.value
    setCheckedColor(checkedColorCheckbox) 
    console.log('Checkbox has been checked: ', checkedColorCheckbox) 

    setFilteredColor(FilterData.filter(item => {
      if (item.color === checkedColorCheckbox) {
        console.log('checkbox = color: ', checkedColorCheckbox) 
        return item;
      } 
    }   
    
  ));
  
  console.log('Filtered color by chosen checkbox: ', filteredcolor) 

}



const [clicked, setClicked] = useState(false)
const [sortedToHigh, setSortedToHigh] = useState(FilterData) 


// const numbers = [1, 7, 3, 10, 25] 
// numbers.sort((a, b) => a - b ) 
// Output: [1, 3, 7, 10, 25] 
// Or: 

// sort and render an array of objects in React (react array sort)
// const [order,setOrder] = useState('asc');
//  const [arraySorted,setarraySorted] = useState(users);
//  const handler = (e)=>{
//      setOrder(e.target.value);
//      const sortedarray = arraySorted.sort((a,b) => {
//      return order === 'asc'?  (a.id - b.id): (b.id - a.id);
//      })
//     setarraySorted([...sortedarray])} 


// sortedToHigh - initial value (card arrays) 
// sortedToHighArray - changed value (sorted array)
const handleSortLowToHigh = (event) => { 
  const clickedLowToHighButton = event.target.value
  setClicked(clickedLowToHighButton) 
  console.log('LowToHigh button has been clicked: ', clickedLowToHighButton) 

  const sortedToHighArray = sortedToHigh.sort((a, b) => (a.price > b.price) ? 1 : -1)

  setSortedToHigh(sortedToHighArray)

console.log('Sorted low to high: ', sortedToHighArray) 

}



// ? 1 : -1:
// If b.price is indeed greater than a.price, the expression 
// returns 1. This tells sort() to place b before a, effectively 
// sorting in descending order.
// If b.price is not greater than a.price, the expression 
// returns -1. This tells sort() to place a before b 


// Positive Return Value (e.g., 1): If the comparison function 
// returns a positive number, it means that b should be placed 
// before a in the sorted array.
// Negative Return Value (e.g., -1): If the comparison function 
// returns a negative number, it means that a should be placed before b in the sorted array.
// Zero Return Value (Not in your example): If the comparison 
// function returns zero, it means that a and b are considered equal, 
// and their relative positions remain unchanged 

// Any positive number will have the same effect as 1, and any 
// negative number will have the same effect as -1. The sort method 
// just uses the sign to determine the order. Using 1 and -1 is 
// a common and concise convention
// false - not clicked 
// event - clicked button
const [clickedDecrese, setClickedDecrese] = useState(false)
const [sortedToLow, setSortedToLow] = useState(FilterData)

const handleSortHighToLow = (event) => { 
  const clickedHightToLowButton = event.target.value
  setClickedDecrese(clickedHightToLowButton) 
  console.log('HightToLow button has been clicked: ', clickedHightToLowButton)  


  const sortedToLowArray = sortedToLow.sort((a, b) => (b.price > a.price) ? 1 : -1)

  setSortedToLow(sortedToLowArray)

console.log('Sorted high to low: ', sortedToLowArray) 

}





  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 
            <p>Fourth Page Content</p> 


            <div className='filterSortingBlock'>


                <div className='filter'>
                    <p>Filter</p> 
                    <div className='filterCategory'>
                        <p>Category</p> 
                        <div className='checkboxGroup'>
                          <input type='checkbox' name='technology' value='technology' filteredCategory={true} onClick={handleFilterCategory}></input>
                          <label htmlFor='technology'>Technology</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='furniture' value='furniture' onClick={handleFilterCategory}></input>
                          <label htmlFor='furniture'>Furniture</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='clothes' value='clothes' onClick={handleFilterCategory}></input>
                          <label htmlFor='clothes'>Clothes</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='food' value='food' onClick={handleFilterCategory}></input>
                          <label htmlFor='food'>Food</label>
                        </div>
                    
                    </div>


                
                    <div className='filterColor'>
                        <p>Color</p> 

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='gray' value='gray' onClick={handleFilterColor}></input>
                          <label htmlFor='gray'>Gray</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='brown' value='brown' onClick={handleFilterColor}></input>
                          <label htmlFor='brown'>Brown</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='red' value='red' onClick={handleFilterColor}></input>
                          <label htmlFor='red'>Red</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='black' value='black' onClick={handleFilterColor}></input>
                          <label htmlFor='black'>Black</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='blue' value='blue' onClick={handleFilterColor}></input>
                          <label htmlFor='blue'>Blue</label>
                        </div>

                        <div className='checkboxGroup'>
                          <input type='checkbox' name='yellow' value='yellow' onClick={handleFilterColor}></input>
                          <label htmlFor='yellow'>Yellow</label>
                        </div>

                    
                    </div>
                </div>
          

              {/* <ul>{filterDataCards}</ul>   */}

              {/* <ul>{filterDataCards}</ul> 



              if (filteredCategory) 
    return filteredCategory
  else 
    return filterDataCards */} 


              {/* <ul>{filteredCategory ? filteredCategory : filterDataCards}</ul> */} 






            
                  {/* !!!!! if checkbox is not clicked - returns filterDataCards, if clicked - filteredCategory
                  {checked ? <ul>filteredCategory</ul> : <ul>filterDataCards</ul>} */}

                  {/* ! filteredCategory - undefined: */}
                  {/* {checked ? <ul>{filteredCategory}</ul> : <ul>{filterDataCards}</ul>} */} 

                  {/* ! returns array of filtered category in console:
                  {checked ? <ul>{console.log({filteredcategory})}</ul> : <ul>{filterDataCards}</ul>} */} 






                
                  {/* !!!!!!Objects are not valid as a React child - error in console 
                  if you meant to render a collection of children, use an array instead
                  !!!!!Your data homes is an array, so you would have to iterate over the array using map: 
                  {homes.map(home => <div>{home.name}</div>)} */}
                  {/* {checked ? <ul>{filteredcategory.map(filteredc => <li>{filteredc.name}</li>)}</ul> : <ul>{filterDataCards}</ul>} */} 


                  {/* if in jsx constant can`t be read (undefined) - save this variable in state (filteredcategory) */}
                  {/* {checked ? <ul>{filteredcategory.map(filteredc => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{filteredc.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{filteredc.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{filteredc.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{filteredc.price}</p>
                      </div> 
                    </li>)}</ul> 
                  : <ul>{filterDataCards}</ul>} */}









                  {/* filter color:      */}
                  {/* {checked ? <ul>{filteredcolor.map(filteredcol => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{filteredcol.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{filteredcol.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{filteredcol.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{filteredcol.price}</p>
                      </div> 
                    </li>)}</ul> 
                  : null} */} 



                      

                  {/* rendering multiple conditions ternary operator in React: 
                  <h1 id="id1">
                      {
                          isEnvironmentBFE
                          ? (
                              outp(
                                "b",
                                "ba",
                                this.props.lang
                          )
                          ) : NEW CONDITIONAL HERE
                          ? (NEW RESULT)
                          : (
                            outp(
                              "a",
                              "ab",
                              this.props.lang
                        )
                      )
                    }
              </h1>


              !!!!  : checkedColor ? (else if - else if : a = 1 ? return b) */}
                  {checked ? <ul>{filteredcategory.map(filteredc => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{filteredc.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{filteredc.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{filteredc.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{filteredc.price}</p>
                      </div> 
                    </li>)}</ul> 
                  : checkedColor ? <ul>{filteredcolor.map(filteredcol => <li>
                    <div className='filterCard'>
                        <p style={{backgroundColor: "white"}}>{filteredcol.name}</p>
                        <p style={{backgroundColor: "lightBlue"}}>{filteredcol.category}</p>
                        <p style={{backgroundColor: "lightPink"}}>{filteredcol.color}</p>
                        <p style={{backgroundColor: "purple", color: "white"}}>{filteredcol.price}</p>
                    </div> 
                  </li>)}</ul> 
                  : <ul>{filterDataCards}</ul>}



                  {/* FilterData.map(card => <li>
    <div className='filterCard'>
      <p style={{backgroundColor: "white"}}>{card.name}</p>
      <p style={{backgroundColor: "lightBlue"}}>{card.category}</p>
      <p style={{backgroundColor: "lightPink"}}>{card.color}</p>
      <p style={{backgroundColor: "purple", color: "white"}}>{card.price}</p>
    </div> 
</li>); */}



                {/* {
                  if (setChecked) {
                    return <ul>{filteredCategory}</ul>
                  }
                  return <ul>{filterDataCards}</ul>
                } */} 



            


              {/* <div>{filteredCategory}</div> */}


                {/* click button - loop array, sort and show sorted cards */}
                <div className='sorting'>
                  <p>Sorting</p> 
                  <button className='lowToHigh' onClick={handleSortLowToHigh}>Low To High</button>
                  <button className='highToLow' onClick={handleSortHighToLow}>High To Low</button>
                </div>




                {/* sortedToHigh - initial value (card arrays) 
                sortedToHighArray - changed value (sorted array) */}
                {clicked ? <ul>{sortedToHigh.map(sortedToHighCard => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{sortedToHighCard.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{sortedToHighCard.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{sortedToHighCard.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{sortedToHighCard.price}</p>
                      </div> 
                    </li>)}</ul> 
                    // : <ul>{filterDataCards}</ul>} - will be two cards before clicking sorting button 
                    // !!! : null - will be 1 cards before clicking sorting button which will be changed if filter/sort button clicked
                    : null} 






                    {clickedDecrese ? <ul>{sortedToLow.map(sortedToLowCard => <li>
                      <div className='filterCard'>
                          <p style={{backgroundColor: "white"}}>{sortedToLowCard.name}</p>
                          <p style={{backgroundColor: "lightBlue"}}>{sortedToLowCard.category}</p>
                          <p style={{backgroundColor: "lightPink"}}>{sortedToLowCard.color}</p>
                          <p style={{backgroundColor: "purple", color: "white"}}>{sortedToLowCard.price}</p>
                      </div> 
                    </li>)}</ul> 
                    // : <ul>{filterDataCards}</ul>} - will be two cards before clicking sorting button 
                    // !!! : null - will be 1 cards before clicking sorting button which will be changed if filter/sort button clicked
                    : null} 
                     






            </div> 

        </div>

    </div>

   );
        
}

export default FourthPage;