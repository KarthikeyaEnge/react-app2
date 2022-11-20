import React from 'react'
import { useState } from 'react'
import { FaEdit,FaProductHunt } from 'react-icons/fa'
const Header = ({items,setItems,search,setSearch,cont,setCont}) => {

  return (
      <header>
         <h1>CATALOGE</h1>
         <nav className='desk'>
            
         <input 
           type="button" 
           name="prod"
            value="PRODUCTS"
            onClick={(e)=>setCont(e.target.value)}
          />

            <input type="text" name="search" placeholder='search' onChange={(e)=>setSearch(e.target.value)} className='search'/>
             <input 
               type="button" 
               name="crud" 
               value="CRUD" 
               onClick={(e)=>setCont(e.target.value)}
               
               />
              
           
         </nav>


         <nav className='mobile'>
          
            <FaProductHunt
             role="button"
             tabIndex="0"
             className='but'
             onClick={(e)=>setCont("PRODUCTS")}
            />

            <FaEdit
            role="button"
            tabIndex="0"
            className='but'
            onClick={(e)=>setCont("CRUD")}
            />
 

             <input type="text" name="search" placeholder='search' onChange={(e)=>setSearch(e.target.value)} className='search'/>
         </nav>
      </header>
  )
}

export default Header