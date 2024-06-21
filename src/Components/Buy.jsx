import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Buy = () => {

        const data = useSelector((state)=> state.counter.value)
        const navigate = useNavigate()

        console.log(data)


const handelShow = ()=>{
    navigate('/cart')
}

return (
<>
    <section className='h-[550px] bg-white'>
        <div className="container">
            <div className="item flex">
                <div className="item-image w-[500px] h-[500px]">
                    <img src={data.image} alt="image" />
                </div>
                <div className="item-details">
                    <div
                        className="item-details--title font-lato text-[30px] text-[#3749bb] font-extrabold  ml-[60px] mt-[40px]">
                    </div>
                    <div className="item-details--features ml-[60px] mt-[40px]">
                        <h2 className='font-lato text-[20px] text-black font-extrabold'>Key Features</h2>
                        <ul className='font-lato text-[17px] text-black  font-medium'>
                            <li>Brand: {data.brand}</li>
                            <li>Status: {data.status}</li>
                            <li>Technologies: {data.technologies}</li>
                            <li>Maximum frequency: {data.frequency}</li>
                        </ul>

                        <p className='font-lato mt-5 text-[25px] text-red-700 font-extrabold border-e border-2 rounded-full'>Price: {data.price}</p>
                    </div>
                    <div className="item-details--btn  ml-[60px] mt-[65px]">
                        <button onClick={handelShow}
                            className='w-[228px] h-[60px] bg-[#3749BB0D] hover:text-white hover:bg-[#3749bb] rounded font-lato font-semibold text-[#3749bb] border-e border-2 rounded-full'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className='bg-[#f2f4f8] '>
        <div className="container">
            <div
                className="specification mt-[50px] rounded-md w-full h-full bg-white font-lato text-[25px] text-black font-bold ">
                <h2 className=' ml-[30px] pt-4'>Specification</h2>
                <div className="basic-information font-lato text-[17px] text-black  font-medium  ml-[50px] mr-[50px]">
                    <h3 className='text-[17px] text-[#3749bb]  font-bold mb-[20px] mt-[20px] bg-[#f2f4f8] rounded'>Basic
                        information</h3>
           
                    <p>Base Frequency: {data.base_frequency}</p>
                    <hr />
                    <p>Maximum Turbo Frequency: {data.maximum_turbo_frequency}</p>
                    <hr />
                    <p>Cache: {data.cache}</p>
                    <hr />
                    <p>Cores: {data.cores}</p>
                    <hr />
                    <p>Threads: {data.threads}</p>
                    <hr />
                    <p>Default TDP: {data.default_tdp}</p>
                    <hr />
                </div>
                <div
                    className="memory-specifications  font-lato text-[17px] text-black  font-medium  ml-[50px] mr-[50px]">
                    <h3 className='text-[17px] text-[rgb(74,224,230)]  font-bold mb-[20px] mt-[20px] bg-[#f2f4f8] rounded'>
                        Memory Specifications</h3>

                    <p>Maximum Speed: {data.maximum_speed}</p>
                    <hr />
                    <p>Type: {data.type}</p>
                    <hr />
                    <p>Max Number of Channels: {data.max_number_of_channels}</p>
                    <hr />

                </div>
                <div
                    className="warranty-information  font-lato text-[17px] text-black  font-medium  ml-[50px] mr-[50px]">
                    <h3 className='text-[17px] text-[rgb(79,245,223)]  font-bold mb-[20px] mt-[20px] bg-[#f2f4f8] rounded'>
                        Warranty Information</h3>
                    <p className='pb-5'>Manufacturing Warranty: {data.warranty}</p>
                </div>
             
            </div>
        </div>
    </footer>



</>
)
}

export default Buy