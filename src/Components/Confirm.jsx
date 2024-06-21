import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {
    const navigate = useNavigate()

    const handelShow = ()=>{
      navigate('/')
  }

return (
<>

    <div className="container  flex h-[900px] justify-center items-center">


<div className="confirm text-center">
        <h1 className='font-lato text-[100px] text-black font-extrabold'>Order Confirmed</h1>
        <button onClick={handelShow} className='w-[228px] h-[45px] mt-[30px] bg-[#3749BB0D] hover:text-white hover:bg-[#3749bb] rounded font-lato font-semibold text-[#3749bb]'>Continue Shopping</button>
</div>

    </div>




</>
)
}

export default Confirm