import React, {useState, useEffect} from 'react';
import '../MainPage/MainPage.css' 
import { Link } from 'react-router-dom';
// import Header from '../Header/Header'; 
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer'; 
import apple from '../../assets/images/apple.jpg'; 
import grapes from '../../assets/images/grapes.jpg'; 
import kiwi from '../../assets/images/kiwi.jpg'; 
import AddToCartElement from '../AddToCartElement/AddToCartElement'; 
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'; 
import Card from '../Card/Card'; 
import CardData from '../Card/CardData'; 
import '../Card/Card.css'




function MainPage() {
  return ( 
    <div>
        {/* {<Header />}
        {<NavBar />} */}
        <div className="content"> 

            <div className='product-items'>
                <Card details={CardData} />
            </div> 
                {/* <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={apple} alt="Apple" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Apple Gala</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                </div> 
  
  
                <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={grapes} alt="Grapes" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Niagara Grapes</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                </div> 
  
                <div className="itemBlock">
                    <div className='imageBlock'>
                        <Link to="/"><img src={kiwi} alt="Kiwi" className="item" /></Link>
                    </div>
                    <div className='textBlock'>
                        <p>Hayward Kiwi</p>
                        <div className='product-description'> 
                        <p>per 1 kg</p>
                        {<AddToCartElement />}
                    </div>
                    </div> 
                    
                // </div>  */}

          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div> 
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>
          <div>ggggggggggggggg</div>

        </div>
            {<ScrollToTopButton />}
            {/* Header, Footer and NavBar will be in App.js  */}
            {/* {<Footer />}  */} 
      
    </div>
  );
}

export default MainPage;