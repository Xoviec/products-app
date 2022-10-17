import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AssetProductProps, AssetProduct } from "../componentss/AssetProduct";
import axios from 'axios';
import Dropdown from "../componentss/dropDown";
import { Menu } from "@headlessui/react";
import { AssetCategorySelect } from "../componentss/AssetCategorySelect";
import { AssetBrandSelect } from "../componentss/AssetBrandSelect";

// import { json } from "stream/consumers";

const API_URL = 'https://dummyjson.com/products'

const Home: NextPage = (props:AssetProductProps) => {
  

const [output, setOutput] = useState([])
const [categories, setCategories] = useState([])
const [hasError, setHasError] = useState(false)

const products: Array = output.products

const [catBrand, setCatBrand] = useState('')
const [catType, setCatType] = useState('')
// const [listLength, setListLength] = useState(typeSelect?.length)
const [limiter, setLimiter] = useState(5)

let brandSelect;
let typeSelect;

brandSelect = products?.filter((products: any)=> products.brand.toUpperCase().includes(catBrand))
typeSelect = brandSelect?.filter((products: any)=> products.category.toLowerCase().includes(catType))

// console.log(listLength)
// console.log(brandSelect)
console.log(typeSelect)

useEffect(() =>{
  fetch('https://dummyjson.com/products/categories')
  .then(response => response.json())
  .then(res => setCategories(res))
  .catch(error => setHasError(true))
  
}, [])

useEffect(() =>{
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(res => setOutput(res))
  .catch(error => setHasError(true))
  
}, [])

const handleLimiterChange = () =>{
  setLimiter(limiter+5)
  console.log(limiter)
}
// useEffect(() =>{
//   axios.get(API_URL)
//   .then(function (response) {
//     // handle success
//     setOutput(response);
//   })
// },[])
            



  return (
    <>
      <div className="flex flex-col items-center sm:mx-auto">
        <div className="flex justify-around items-center m-3 bg-[#ecf3fd] w-[800px] h-44 rounded-md shadow-3xl lg:w-[600px] md:w-[400px] sm:scale-75">
          <div className="flex justify-center w-[50%]">
            <AssetCategorySelect categories={categories} setCatType={setCatType} catType={catType}></AssetCategorySelect>
          </div>
          <div className="flex justify-center w-[50%]">
            <AssetBrandSelect setCatBrand={setCatBrand} catBrand={catBrand} setCatBrand={setCatBrand}></AssetBrandSelect>
          </div>
        </div>
        <div>

          {
            
            products ?
            (
              typeSelect.length !== 0 ?
              typeSelect.slice(0, limiter).map((products)=>
              <AssetProduct title={products.title} id={products.id} brand={products.brand} category={products.category} thumbnail={products.thumbnail} price={products.price} stock={products.stock} description={products.description}></AssetProduct>    
              ) :
              <div className="flex flex-col p-5 mt-10 items-center font-bol text-[#282828] text-[2rem] w-96 h-36 bg-[#ecf3fd] rounded-md shadow-3xl md:w-72 md:h-36">
                <h1 className="text-[#3c83ec]">
                  Whooooops!
                </h1>
                <span className="text-[1rem] text-center">
                  {
                    `
                  It looks like there are no products you are looking for :(
                    `
                  }
                </span>
              </div>
            )
      : 

      <div className="flex flex-col justify-center p-5 mt-10 items-center font-bol text-[#282828] text-[2rem] w-96 h-36 bg-[#ecf3fd] rounded-md shadow-3xl md:w-72 md:h-36">
      <h1 className="text-[#3c83ec]">
        Loading...
      </h1>
    </div>
          }
                      
        </div>
        <div>
          <button className={typeSelect?.length > limiter ? 'mb-10 w-[200px] bg-[#3c83ec] text-[#ecf3fd] rounded-md h-10 sm:mb-2' : 'hidden'} onClick={handleLimiterChange}>

            Load more
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

