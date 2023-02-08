import { useRouter } from "next/router"
import { type } from "os"
import { useEffect, useState } from "react"
import { number, string } from "zod"
import Dropdown from "../../componentss/Dropdown"
import { Menu } from "@headlessui/react"

const Id = () =>{


    const [output, setOutput] = useState([])
    const [hasError, setHasError] = useState(false)

    


    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(res => setOutput(res))
        .catch(error => setHasError(true))
      }, [])

      const router = useRouter()
      const { id } = router.query

    //   console.log(id)
    //   console.log(output)
      
      console.log(output.products?.[id-1])

      const item = output.products

      console.log(typeof(id))
      console.log(item)
      const user = item?.find((data:any) => data.id === Number(id))
      console.log(user)
      console.log(id)
      console.log(output.products?.[id-1])

    //   console.log()
    //   console.log(product)
    //   const product = item?.find((product:any) => product.id === id)
    //   const product = item?.find((product:any)=>)

    //   console.log(product)


    return(
        <div className="flex justify-center items-center h-[100vh]">
            {
                user ? 
                <div className="flex items-start pt-24 px-10 pb-44 justify-around gap-16 p-[200px]d bg-[#ecf3fd]x my-3 animate-show-up rounded-sm shadow-3xl text-[#282828] mb-10 lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[200px] sm:w-[300px] sm:h-[150px]" >
                    <div className="flex justify-center items-center mx-auto bg-red-200 max-h-[300px] max-w-[300px]  overflow-hidden rounded-xl lg:max-h-[180px] lg:max-w-[180px] md:rounded-md md:max-w-[120px] md:max-h-[120px] sm:rounded-sm sm:max-w-[90px] sm:max-h-[90px]">
                        <img className=" object-contain hover:object-cover max-h-[300px] max-w-[300px] lg:max-w-[180px] lg:max-h-[180px] md:max-w-[120px] md:max-h-[120px] sm:max-w-[90px] sm:max-h-[90px]" src={user.thumbnail} alt="e" />
                    </div>
                <div className="flex flex-col justify-between items-center h-[300pxd w-[300px]  bg-green-300a  lg:ml-10 lg:h-[180px] md:h-[120px] md:w-[180px] md:ml-3 sm:h-[90px] sm:w-[120px]">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-[1.8rem] lg:text-[1.2rem] md:text-[0.8rem] sm:text-[0.6rem]">
                                {user.title}  
                            </h1>
                            <span className="opacity-50 lg:text-[0.7rem] md:text-[0.5rem] sm:text-[0.4rem] z-0">
                                {user.brand} - {user.category}
                            </span>
                            <span className="mt-12 opacity-80 lg:text-[0.7rem] md:text-[0.5rem] sm:text-[0.4rem] z-0">
                                {user.description}
                            </span>
                        </div>
                    </div>
 
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-right text-[2rem] mt-22 mb-1 lg:text-[1.6rem] md:text-[1rem] md:mt-2 sm:text-[0.75rem]">
                        {user.price}$
                    </span>
                    <span className="text-right lg:text-[0.7rem] md:text-[0.5rem]">
                        <a className={user.stock < 20  ?  'text-orange-600' : user.stock == 0 ? 'text-red-700' : 'text-green-700'}>
                            {
                                ` ${user.stock} `
                            }
                        </a>
                        left in stock
                    </span>
                    <div className="flex gap-5">
                        <div>
                        <Dropdown title='1'>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pl-3 py-2 duration-100 w-10'>
                                <buttton>1</buttton>
                            </Menu.Item>

                
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    2
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    3
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    4
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    5
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    6
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    7
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    8
                                </buttton>
                            </Menu.Item>
                            <Menu.Item class='text-[#3c83ec] hover:text-[#FBFDFF] hover:bg-[#3c83ec] pb-2 pl-3 duration-100'>
                                <buttton>
                                    <div className="w-[100%] bg-[#3c83ec] h-[1px] opacity-50 mb-2 "></div>
                                    9
                                </buttton>
                            </Menu.Item>
                        </Dropdown>
                        </div>
                        <button className="h-10 w-32 bg-[#3c83ec] text-[#ecf3fd] rounded-md md:h-5 md:w-24 md:text-[0.6rem]">
                            Add to cart
                        </button>
                    </div>
                </div>
    
            </div>
                // <div className="text-8xl">
                //     {user.title}
                // </div>
                :
                <div>
                    Loading...
                </div>
            }
        </div>
    )
}
export default Id