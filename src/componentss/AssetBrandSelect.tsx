import { Menu } from "@headlessui/react"
import { useState } from "react"
import Dropdown from "./Dropdown"

export const AssetBrandSelect = ({catBrand, setCatBrand}) =>{


    const [brands, setBrands] = useState(['Apple', 'Samsung','HP Pavilion','OPPO','Microsoft Surface','Infinix','Impression of Acqua Di Gio','Royal_Mirage','Fog Scent Xpressio'])
 
    const handleBrandChange = (event) =>{
        event.target.innerText == 'All' ? setCatBrand('') :
        setCatBrand(event.target.innerText.toUpperCase())
        console.log('tutaj', catBrand)
    }


    return(
        <>
        <div>
            <Dropdown class='flex items-start justify-start' title={'Brand ' + catBrand}>
            <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>All
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
            </Menu.Item>
            {
                 brands.sort().map((brands)=>
                 <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                 <button onClick={handleBrandChange}>{brands}
                     <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                 </button>
                </Menu.Item >    
                 )
            }
            </Dropdown>
      
        </div>
        </>
    )
}