import React, { useState } from 'react'
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"
import profile from "../assets/#Img_Avatar.25.png"
import img3 from '../assets/ic_user_group.png'
import img4 from '../assets/ic_notifications.png'
import img5 from '../assets/GB.png'

const Dashboardview = () => {
    const [open, setOpen] = useState(false)

    const showProfile = () => {
        // alert("helloo")
        setOpen(!open)
    }

    return (
        <div className=''>
            <div className='flex items-center justify-between h-[70px]  px-[25px] '>
            
                <div className='flex items-center bg-[#FFF] rounded-[5px]'>
                <FaSearch color='grey' />
                    <input type="text" className=' h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' />
                    

                </div>
                <div className='flex items-center gap-[10px]'>
                <div className='h-[20px] w-[40px] rounded-xl  cursor-pointer flex items-center justify-center relative z-40' >
                            <img src={img5} alt="" className='h-[40px] w-[70px] rounded-lg p-[6px]' />

                        </div>
                    <div className='flex  gap-[10px] border-r-[1px] pr-[25px] p-[8px]'>
                    <img src={img4} alt="" className='h-[30px] w-[30px] rounded-2xl' />
                    </div>
                    
                    <div className='h-[40px] w-[40px]  p-[8px] mr-[15px]  cursor-pointer flex items-center justify-center ' >
                            <img src={img3} alt="" className='h-[30px] w-[30px] rounded-2xl' />

                        </div>
                        <div className='h-[40px] w-[40px] rounded-2xl  cursor-pointer flex items-center justify-center relative z-40' >
                            <img src={profile} alt="" className='h-[50px] w-[50px] rounded-full p-[6px]' />

                        </div>

                        {
                            open &&
                            <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Settings</p>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Log out</p>
                            </div>

                        }



                    
                </div>
            </div>
        </div>
    )
}

export default Dashboardview