import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './App.css'

function App(){

const [products, updatedProducts] = useState([]);

useEffect(
   () => {
       getProducts();
  },[]
)

async function getProducts(){
   
  const res = await fetch("https://fakestoreapi.com/products");

  let productList = await res.json();
  updatedProducts(productList);

  console.log(productList);

}

  if(products.length === 0){
    return(<h1>Fetching Data...</h1>)
  }


  return (
    <>
    <div>
        <h1 className='main-heading'>FlipKart Products</h1><span className='span'>Created by DileepLee</span>
    </div>

      <div className='product-list'>
        {
        products.map((p) => <ProductCard {...p} key={p.id}></ProductCard>)
        }
      </div>

    </>

  )
  
}

export default App
