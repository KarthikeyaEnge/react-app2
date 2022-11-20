import React from 'react'
import './Hero.css'
const Hero = ({head,setHead}) => {
    const handleclick=()=>{
         setHead(!head);
    }
 
    return (
    <main>
        <section className='hero'>
        {/* <img src="i1.png" alt="icecream"/> */}
        <h1>ICE CREAMS....</h1>
        <h4>We have all tasty and delightfull icecreams</h4>
        <input type="button" name="headcheck" value="SHOP" 
          onClick={handleclick}
        />
        </section>
    </main>
  )
}

export default Hero