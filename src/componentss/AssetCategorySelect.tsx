import { Menu } from "@headlessui/react"
import Dropdown from "./Dropdown"

export const AssetCategorySelect = ({categories,catType, setCatType}) =>{


    const handleCategoryChange = (event) =>{
            event.target.innerText == 'All' ? setCatType('') :
            setCatType(event.target.innerText)
            console.log('tutaj',catType)
        }

    return(
        <>
        <div>
            <Dropdown title={'Category '+ catType}>
            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 py-2 duration-100'>
                <buttton onClick={handleCategoryChange}>
                  All
                </buttton>
              </Menu.Item>
                {
                categories ?
                categories.sort().map((categories)=>
                <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                <buttton onClick={handleCategoryChange} >
                <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 ">
                    
                    </div>
                  {categories}

                </buttton>

              </Menu.Item>
                ) : null
            }
            </Dropdown>
      
        </div>
        </>
    )
}