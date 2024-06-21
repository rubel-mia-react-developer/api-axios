
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const data = useSelector((state)=> state.counter.value)
  const navigate = useNavigate()

  const handelShow = ()=>{
    navigate('/confirm')
}

  return (

<>



<footer className='bg-[#f2f4f8] '>
        <div className="container">
            <div
                className="specification mt-[50px] rounded-md w-full h-full bg-white font-lato text-[25px] text-black font-bold ">
                <h2 className=' ml-[30px] pt-4'>Shopping Cart</h2>
                <div className="cart flex font-lato ml-[50px] mr-[50px]">
                    

                    <div className="cart-image">
                      <img className='w-[300px] h-[300px] mt-[10px] mb-[20px]' src={data.image} alt="img" />
                    </div>
                    <div className="cart-information ml-[150px]">
                      <h1 className='text-[25px] text-black  font-bold mb-[30px] '>Model: {data.product}</h1>

                      <ul className='text-[17px] text-black  font-medium mb-[15px] '>
                        <li>Brand:  {data.brand}</li>
                        <li>Product Code:  {data.product_code}</li>
                        <li>Type:  {data.type}</li>
                      </ul>

                      <h2 className='text-red-700  font-bold mb-[15px]'>Price: {data.price}</h2>

                      <button onClick={handelShow}
                        className='w-[228px] h-[45px] bg-[#3749BB0D] hover:text-white hover:bg-[#3749bb] rounded font-lato font-semibold text-[#3749bb]'>Confirm</button>
                    </div>




                </div>
            </div>
        </div>
    </footer>






</>



  )
}

export default Cart
