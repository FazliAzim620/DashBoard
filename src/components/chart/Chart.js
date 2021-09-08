import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis,ResponsiveContainer , CartesianGrid, Tooltip } from "recharts";


const Chart=({title,data,grid,datakey})=> {
   

return (
        <>
        <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4/1}>
        <LineChart data={data}>
            <XAxis stroke='#5550bd' dataKey='name'></XAxis>
            <Line type='monotone' stroke='#5550bd' dataKey={datakey} ></Line>
  <Tooltip/>
  {grid &&<CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
        </LineChart>

        </ResponsiveContainer>

        </div>
            
        </>
    )
}

export default Chart;
