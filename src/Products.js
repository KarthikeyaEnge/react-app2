import React from 'react'
import {useState} from 'react'
import Hero from './Hero.js'
import Prods from './Prods.js'

const Products = ({items,setItems,filterc,setFilterc,cont,setCont}) => {
  const[head,setHead]=useState(true)  
  
    return (
    <>{
       head?(
         <Hero head={head} setHead={setHead}/>
       ):(
        
        
          <Prods items={filterc>0?(items.filter((e)=>{
            console.log(e.cost>=filterc);
            return e.cost>=filterc
          })):items }
           setItems={setItems} filterc={filterc} setFilterc={setFilterc}/>
          

       )}
    </>
  )
}

export default Products