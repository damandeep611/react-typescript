import { useEffect, useState } from 'react'
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'

const API_KEY = 


export default function BasicEffect(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState('MSFT')
  const [startDate, setStartDate] = useState('2023-01-01')
  const [endDate, setEndDate] = useState('2023-12-31')

  useEffect(()=> {
    const fetchData = async()=> {
      try{
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
        const result = await response.json()
        if(result['Error Message']){
          throw new Error(result['Error message'])
        }
        //transform the data into a format recharts can use 
        const timeSeries = result['Time Series (Daily)']
        const formattedData = Object.keys(timeSeries).filter((date)=> date >= startDate && date <= endDate).map((date)=> ({date, close: parseFloat(timeSeries[date]['4. close']),}))
        setData(formattedData)
        setLoading(false)
      }catch(error){
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData()
  },[symbol, startDate, endDate]) // refetch when symbol or date range changes

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error fetching: {error}</div>
  
  return(
    <div>
      <select value={symbol} onChange={(e)=> setSymbol(e.target.value)}>
        <option value="MSFT">Microsoft</option>
        <option value="AAPL">Apple</option>
        <option value="GOOGL">Google</option>
        <option value="AMZN">Amazon</option>
      </select>
      <input type="date" value={startDate} onChange={(e)=> setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e)=> setEndDate(e.target.value)} />
      <LineChart width={800} height={400} data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="close" stroke='#8884d8'/>
      </LineChart>
    </div>
  )
}