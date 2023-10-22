import React from 'react'
import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"
import img2 from '../assets/ic_banking.png'
import img3 from '../assets/ic_chevron_right.png'
import img4 from '../assets/ic_dashboard.png'
import img5 from '../assets/ic_chevron_down.png'
 const Sidebar = () => {
    return (
        <div className='bg-white px-[25px] h-screen w-[350px]'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-[#1939B7] font-bold  text-[32.893px] leading-[24px] font-extrabold cursor-pointer'>TEXLA CULTURE</h1>
            </div>
            <div className='flex items-center rounded-lg gap-[15px] py-[20px] border-b-[1px] bg-[#dbe1ff]  border-[#EDEDED]/[0.3] cursor-pointer'>
            <img src={img4} className='w-[30px] h-[30px]' alt="" />
                <p className='text-[16px] leading-[0px] font-bold text-[#1939B7] ml-11'>Dashboard</p>
                <img src={img5} alt="" className='h-[20px]  w-[20px] ml-[88px]' />
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <img src={img2} className='w-[30px] h-[30px]' alt="" />
                <p className='text-[16px] leading-[20px] font-bold text-[#637381] ml-11'>Companies</p>
                <img src={img3} alt="" className='h-[20px]  w-[20px] ml-[96px]' />
            </div>
            <div className=' w-full flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
            <img src={img2} className='w-[30px] h-[30px]' alt="" />
                <p className='text-[16px] w-full h-auto font-bold text-[#637381] ml-11'>Support and Tickets</p>
                <img src={img3} alt="" className='h-[20px]  w-[20px] ' />
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
            <img src={img2} className='w-[30px] h-[30px]' alt="" />
                <p className='text-[16px] leading-[20px] font-bold text-[#637381] ml-11'>User Admins</p>
                <img src={img3} alt="" className='h-[20px]  w-[20px] ml-[80px]' />
            </div>
           
            
            
        </div>
    )
}

export default Sidebar