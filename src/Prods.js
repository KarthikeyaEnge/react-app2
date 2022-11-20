import React from 'react'
import './Prods.css'
import { FaFilter } from 'react-icons/fa'

const Prods = ({items,setItems,filterc,setFilterc}) => {
   
   



  return (
    <main className='prodm'>
        <aside>
            <h1>Filter</h1>
            <input type="text" name="costt" placeholder='cost greater than' onChange={(e)=>setFilterc(e.target.value)}/>
        </aside>
       
        <section className='itemslist'>
               
               <article className='mob_fil'>
                <FaFilter className='fil'/>
                 <input type="text" name="costt" placeholder='cost greater than' onChange={(e)=>setFilterc(e.target.value)}/>
               </article>

          {
           items.length>0?
            items.map((e)=>( 
              <li key={e.id} className='listitems'> 
                  <h1>{e.name}</h1>
                  <h4>Cost : ₹{e.cost}</h4>
              </li>
            
            )):(<h2 className='noresult'>Sorry No Results?</h2>)
          }
        </section>
        
        
    </main>
  )
}

export default Prods