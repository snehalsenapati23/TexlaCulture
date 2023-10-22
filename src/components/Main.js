import React,{useState} from 'react'

import Chart from './Chart';
import Grid from './Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FaSearch } from 'react-icons/fa';






const options = ['All', 'Option 2'];

const datas = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




const Main = () => {

    const [valuee, setValuee] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
      };
    return (
        <div className='px-[25px] pt-[25px]  pb-[40px] '>
            <div className=' items-center justify-between'>
                <h1 className='text-[20px]  text-[#212B36] font-semibold leading-[34px] font-normal cursor-pointer'>Client Management</h1>

          <div className="box text-[#212B36]">
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Dashboard" className='text-[#212B36]' />
          <Tab label="Client Details"  />
          
        </Tabs>
      </Box>
      
    </Box>
          </div>
            </div>
            <div className=" flex  heading2 font-[16px] font-medium mt-[25px] ">
                <div className='ml-[18px] text-[#212B36] font-semibold'>Key Peformance Indicator</div>
                <div className=' ml-[480px] text-[#212B36]  font-semibold'>Companies Status</div>
                <div className=' ml-[230px] text-[#212B36]  font-semibold'>Active User Base</div>
            </div>
            <div className="flex gap-9">
            <div className='rounded-xl flex-initial gap-[60px] grid grid-cols-3     pb-[15px] border-x-fuchsia-50 shadow-xl p-8  flex' >
                <div className=' h-[70px]  bg-white border-l-[4px] border-[#091A7A] flex items-center justify-between px-[10px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#454F5B] text-[15px] w-[161px] font-bold '>Client Retention Rate</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#091A7A] mt-[5px]  '>55%</h1>
                    </div>
                    

                </div>
                <div className=' h-[70px]  bg-white border-l-[4px] border-[#006C9C] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#454F5B] text-[15px] w-[161px] font-bold'>
                            Client Satisfication</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#006C9C] mt-[5px]'>55%</h1>
                    </div>
                  
                </div>
                <div className=' h-[70px]  bg-white border-l-[4px] border-[#006124] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#454F5B] text-[15px] w-[161px] font-bold'>Revenue Generated </h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#006124] mt-[5px]'>55%</h1>
                    </div>
                    
                </div>

            </div>
            <div className='rounded-xl flex-initial gap-[48px] grid grid-cols-3    pb-[15px] border-x-fuchsia-50 shadow-xl p-8 w-[440px] flex' >
                <div className=' h-[70px]  bg-white border-l-[4px] border-[#091A7A] flex items-center justify-between px-[10px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#454F5B] text-[16px] font-bold'>Total</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#091A7A] mt-[5px]'>20</h1>
                    </div>
                    

                </div>
                <div className=' h-[70px]  bg-white border-l-[4px] border-[#006C9C] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#454F5B] text-[16px] font-bold'>
                            Active</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#006C9C] mt-[5px]'>15</h1>
                    </div>
                  
                </div>
                <div className=' h-[70px]  bg-white border-l-[4px] border-[#006124] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#454F5B] text-[16px] font-bold'>New </h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#006124] mt-[5px]'>3</h1>
                    </div>
                    
                </div>

            </div>
                
                <div className=' h-9  mt-3'>
                    <div className='shadow-xl rounded-xl mr-[30px]'>
                    <div className='flex ml-11  '>
                    <div className='  w-[18px] h-[18px] bg-[#1939B7] rounded-3xl'>
                          
                          </div><span>89% App User</span>
                          <div className='  w-[18px] h-[18px] ml-7 bg-[#36B37E] rounded-xl'>
                                
                          </div><span >11% Web User</span>
                    </div>
                       <div className=' p-5   ml-9'>
                      
                  <div className="flex  h-10  "> 
                  <div className="progress w-[198px] h-[19px] bg-[#1939B7] rounded-xl">
            
                                 </div>
            <div className="progress ml-1 w-[62px] h-[19px] bg-[#36B37E] rounded-xl"></div>
                  </div>
            
                       </div>
                    </div>
</div>
                </div>
              
                <div className="text flex justify-between mr-[190px]">
                <div>
                <p className='text-[#212B36] font-[18px] font-bold mt-6'>Onboarded Companies</p>
                <hr class="h-px my-8 bg-[#919EAB] w-[970px] border-0 dark:bg-gray-200"></hr>
                </div>
                <div className="text-[#212B36] font-[18px] font-bold mt-6">Regional Metrics</div>
                </div>
            <div className=" flex dropdown">
            <div>
    
      <br />
      <Autocomplete
        value={valuee}
        onChange={(event, newValue) => {
          setValuee(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Service type" />}
      />
    </div>
    <FaSearch className='w-[24px] h-[24px]  text-slate-500 mt-8 ml-5'  />
    <Box
      sx={{
        width: 650,
        maxWidth: '100%',
      }} className=" border-collapse  mt-6"
    >
        
        <input type="text" placeholder='Search Client or Invoice number...' className=' h-[40px]  pl-[13px] w-[350px] rounded-[5px] placeholder:text-[19px] leading-[20px] font-normal' />
    </Box>
            </div>
          

            <div className="gridchart mb-4 flex mt-5">
            <div className="grid">
            <Grid />
            </div> 
            <div className="">
                
                <div className='chart'>
                <Chart />
            </div>
            </div>
         
            </div>
            <div className={`dark-light-toggle  ${isDarkMode ? "dark" : "light"}`}>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        Dense
      </label>
    </div>

          </div >
    )
}

export default Main   