import { Menu } from "@headlessui/react"
import Dropdown from "./Dropdown"

export const AssetBrandSelect = ({catBrand, setCatBrand}) =>{

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
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Apple
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Samsung
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item >    
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>HP Pavilion
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>    
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Huawei
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>OPPO
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>  
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Microsoft Surface
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>     
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Infinix
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>            
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Impression of Acqua Di Gio
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>     
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 duration-100'>
                    <button onClick={handleBrandChange}>Royal_Mirage
                        <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mt-2"> </div>
                    </button>
                </Menu.Item>    
                <Menu.Item class='text-left text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 pt-2 pb-2 duration-100'>
                    <button onClick={handleBrandChange}>Fog Scent Xpressio
                    </button>
                </Menu.Item>     
            </Dropdown>
      
        </div>
        </>
    )
}