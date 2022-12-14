import { BRAND } from "zod";

export type AssetProductProps = {
    title?: string;
    id: Number;
    brand: string;
    category: string;
    thumbnail: string;
    price: Number;
    stock: Number;
    description: string;
  }


export const AssetProduct = (props: AssetProductProps) =>{

    return(
        <>
        <div className="flex items-center justify-between   p-10 bg-[#ecf3fd] my-3 animate-show-up h-[400px] w-[800px] rounded-sm shadow-3xl text-[#282828] mb-10 lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[200px] sm:w-[300px] sm:h-[150px]" >
            <div className="flex justify-center items-center mx-auto bg-red-200 max-h-[300px] max-w-[300px]  overflow-hidden rounded-xl lg:max-h-[180px] lg:max-w-[180px] md:rounded-md md:max-w-[120px] md:max-h-[120px] sm:rounded-sm sm:max-w-[90px] sm:max-h-[90px]">
                <img className="object-contain hover:object-cover max-h-[300px] max-w-[300px] lg:max-w-[180px] lg:max-h-[180px] md:max-w-[120px] md:max-h-[120px] sm:max-w-[90px] sm:max-h-[90px]" src={props.thumbnail} alt="e" />
            </div>
            <div className="flex flex-col justify-between items-centera h-[300px] w-[300px]  bg-green-300/  lg:ml-10 lg:h-[180px] md:h-[120px] md:w-[180px] md:ml-3 sm:h-[90px] sm:w-[120px]">
                <div className="flex justify-between">

                    <div className="flex flex-col">
                        <h1 className="font-bold text-[1.8rem] lg:text-[1.2rem] md:text-[0.8rem] sm:text-[0.6rem]">
                            {props.title}  
                        </h1>
                        <span className="opacity-50 lg:text-[0.7rem] md:text-[0.5rem] sm:text-[0.4rem] z-0">
                            {props.brand} - {props.category}
                        </span>
                        <span className="font-bold text-[2rem] mt-5 mb-1 lg:text-[1.6rem] md:text-[1rem] md:mt-2 sm:text-[0.75rem]">
                            {props.price}$
                        </span>
                        <span className="lg:text-[0.7rem] md:text-[0.5rem]">
                            <a className={props.stock < 20  ?  'text-orange-600' : props.stock == 0 ? 'text-red-700' : 'text-green-700'}>
                                {
                                    ` ${props.stock} `
                                }
                            </a>
                            left in stock
                        </span>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <button className="h-10 w-32 bg-[#3c83ec] text-[#ecf3fd] rounded-md md:h-5 md:w-24 md:text-[0.6rem]">
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
        </>
    )
}