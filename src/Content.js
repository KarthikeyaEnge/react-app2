import React from 'react'
import Products from './Products.js'
import Crud from './Crud.js'

const Content = ({items,setItems,filterc,setFilterc,cont,setCont}) => {
  return (
     
    (cont==="PRODUCTS")?
      (<Products items={items} setItems={setItems} filterc={filterc} setFilterc={setFilterc} cont={cont} setCont={setCont}/>)
      : (<Crud items={items}/>)
  )
}

export default Content