import './App.css';
import Header from './Header.js'
import './Header.css'
import Content from './Content';
import Footer from './Footer';
import {useEffect,useState} from 'react';

function App() {
   const API_URL="http://localhost:3500/items";

   const [items,setItems]=useState([]);
   const [search,setSearch]=useState('');
   const [filterc,setFilterc]=useState(0);
   const [cont,setCont]=useState("PRODUCTS");
  
  useEffect(() => {
       const resfetch=async ()=>{
             try{
              const res=await fetch(API_URL);
              const rj=await res.json();

              setItems(rj);
             }catch(err){
              console.log(err.message);
             }
       }    
       
       resfetch();
  }, [])
  
     

  return (
    <div className="App">
      <Header items={items} setItems={setItems} search={search} setSearch={setSearch} cont={cont} setCont={setCont}/>
      <Content  items={
                   items.filter((e)=>{
                    return (e.name).toLowerCase().includes(search.toLowerCase())}
               ) }  
               setItems={setItems} filterc={filterc} setFilterc={setFilterc} cont={cont} setCont={setCont} />
      
      <Footer />
    </div>
  );
}

export default App;
