import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  
  
  
  { name: '1 Clients', value: 20000 },
  { name: '20 Clients', value: 500000 },
  { name: '5 Clients', value: 100000 },
  { name: '6 Clients', value: 250000 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
   <div className= ' shadow-xl rounded-2xl'>
<div className="  ml-4  ">
  <div className="flex ">
  <span className='ml-7'>East</span>
  <div className='ml-2   w-[18px] h-[18px] bg-[#FFAB00] rounded-3xl'>
                          
                          </div>
                          <span className='ml-7'>North</span>
                          <div className='ml-2  w-[18px] h-[18px] bg-[#36B37E] rounded-3xl'>
                          
                          </div>
                          <span  className='ml-7'>South</span>
                          <div className='ml-2  w-[18px] h-[18px] bg-[#1939B7] rounded-3xl'>
                          
                          </div>
                          <span  className='ml-7'>West</span>
                          <div className=' ml-2  w-[18px] h-[18px] bg-[#36F] rounded-3xl'>
                          
                          </div>
                          
  </div>
  <div className="">
  <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={220}
        cy={200}
        innerRadius={80}
        outerRadius={150}
        fill="#8884d8"
      
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
</div>

   </div>
  );
};

export default Chart;