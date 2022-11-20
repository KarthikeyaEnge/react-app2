import React from 'react'
import './Crud.css'
import { useState } from 'react';

const Crud = ({items}) => {
         
    let api_url='http://localhost:3500/items'
    const [nit,setNit]=useState('');
    const [nct,setNct]=useState('');

     const apirequest=async (url='',option='null')=>{

        try{
            const res=await fetch(url,option);
            if(res.ok)
              console.log("ok 200");
        }catch(e){
            console.log(e.message);
        }
     }

    const handleinsert=()=>{
       
      if(nit){
        let id=(items)?items.length+1:1;

        const p={id,name:nit,cost:nct};
    
        let  option={
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(p)
     }
        
       console.log(JSON.stringify(p));
         apirequest(api_url,option).then(()=>(setNit(''))).then(()=>(setNct('')));
     }
        

    }

    const handledelete=()=>{
        if(nit){
            const it=items.filter((e)=>{return e.name===nit})
            let option={
                method:'delete'
            }
            if(it[0]!=undefined){
             apirequest(`${api_url}/${it[0].id}`,option).then(()=>(setNit(''))).then(()=>(setNct('')));
            }
            else {
                (console.log('enter proper name'));
                setNct('');
                setNit('');
            }
        }
    }

    const handleupdate=()=>{
        if(nit){
            const it=items.filter((e)=>{return e.name===nit})
               console.log(it[0]);
            let option={
                method:'patch',
                headers:{
                    'content':'application/json',
                    'request':'no-cors'
                },
                body:JSON.stringify({cost:nct})
            }

            if(it[0]!=undefined){
                apirequest(`${api_url}/${it[0].id}`,option).then(()=>(setNit(''))).then(()=>(setNct('')));
               }
               else {
                   (console.log('enter proper name'));
                   setNct('');
                   setNit('');
               }


        }
    }




    return (
    <main>
          <section className='crudop'> 
          <h1>CRUD</h1>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={nit} onChange={(e)=>setNit(e.target.value)}/>
               <label htmlFor='cost'>Cost</label>
              <input type="text" name="cost" value={nct} onChange={(e)=>setNct(e.target.value)}/>
               
            <article className='but'>
                <input type="submit" value="Insert" onClick={handleinsert}/>
                <input type="submit" value="Update"  onClick={handleupdate}/>
                <input type="submit" value="Delete" onClick={handledelete}/>
                
            </article>
          
          </section>

    </main>
  )
}

export default Crud