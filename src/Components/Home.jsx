import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { singelProductData } from '../Slice/CounterSlice'

const Home = () => {


const [productData, setProductData] = useState ([])
const navigate = useNavigate()
const dispatch = useDispatch()




useEffect(()=>{
axios.get("https://api.jsonbin.io/v3/b/6671c836acd3cb34a8595abb")


.then((res)=> setProductData(res.data.record))
.catch((err)=> console.log(err))


},[])


const handelShow = (id)=>{
    navigate('/buy')
    dispatch(singelProductData(id))
}

const handelBuy =(id)=>{
    navigate('/cart')
    dispatch(singelProductData(id))
}




return (
<>
    <div className="container">
        <div className="main-content flex gap-4 flex-wrap justify-center pt-5">
            {
            productData.map((item, i)=>(


            <div key={i} className="item w-[250px] h-[600px] bg-[#06D001]  p-0 rounded-lg hover:scale-110 rounded-md shadow-xl relative hover:text-all card-bg-green- 300">
                <div className="item-image h-[250px] flex justify-center items-center hover: bg-red-300 all-i hover:bg-red-700 rounded-1.9xl">
                    <a href="#">
                        <img  src={item.image} alt="img" />
                    </a>
                </div>
                <div className="item-details m-[11px]">
                    <div className="item-details--title w-[228px] h-[4px] font-lato text-[16px] text-black  font-bold">
                        <h1>{item.product}</h1>
                    </div>
                    <div
                        className="item-details--specification font-lato text-[13px] text-black  font-semibold mt-[35px]">
                        <ul className='list-disc pl-5'>
                            <li>Speed:  {item.speed}</li>
                            <li>cache:  {item.cache}</li>
                            <li>cores:{item.cores}</li>
                              <li>memory_speed: {item.speed}</li>
                        </ul>
                    </div>
                    <div className="item-details--price mt-5">
                        <p className='font-lato text-[25px] text-red-700  font-semibold text-center border-e-2 border'>Price: {item.price}</p>
                    </div>
                </div>
                <div
                    className="item-btn flex w-[250px] h-[160px] justify-evenly items-center flex-col absolute bottom-0">
                    <button onClick={ ()=> handelBuy(item) }
                        className='w-[220px] h-[45px] bg-[#FF8F00] hover:text-white hover:bg-[#57d14c] rounded-full font-semibold text-[rgb(187,108,55)] border-e border-2'>Buy</button>
                    <button onClick={ ()=> handelShow(item) }  className='w-[220px] h-[45px] rounded-full transition font-semibold text-[#666666] hover:bg-[rgba(85,211,243,0.9)] hover:text-black border-e border-2'>Show  more</button>
                </div>
            </div> 

            ))
            }
        </div>
    </div>
</>
)
}

export default Home