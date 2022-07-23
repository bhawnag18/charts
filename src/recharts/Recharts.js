import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend,BarChart,Bar,AreaChart,Area,PieChart,Pie} from 'recharts';



function Rechart()
{

    const[redata,setReData]=useState([]);
    useEffect(()=>{
        loadData();
    },[])
    const loadData=async()=>{
       const result=await axios.get("http://localhost:3005/dataa");
       setReData(result?.data);
    }
    console.log(redata);
    return(
        <>
           <ResponsiveContainer width="100%" aspect={3}>
               <LineChart data={redata} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
               <XAxis dataKey='name' interval={'preserveStartEnd'}/>
               <YAxis/>
               <Legend/>
               <Tooltip/>
                   <Line type='monotone' dataKey='student' activeDot={{r:8}} stroke='red'/>
                   <Line type='monotone' dataKey='fees' activeDot={{r:8}} stroke='green'/>
               </LineChart>
           </ResponsiveContainer>




           <ResponsiveContainer width="100%" aspect={3}>
               <AreaChart data={redata} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
               <XAxis dataKey='name' interval={'preserveStartEnd'}/>
               <YAxis/>
               <Legend/>
               <Tooltip/>
                   <Area type='monotone' dataKey='student' activeDot={{r:8}} fill='red'/>
                   <Area type='monotone' dataKey='fees' activeDot={{r:8}} fill='green'/>
               </AreaChart>
           </ResponsiveContainer>




           <ResponsiveContainer width="100%" aspect={3}>
               <BarChart data={redata} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
               <XAxis dataKey='name' interval={'preserveStartEnd'}/>
               <YAxis/>
               <Legend/>
               <Tooltip/>
                   <Bar dataKey='student' fill='red'/>
                   <Bar dataKey='fees' fill='green'/>
               </BarChart>
           </ResponsiveContainer>


           
               <PieChart data={redata} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              
               
                <Tooltip/> 
                   <Pie nameKey='name' dataKey='student' data={redata} fill='red' cx='200' cy='200' outerRadius={60}/>
                   <Pie nameKey='name' dataKey='fees' data={redata} fill='green' label cx='200' cy='200' innerRadius={70}/>
               </PieChart>
           


           
        </>
    );
}
export default Rechart;