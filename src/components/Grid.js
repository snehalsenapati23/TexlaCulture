import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import texla from '../assets/texla.png'


const columns = [
  { field: 'id', headerName: 'ID', width: 90, hide:false },
  {
    field: 'CompanyName',
    headerName: 'Company Name',
    width: 150,

    editable: true,
    renderCell: (params) => {
      
      return (
        <div
          style={{

            color: "black",
            padding: "4px 8px",
            borderRadius: "4px",
            display:'flex',
            flexDirection:'row',
            fontSize:11,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
        <img src={texla} style={{width:'40px', height:'40px', borderRadius:'50%'}} alt="" />
       <div className="flex flex-col">
        <span> <span className=' text-lg'>{params.row.CompanyName}</span></span>
        <span>dddd</span>
       </div>
        </div>
      );
    },
  },
  {
    field: 'onboarding',
    headerName: 'OnBoardingDate',
    width: 150,
    editable: true,
    renderCell: (params) => {
   
    
    
      return (
        <div
          style={{
           
            color: "black",
            padding: "4px 8px",
            borderRadius: "4px",
            display:"flex",
            fontSize: "14px",
fontStyle: "normal",
fontWeight: "550",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          {params.row.onbording}
        </div>
      );
    },
  },
  {
    field: 'golivedate',
    headerName: 'Go-LiveDate',
    type: 'number',
    width: 110,
    editable: true,
  },
  
  {
    field: 'totaluser',
    headerName: 'Total User base',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) => {
   
    
    
      return (
        <div
          style={{
           
            color: "black",
            padding: "4px 8px",
            borderRadius: "4px",
            display:"flex",
            fontSize: "14px",
fontStyle: "normal",
fontWeight: "550",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          {params.row.totaluser}
        </div>
      );
    },
  },
  {
    field: 'lastbilling',
    headerName: 'Last Billing',
    width: 150,

    editable: true,
    renderCell: (params) => {
      
      return (
        <div
          style={{

            color: "black",
            padding: "4px 8px",
            borderRadius: "4px",
            display:'flex',
            flexDirection:'row',
            fontSize:11,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
        <img src={texla} style={{width:'40px', height:'40px', borderRadius:'50%'}} alt="" />
       <div className="flex flex-col">
        <span> <span className=' text-lg'>{params.row.lastbilling}</span></span>
        <span>dddd</span>
       </div>
        </div>
      );
    },
  },
  {
    field: 'status',
    headerName: 'status',
    width: 150,
    editable: true,
    renderCell: (params) => {
        let statusColor = "";
      console.log(params.row.status)
  
      statusColor =  params.row.status==='active'? "green" :"grey";
        return (
          <div
            style={{
              backgroundColor: statusColor,
              color: "black",
              padding: "4px 8px",
              borderRadius: "4px",
              display:"flex",
              fontSize:11,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            {params.row.status}
          </div>
        );
      },
  },
 
  
];

const rows = [
  { id: 1,  CompanyName: 'Texlaculture',golivedate:"6 may 1290",onbording:"12 jan 1980", age: 35,status: 'active',totaluser:"7575",lastbilling:'07 Aug 7878' },
  { id: 2,  CompanyName: 'PinchLife',golivedate:"7 may 67676",onbording:"12 jan 1980", age: 42 ,status: 'draft',totaluser:"5u5",lastbilling:'07 Aug 7878' },
  { id: 3,  CompanyName: 'O Buddy',golivedate:"8 may 8585",onbording:"12 jan 1980", age: 45 ,status: 'active',totaluser:"8575" ,lastbilling:'07 Aug 7878'},
 
];

export default function Grid() {
  // const CustomFooter = () => (
  //   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  //     <div>
  //       <label htmlFor="checkbox">Your Label:</label>
  //       <input type="checkbox" id="checkbox" />
  //     </div>
  //     <div>Other Footer Content</div>
  //   </div>
  // );

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowHeight={() => "auto"}
        
          sx={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: "black",
            fontSize: 15,
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
              color:"white !important"
            },
            "&.MuiDataGrid-root .MuiDataGrid-column--cell:focus-within": {
              outline: "none !important",
              transition: "width 0.3s ease",
            },

            "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
              py: "8px",
            },
            "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
              py: "15px",
            },
            "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
              py: "22px",
            },

            height: "auto",
            width: "100%",
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },

            "& .MuiDataGrid-root": {
              borderBottom: "1px solid black",
            },
            "& .MuiDataGrid-sortIcon path": {
              fill: "white", // Change to your desired color
              fontSize: "24px", // Change to your desired font size
              opacity: 1, // Ensure full visibility
            },
            "& .MuiSvgIcon-root " :{
             
              color: "#637381",
              fontSize: "1.25rem !important"
            },
            // "& .MuiSvgIcon-root:hover " :{
             
            //   color: "red !important",
            //   fontSize: "1.25rem !important"
            // },
           
           

            // Style for three-dot icon
            // "& .css-ptiqhd-MuiSvgIcon-root path": {
            //   fill: "white", // Change to your desired color
            //   fontSize: "30px", // Change to your desired font size
            //   opacity: 1, // Ensure full visibility
            // },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid black",
            },
            "& .salaryStatus-column--cell": {
              color: "#637381",
            },

            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-column-cell:focus": {
              outline: "none",
            },

            "& .MuiDataGrid-footerContainer": {
              color: "#637381",
              borderTop: "none",
              backgroundColor: "#F9FAFB",
            },
            "& .MuiPaginationItem-root": {
              color: "#637381",
            },

            "& .MuiDataGrid-columnHeaders": {
              // color:"#009df1;",

              backgroundColor: "#F9FAFB",
              color: "#637381",

              fontSize: "17px",
              // fontWeight:900
            },
           
          }}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
     
        disableRowSelectionOnClick
        // components={{
        //   footer: CustomFooter,
        // }}
      />
    </Box>
  );
}