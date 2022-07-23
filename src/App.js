
import './App.css';
import Rechart from './recharts/Recharts';
// import {ResponsiveContainer,LineChart,Line,PieChart,Pie,AreaChart,Area,BarChart,Bar,XAxis,YAxis,CartesianGrid,Legend,Tooltip} from 'recharts';
// const dataa=[
//   {
//     name:"python",
//     student:13,
//     fees:10
//   },
//   {
//     name:"javascript",
//     student:15,
//     fees:12
//   },
//   {
//     name:"php",
//     student:5,
//     fees:10
//   },
//   {
//     name:"java",
//     student:10,
//     fees:5
//   },
//   {
//     name:"c#",
//     student:9,
//     fees:4
//   },
//   {
//     name:"c++",
//     student:10,
//     fees:8
//   }

// ]

function App() {
  return (
   <>
     {/* <h3>Line Chart</h3>
     <ResponsiveContainer width="100%" aspect={3}>
       <LineChart data={dataa} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
       <CartesianGrid/>
       <Tooltip/> 
       <XAxis dataKey='name' interval={'preserveStartEnd'}/>
       <YAxis/>
       <Legend/>
         <Line type='monotone' dataKey='student' stroke='red' activeDot={{r:8}}/>
         <Line type='monotone' dataKey='fees' stroke='green' activeDot={{r:8}}/>
       </LineChart>
     </ResponsiveContainer>




     <h3>Area Chart</h3>
     <ResponsiveContainer width="100%" aspect={3}>
       <AreaChart data={dataa} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
       <CartesianGrid/>
       <Tooltip/>
       <XAxis dataKey='name' interval={'preserveStartEnd'}/>
       <YAxis/>
       <Legend/>
         <Area type='monotone' dataKey='student' fill='red' activeDot={{r:8}}/>
         <Area type='monotone' dataKey='fees' fill='green' activeDot={{r:8}}/>
       </AreaChart>
     </ResponsiveContainer>



     <h3>Bar Chart</h3>
     <ResponsiveContainer width="100%" aspect={3}>
       <BarChart data={dataa} width={500}height={300}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
       <CartesianGrid/>
       <Tooltip/>
       <XAxis dataKey='name' interval={'preserveStartEnd'}/>
       <YAxis/>
       <Legend/>
         <Bar dataKey='student' fill='red'/>
         <Bar dataKey='fees' fill='green'/>
       </BarChart>
     </ResponsiveContainer>


     <h3>Pie Chart</h3>
     
       <PieChart width={400} height={400}  margin={{ top: 10, right: 30, left: 20, bottom: 20}}>
       
      
         <Pie  data={dataa} nameKey='name' dataKey='student' outerRadius={60} fill='red' cx='50%' cy='50%' 
            />
             <Pie  data={dataa} nameKey='name' dataKey='fees' innerRadius={70} fill='green' cx='50%' cy='50%'  label
            />
          
         <Tooltip/>
         
       </PieChart>
        */}
        <Rechart/>
     
   </>
  );
}

export default App;
