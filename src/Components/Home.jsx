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


            <div key={i} className="item w-[250px] h-[600px] bg-[#FFF7FC] rounded-md shadow-xl relative">
                <div className="item-image h-[250px] flex justify-center items-center">
                    <a href="#">
                        <img  src={item.image} alt="img" />
                    </a>
                </div>
                <div className="item-details m-[11px]">
                    <div className="item-details--title w-[228px] h-[45px] font-lato text-[16px] text-black  font-bold">
                        <h1>{item.product}</h1>
                    </div>
                    <div
                        className="item-details--specification font-lato text-[13px] text-black  font-semibold mt-[35px]">
                        <ul className='list-disc pl-5'>
                            <li>Speed:  {item.base_frequency}</li>
                            <li>Cache:  {item.cache}</li>
                            <li>Cores:  {item.cores}</li>
                            <li>Memory Speed:  {item.maximum_speed-item}</li>
                        </ul>
                    </div>
                    <div className="item-details--price mt-6 ">
                        <p className='font-lato text-[20px] text-red-700  font-semibold text-center'>Price: {item.price}</p>
                    </div>
                </div>
                <div
                    className="item-btn flex w-[250px] h-[120px] justify-evenly items-center flex-col absolute bottom-0 ">
                    <button onClick={ ()=> handelBuy(item) }
                        className='w-[228px] h-[45px] bg-[#3749BB0D] hover:text-white hover:bg-[#3749bb] rounded font-lato font-semibold text-[#3749bb]'>Buy</button>
                    <button onClick={ ()=> handelShow(item) }
                        className='w-[228px] h-[45px]  rounded font-lato font-semibold text-[#666666] hover:bg-[#3749BB0D] hover:text-black'>Show
                        more</button>
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